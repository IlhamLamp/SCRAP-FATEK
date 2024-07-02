import { Controller, Get, Post, Body, Param, Query, HttpStatus, NotFoundException, UseGuards } from '@nestjs/common';
import { DosenService } from './dosen.service';
import { CreateDosenDto } from './dto/create-dosen.dto';
import { DosenFilterDto } from './dto/find-dosen.dto';
import { DosenResponse } from 'src/class/class';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('dosen')
export class DosenController {
  constructor(private readonly dosenService: DosenService) {}

  @Post()
  create(@Body() createDosenDto: CreateDosenDto[]) {
    return this.dosenService.create(createDosenDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Query() filerDto?: DosenFilterDto): Promise<DosenResponse> {
    try {
      const result = await this.dosenService.findAll(filerDto);
      return { status: HttpStatus.OK, message: 'ok', data: result, total: result.length}
    } catch (err) {
      if (err instanceof NotFoundException) {
        return { status: HttpStatus.NOT_FOUND, message: err.message };
      }
      return { status: HttpStatus.INTERNAL_SERVER_ERROR, message: 'An unexpected error occurred.' };
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const result = await this.dosenService.findOne(+id);
      return { status: HttpStatus.OK, message: 'ok', data: result}
    } catch (err) {
      if (err instanceof NotFoundException) {
        return { status: HttpStatus.NOT_FOUND, message: err.message };
      }
      return { status: HttpStatus.INTERNAL_SERVER_ERROR, message: 'An unexpected error occurred.' };
    }
  }
}
