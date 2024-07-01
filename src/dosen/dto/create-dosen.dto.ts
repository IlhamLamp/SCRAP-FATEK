import { IsInt, IsNotEmpty,  IsString } from "class-validator";

export class CreateDosenDto {
    @IsString()
    @IsNotEmpty()
    nama: string;

    @IsInt()
    @IsNotEmpty()
    nidn: number;

    @IsString()
    @IsNotEmpty()
    prodi: string;
}
