import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { PrismaPlansRepository } from './repositories/implementations/prisma-plans-repository';

@Injectable()
export class PlansService {
    constructor(private readonly plansRepository: PrismaPlansRepository) {}

    create(createPlanDto: CreatePlanDto) {
        this.plansRepository.create(createPlanDto);
        return 'This action adds a new plan';
    }

    addCredit() {}
    getBalance() {}
    changeLimit() {}
    changePlan() {}
}
