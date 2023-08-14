import {
    Controller,
    Post,
    Body,
    Patch,
    Param,
    BadRequestException,
    Get,
    InternalServerErrorException
} from '@nestjs/common';
import { PlansService } from './plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { AddCreditDto } from './dto/add-credit.dto';
import { ChangeLimitDto } from './dto/change-limit.dto';
import { ChangePlanDto } from './dto/change-plan.dto';

@Controller('plans')
export class PlansController {
    constructor(private readonly plansService: PlansService) {}

    @Post()
    async create(@Body() createPlanDto: CreatePlanDto) {
        try {
            return await this.plansService.create(createPlanDto);
        } catch (err) {
            throw new InternalServerErrorException('Something went wrong!');
        }
    }

    @Get(':customer_id')
    async getCustomerPlan(@Param('customer_id') customer_id: string) {
        try {
            return await this.plansService.getPlanData(+customer_id);
        } catch (err) {
            throw new InternalServerErrorException('Something went wrong!');
        }
    }

    @Patch('add-credit/:customer_id')
    async addCredit(@Param('customer_id') customer_id: string, @Body() addCreditDto: AddCreditDto) {
        if (!addCreditDto) {
            throw new BadRequestException('Missing data to add credit!');
        }

        try {
            return await this.plansService.addCredit({
                customer_id: +customer_id,
                amount: addCreditDto.amount
            });
        } catch (err) {
            if (err instanceof BadRequestException) throw err;

            throw new InternalServerErrorException('Something went wrong!');
        }
    }

    @Get('balance/:customer_id')
    async getCustomerBalance(@Param('customer_id') customer_id: string) {
        if (typeof +customer_id !== 'number') {
            throw new BadRequestException('Invalid value to get customer balance!');
        }

        try {
            return await this.plansService.getBalance(+customer_id);
        } catch (err) {
            throw new InternalServerErrorException('Something went wrong!');
        }
    }

    @Patch('change-limit/:customer_id')
    async changeLimit(@Param('customer_id') customer_id: string, @Body() changeLimitDto: ChangeLimitDto) {
        if (!changeLimitDto) {
            throw new BadRequestException('Missing data to add credit!');
        }

        try {
            return await this.plansService.changeLimit({
                customer_id: +customer_id,
                limit: changeLimitDto.limit
            });
        } catch (err) {
            throw new InternalServerErrorException('Something went wrong!');
        }
    }
    
    @Patch('change-plan/:customer_id')
    async changePlan(@Param('customer_id') customer_id: string, @Body() changePlanDto: ChangePlanDto) {
        if (!changePlanDto) {
            throw new BadRequestException('Missing data to add credit!');
        }

        try {
            return await this.plansService.changePlan({
                customer_id: +customer_id,
                plan: changePlanDto.plan
            });
        } catch (err) {
            throw new InternalServerErrorException('Something went wrong!');
        }
    }
}
