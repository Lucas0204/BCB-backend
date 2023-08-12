import { Module } from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlansController } from './plans.controller';
import { PrismaPlansRepository } from './repositories/implementations/prisma-plans-repository';
import { PrismaService } from 'database/prisma/prisma-service';

@Module({
    controllers: [PlansController],
    providers: [
        PlansService,
        PrismaService,
        PrismaPlansRepository
    ]
})
export class PlansModule {}
