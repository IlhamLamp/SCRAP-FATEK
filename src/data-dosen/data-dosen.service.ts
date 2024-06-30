import { Injectable } from '@nestjs/common';
import { BrowserService } from 'src/browser/browser.service';
import { DataDosenURL } from 'src/global/url';
import { PaginationDosenDTO } from './dto/dataDosen.dto';
import { extractRowsData, extractTableData, extractTotalEntries } from 'src/helper/page';

@Injectable()
export class DataDosenService {
    
    constructor(private readonly browserService: BrowserService) {}

    async getDataDosen(query: PaginationDosenDTO): Promise<PaginationDosenDTO> {
        const browser = this.browserService.getBrowser();
        const page = await browser.newPage();
        try {
            // LAYOUT
            await page.goto(DataDosenURL, {timeout: 0});
            await page.waitForSelector('#tablepress-13_wrapper');

            // DATA
            query.per_page = await extractRowsData(page);
            query.data = await extractTableData(page);
            query.entries = await extractTotalEntries(page);
            query.total = query.data.length;

            return {
                ...query
            }
        } finally {
            await page.close()
        }
    }
}
