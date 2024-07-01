import { Controller, Get, Query } from '@nestjs/common';
import { PaginationScrapperDTO } from './dto/scrapperDto';
import { ScrapperService } from './scrapper.service';

@Controller('scrapper')
export class ScrapperController {

    constructor (private readonly scrapperService: ScrapperService) {}

     // root
     @Get()
     async getDataDosen(@Query() query: PaginationScrapperDTO): Promise<any> {
        query.page = query.page || 1;
        query.per_page = query.per_page || 10;
        query.search = query.search || '';
 
        const data = await this.scrapperService.getDataDosen(query);
        return data
     }
}
