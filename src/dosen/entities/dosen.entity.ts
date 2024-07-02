import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dosen {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nama: string;

    @Column()
    nidn: string;

    @Column()
    prodi: string;
}
