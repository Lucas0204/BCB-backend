import { CreatePlanDto } from "src/plans/dto/create-plan.dto";
import { PlansRepository } from "../plans-repository";
import { PrismaService } from "database/prisma/prisma-service";

export class PrismaPlansRepository implements PlansRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreatePlanDto): Promise<void> {
        await this.prisma.customers_plan_data.create({ data });
    }
}
