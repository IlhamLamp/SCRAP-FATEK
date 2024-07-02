import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDosenDto } from './dto/create-dosen.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dosen } from './entities/dosen.entity';
import { Repository } from 'typeorm';
import { ExtractPDF } from 'src/helper/pdfHelper';
import { DosenFilterDto } from './dto/find-dosen.dto';

@Injectable()
export class DosenService {

  constructor(@InjectRepository(Dosen) private readonly dosenRepository: Repository<Dosen>) {}

  async create(createDosenDto: CreateDosenDto[]): Promise<Dosen[]> {
    const extractedData = await ExtractPDF();
    const dosen = extractedData.map((data) => {
      const dosenDto = new CreateDosenDto();
      dosenDto.id = data.id;
      dosenDto.nama = data.nama;
      dosenDto.nidn = data.nidn;
      dosenDto.prodi = data.prodi;
      return dosenDto
    })
    const insertedDosen = await this.dosenRepository.insert(dosen);
    return insertedDosen.raw;
  }

  async findAll(filterDto: DosenFilterDto): Promise<Dosen[]> {
    const qb = this.dosenRepository.createQueryBuilder('dosen');

    if (filterDto.filter) {
      const prodiList = filterDto.filter.split(',');
      qb.where('dosen.prodi IN (:...prodiList)', { prodiList })
    }

    if (filterDto.search) {
      const searchTerm = `%${filterDto.search}%`;
      qb.andWhere(
        'dosen.nama LIKE :searchTerm OR dosen.nidn LIKE :searchTerm OR dosen.prodi LIKE :searchTerm',
        { searchTerm },
      );
    }

    const results = await qb.getMany();
    if (results.length === 0) {
      throw new NotFoundException('no dosen found');
    }
    return results;
  }

  async findOne(id: number): Promise<Dosen> {
    const result = await this.dosenRepository.findOneBy({ id });
    if (!result) {
      throw new NotFoundException(`no dosen found on id: ${id}`)
    }
    return result
  }
}
