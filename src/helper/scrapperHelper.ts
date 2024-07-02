import { Page } from "puppeteer";
export async function extractTotalEntries(page: Page): Promise<number> {
    await page.waitForSelector('#tablepress-13_info');
  
    const infoText = await page.evaluate(() => {
        const infoElement = document.getElementById('tablepress-13_info');
        return infoElement.textContent;
    });
  
    const infoTextSplit = infoText.split(' ');
    const totalEntries = parseInt(infoTextSplit[infoTextSplit.length - 2]);
  
    return totalEntries;
}

export async function extractTableData(page: Page): Promise<any[]> {   
    const rows = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('#tablepress-13 tbody tr'))
        .map(row => {
            const columns = row.querySelectorAll('td');
            return {
                no: columns[0].textContent.trim(),
                nama_dosen_pddikti: columns[1].textContent.trim(),
                nidn: columns[2].textContent.trim(),
                home_base_prodi: columns[3].textContent.trim(),
                google_scholar: columns[4].textContent.trim(),
                sinta: columns[5].textContent.trim(),
                scopus: columns[6].textContent.trim()
            };
        });
    });
    return rows;
}

export async function extractRowsData(page: Page): Promise<any> {
    await page.waitForSelector('#tablepress-13_length select');
    const options = await page.evaluate(() => {
        const selectElement = document.querySelector('select[name="tablepress-13_length"]');
        const optionElements = selectElement ? selectElement.querySelectorAll('option') : [];
        return Array.from(optionElements).map(option => option.value);
    })
    return options;
}