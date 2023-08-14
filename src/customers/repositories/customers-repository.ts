import { CreateCustomerDto } from "../dto/create-customer.dto";
import { Customer } from "../entities/customer.entity";

export interface CustomersRepository {
    create(data: CreateCustomerDto): Promise<Customer>;
    getCustomer(id: number): Promise<Customer>;
}
