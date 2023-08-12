import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "src/customers/dto/create-customer.dto";
import { CustomersRepository } from "../customers-repository";
import { PrismaService } from "database/prisma/prisma-service";

@Injectable()
export class PrismaCustomersRepository implements CustomersRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateCustomerDto): Promise<void> {
        await this.prisma.customers.create({ data });
    }
}
