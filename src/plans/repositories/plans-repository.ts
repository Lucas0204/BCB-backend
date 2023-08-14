import { CreatePlanDto } from "../dto/create-plan.dto";
import { UpdatePlanDto } from "../dto/update-plan.dto";
import { CustomerPlan } from "../entities/customer-plan.entity";

export interface PlansRepository {
    create(data: CreatePlanDto): Promise<void>;
    update(data: UpdatePlanDto): Promise<void>;
    getCustomerPlan(customer_id: number): Promise<CustomerPlan>;
    getBalance(customer_id: number): Promise<number>;
}
