import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class AddCreditDto {
    @Transform(({ value }) => +value)
    @IsNumber()
    @IsNotEmpty()
    amount: number;
}
