import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class ChangeLimitDto {
    @Transform(({ value }) => +value)
    @IsNumber()
    @IsNotEmpty()
    limit: number;
}
