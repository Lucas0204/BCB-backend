import { CreateCustomerDto } from "../dto/create-customer.dto";

export interface CustomersRepository {
    create(data: CreateCustomerDto): Promise<void>;
}