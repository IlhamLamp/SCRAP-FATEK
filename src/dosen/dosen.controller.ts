import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DosenService } from './dosen.service';
import { CreateDosenDto } from './dto/create-dosen.dto';
import { Dosen } from './entities/dosen.entity';

@Controller('dosen')
export class DosenController {
  constructor(private readonly dosenService: DosenService) {}

  @Post()
  create(@Body() createDosenDto: CreateDosenDto) {
    return this.dosenService.create(createDosenDto);
  }

  @Get()
  findAll(): Promise<Dosen[]> {
    return this.dosenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dosenService.findOne(+id);
  }
}
