import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { PrismaService } from 'database/prisma/prisma-service';
import { PrismaCustomersRepository } from './repositories/implementations/prisma-customers-repository';

@Module({
    controllers: [CustomersController],
    providers: [
        CustomersService,
        PrismaService,
        PrismaCustomersRepository
    ]
})
export class CustomersModule {}
