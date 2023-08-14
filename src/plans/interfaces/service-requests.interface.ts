import { Plans } from "../entities/customer-plan.entity";

export interface AddCreditServiceRequest {
    customer_id: number;
    amount: number;
}

export interface ChangeLimitServiceRequest {
    customer_id: number;
    limit: number;
}

export interface ChangePlanServiceRequest {
    customer_id: number;
    plan: Plans;
}
