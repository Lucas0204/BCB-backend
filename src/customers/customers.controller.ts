import { Controller, Get, Post, Body, Param, InternalServerErrorException } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}

    @Post()
    async create(@Body() createCustomerDto: CreateCustomerDto) {
        try {
            return await this.customersService.create(createCustomerDto);
        } catch (err) {
            throw new InternalServerErrorException('Something went wrong!');
        }
    }

    @Get(':id')
    async getCustomer(@Param('id') id: string) {
        try {
            return await this.customersService.getCustomer(+id);
        } catch (err) {
            throw new InternalServerErrorException('Something went wrong!');
        }
    }
}
