import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateDosenDto {

    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    nama: string;

    @IsString()
    @IsNotEmpty()
    nidn: string;

    @IsString()
    @IsNotEmpty()
    prodi: string;
}
