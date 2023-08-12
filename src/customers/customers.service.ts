import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaCustomersRepository } from './repositories/implementations/prisma-customers-repository';

@Injectable()
export class CustomersService {
    constructor(private readonly customersRepository: PrismaCustomersRepository) {}

    async create(createCustomerDto: CreateCustomerDto) {
        return await this.customersRepository.create(createCustomerDto);
    }

    findAll() {
        return `This action returns all customers`;
    }

    findOne(id: number) {
        return `This action returns a #${id} customer`;
    }

    update(id: number, updateCustomerDto: UpdateCustomerDto) {
        return `This action updates a #${id} customer`;
    }

    remove(id: number) {
        return `This action removes a #${id} customer`;
    }
}
