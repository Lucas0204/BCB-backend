import { IsNotEmpty, IsNumber, IsString, Matches } from "class-validator";

export class CreatePlanDto {
    @IsNumber()
    @IsNotEmpty()
    customer_id: number;

    @IsString()
    @Matches('PREPAID|POSTPAID')
    plan: 'PREPAID' | 'POSTPAID';
}
