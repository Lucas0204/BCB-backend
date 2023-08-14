import { Injectable, Logger } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { PrismaCustomersRepository } from './repositories/implementations/prisma-customers-repository';

@Injectable()
export class CustomersService {
    private readonly logger: Logger = new Logger(CustomersService.name);

    constructor(private readonly customersRepository: PrismaCustomersRepository) {}

    async create(createCustomerDto: CreateCustomerDto) {
        try {
            return await this.customersRepository.create(createCustomerDto);
        } catch (err) {
            this.logger.error(err);
            throw err;
        }
    }

    async getCustomer(id: number) {
        return this.customersRepository.getCustomer(id);
    }
}
