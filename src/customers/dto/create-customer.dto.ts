import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @IsPhoneNumber('BR')
    phone_number: string;

    @IsString()
    @IsNotEmpty()
    cpf: string;
    
    @IsString()
    @IsNotEmpty()
    cnpj: string;

    @IsString()
    @IsNotEmpty()
    company_name: string;
}
