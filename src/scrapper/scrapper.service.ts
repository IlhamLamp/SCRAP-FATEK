import { Injectable } from '@nestjs/common';
import { PaginationScrapperDTO } from './dto/scrapperDto';
import { BrowserService } from 'src/browser/browser.service';
import { DataDosenURL } from 'src/global/url';
import { extractRowsData, extractTableData, extractTotalEntries } from 'src/helper/scrapperHelper';

@Injectable()
export class ScrapperService {
    
    constructor(private readonly browserService: BrowserService) {}

    async getDataDosen(query: PaginationScrapperDTO): Promise<PaginationScrapperDTO> {
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
