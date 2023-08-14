import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, Matches } from "class-validator";

export class CreatePlanDto {
    @Transform(({ value }) => +value)
    @IsNumber()
    @IsNotEmpty()
    customer_id: number;

    @IsString()
    @Matches('PREPAID|POSTPAID')
    plan: 'PREPAID' | 'POSTPAID';
}
