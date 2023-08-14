import { IsNotEmpty, IsString, Matches } from "class-validator";
import { Plans } from "../entities/customer-plan.entity";

export class ChangePlanDto {
    @IsString()
    @IsNotEmpty()
    @Matches('PREPAID|POSTPAID')
    plan: Plans;
}
