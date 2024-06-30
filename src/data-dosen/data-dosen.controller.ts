import { Controller, Get, Query } from '@nestjs/common';
import { DataDosenService } from './data-dosen.service';
import { PaginationDosenDTO } from './dto/dataDosen.dto';

@Controller('data-dosen')
export class DataDosenController {

    constructor(private readonly dosenService: DataDosenService) {}

    // root
    @Get()
    async getDataDosen(@Query() query: PaginationDosenDTO): Promise<any> {
        query.page = query.page || 1;
        query.per_page = query.per_page || 10;
        query.search = query.search || '';

        const data = await this.dosenService.getDataDosen(query);
        return data
    }
}
