import { Injectable, OnModuleDestroy } from '@nestjs/common';
import puppeteer, { Browser } from 'puppeteer';

@Injectable()
export class BrowserService implements OnModuleDestroy {
    private browser: Browser;
    constructor() {
        this.initializeBrowser()
    }

    private async initializeBrowser() {
        const launchOptions = {
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--remote-debugging-port=9222']
        };
        this.browser = await puppeteer.launch(launchOptions);
    }

    getBrowser(): Browser {
        if (!this.browser) {
            throw new Error('Error initialized')
        }
        return this.browser;
    }
    
    async onModuleDestroy() {
        if (this.browser) {
            await this.browser.close();
            this.browser = null;
        }
    }
}
