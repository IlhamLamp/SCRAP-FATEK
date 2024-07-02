import { IsOptional, IsString } from "class-validator";

export class DosenFilterDto {
    @IsOptional()
    @IsString()
    filter?: string;

    @IsOptional()
    @IsString()
    search?: string;
}