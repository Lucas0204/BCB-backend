import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { PrismaPlansRepository } from './repositories/implementations/prisma-plans-repository';
import {
    AddCreditServiceRequest,
    ChangeLimitServiceRequest,
    ChangePlanServiceRequest
} from './interfaces/service-requests.interface';

@Injectable()
export class PlansService {
    private readonly logger: Logger = new Logger(PlansService.name);

    constructor(private readonly plansRepository: PrismaPlansRepository) {}

    async create(createPlanDto: CreatePlanDto) {
        try {
            return await this.plansRepository.create(createPlanDto);
        } catch (err) {
            this.logger.error(err);
            throw err;
        }
    }

    async addCredit({ customer_id, amount }: AddCreditServiceRequest) {
        const customer_plan = await this.plansRepository.getCustomerPlan(customer_id);

        if (!customer_plan) {
            throw new BadRequestException('Customer must have a plan to add credit!');
        }

        if (customer_plan.plan !== 'PREPAID') {
            throw new BadRequestException("It is not possible to add credit to a non prepaid plan!");
        }

        try {
            await this.plansRepository.update({
                customer_id,
                balance: customer_plan.balance + (amount * 100)
            });
        } catch (err) {
            this.logger.error(err);
            throw err;
        }
    }

    async changeLimit({ customer_id, limit }: ChangeLimitServiceRequest) {
        const customer_plan = await this.plansRepository.getCustomerPlan(customer_id);

        if (!customer_plan) {
            throw new Error('Customer must have a plan to add credit!');
        }

        try {
            await this.plansRepository.update({
                customer_id,
                limit: limit * 100
            });
        } catch (err) {
            this.logger.error(err);
            throw err;
        }
    }

    async changePlan({ customer_id, plan }: ChangePlanServiceRequest) {
        const customer_plan = await this.plansRepository.getCustomerPlan(customer_id);

        if (!customer_plan) {
            throw new Error('Customer must have a plan to add credit!');
        }

        if (customer_plan.plan === plan) return;

        try {
            await this.plansRepository.update({
                customer_id,
                plan
            });
        } catch (err) {
            this.logger.error(err);
            throw err;
        }
    }

    async getBalance(customer_id: number) {
        try {
            const balance = await this.plansRepository.getBalance(customer_id);
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(balance / 100);
        } catch (err) {
            this.logger.error(err);
            throw err;
        }
    }

    async getPlanData(customer_id: number) {
        try {
            return await this.plansRepository.getCustomerPlan(customer_id);
        } catch (err) {
            this.logger.error(err);
            throw err;
        }
    }
}
