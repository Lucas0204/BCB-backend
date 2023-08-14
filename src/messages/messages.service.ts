import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { PrismaMessagesRepository } from './repositories/implementations/prisma-messages-repository';
import { PrismaPlansRepository } from 'src/plans/repositories/implementations/prisma-plans-repository';
import { MessageProvider } from './providers/message-provider';

@Injectable()
export class MessagesService {
    private readonly message_cost = 25;

    constructor(
        private readonly messagesRepository: PrismaMessagesRepository,
        private readonly plansRepository: PrismaPlansRepository,
        private readonly messageProvider: MessageProvider
    ) {}

    async sendMessage({ from_customer_id, is_whatsapp, text, to_phone_number }: CreateMessageDto) {
        const customer_plan = await this.plansRepository.getCustomerPlan(from_customer_id);

        if (!customer_plan) {
            throw new BadRequestException('Customer must have a plan to send message!')
        }

        if (customer_plan.plan === 'PREPAID') {
            if (customer_plan.balance < this.message_cost) {
                throw new BadRequestException('Insufficient funds!');
            }

            this.plansRepository.update({
                customer_id: from_customer_id,
                balance: customer_plan.balance - this.message_cost
            });
        } else {
            const debit_greater_than_limit = customer_plan.debit >= customer_plan.limit;
            const debit_plus_cost_pass_limit = customer_plan.debit + this.message_cost > customer_plan.limit;

            if (debit_greater_than_limit || debit_plus_cost_pass_limit) {
                throw new BadRequestException('Debit limit reached!');
            }

            this.plansRepository.update({
                customer_id: from_customer_id,
                debit: customer_plan.debit + this.message_cost
            });
        }

        await this.messageProvider.send();
        await this.messagesRepository.create({
            from_customer_id,
            is_whatsapp,
            text,
            to_phone_number
        });
    }
}
