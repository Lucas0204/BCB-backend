import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "src/customers/dto/create-customer.dto";
import { CustomersRepository } from "../customers-repository";
import { PrismaService } from "database/prisma/prisma-service";
import { Customer } from "src/customers/entities/customer.entity";

@Injectable()
export class PrismaCustomersRepository implements CustomersRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateCustomerDto): Promise<Customer> {
        return this.prisma.customers.create({ data });
    }

    getCustomer(id: number): Promise<Customer> {
        return this.prisma.customers.findUnique({
            where: { id },
            include: {
                customers_plan_data: true
            }
        });
    }
}
