import { Injectable } from "@nestjs/common";
import { CreatePlanDto } from "src/plans/dto/create-plan.dto";
import { PlansRepository } from "../plans-repository";
import { PrismaService } from "database/prisma/prisma-service";
import { UpdatePlanDto } from "src/plans/dto/update-plan.dto";
import { CustomerPlan } from "src/plans/entities/customer-plan.entity";

@Injectable()
export class PrismaPlansRepository implements PlansRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreatePlanDto): Promise<void> {
        await this.prisma.customers_plan_data.create({ data });
    }

    async update({ customer_id, ...data }: UpdatePlanDto): Promise<void> {
        await this.prisma.customers_plan_data.update({
            where: { customer_id },
            data
        });
    }

    getCustomerPlan(customer_id: number): Promise<CustomerPlan> {
        return this.prisma.customers_plan_data.findUnique({
            where: { customer_id }
        });
    }

    async getBalance(customer_id: number): Promise<number> {
        const plan_data = await this.prisma.customers_plan_data.findUnique({
            where: { customer_id }
        });

        return plan_data.balance;
    }
}
