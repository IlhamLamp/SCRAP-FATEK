import { Injectable } from '@nestjs/common';
import { CreateDosenDto } from './dto/create-dosen.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dosen } from './entities/dosen.entity';
import { Repository } from 'typeorm';
import { ExtractPDF, LoadJSON } from 'src/helper/pdfHelper';

@Injectable()
export class DosenService {

  constructor(@InjectRepository(Dosen) private readonly dosenRepository: Repository<Dosen>) {}

  async create(createDosenDto: CreateDosenDto): Promise<Dosen> {
    await ExtractPDF();
    return this.dosenRepository.save(createDosenDto);
  }

  async findAll(): Promise<Dosen[]> {
    await LoadJSON();
    return this.dosenRepository.find();
  }

  findOne(id: number): Promise<Dosen> {
    return this.dosenRepository.findOneBy({ id });
  }
}
