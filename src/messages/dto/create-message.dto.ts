import { Transform } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateMessageDto {
    @Transform(({ value }) => +value)
    @IsNumber()
    @IsNotEmpty()
    from_customer_id: number;

    @IsString()
    @IsNotEmpty()
    @IsPhoneNumber('BR')
    to_phone_number: string;

    @Transform(({ value }) => Boolean(value))
    @IsBoolean()
    @IsOptional()
    is_whatsapp?: boolean;

    @IsString()
    @IsNotEmpty()
    text: string;
}
