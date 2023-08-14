import { IsNotEmpty, IsNumber, IsOptional, IsString, Matches } from "class-validator";

export class UpdatePlanDto {
    @IsNumber()
    @IsNotEmpty()
    customer_id: number;

    @IsOptional()
    @IsString()
    @Matches('PREPAID|POSTPAID')
    plan?: 'PREPAID' | 'POSTPAID';

    @IsOptional()
    @IsNumber()
    balance?: number;

    @IsOptional()
    @IsNumber()
    limit?: number;

    @IsOptional()
    @IsNumber()
    debit?: number;
}
