import * as path from 'path';
import { promises as fs } from 'fs';
import * as pdf2table from 'pdf2table';

export async function ExtractPDF() {
    const pdfPath = path.join(__dirname, '../../data/dosen.pdf');
    try {
        const buffer = await fs.readFile(pdfPath)
        const rows: string[] = await new Promise((resolve, reject) => {
            pdf2table.parse(buffer, (err: any, rows: any, rowsdebug: any) => {
                if (err) {
                    return reject(new Error(`failed parsing pdf`));
                }
                resolve(rows);
            });
        });

        const data = rows.slice(2).map((row) => ({
            id: parseInt(row[0], 10),
            nama: row[1],
            nidn: row[2],
            prodi: row[3],
        }));

        await fs.writeFile("./data/dosen.json", JSON.stringify(data, null, 2))
        console.log('success writing file');
        return(data);
    } catch (err) {
        throw new Error(`error in extract pdf`)
    }
}

export async function LoadJSON() {
    const jsonPath = path.join(__dirname, '../../data/dosen.json');
    try {
        const data = await fs.readFile(jsonPath, 'utf8');
        return data;
    } catch (err) {
        throw new Error(`error on load json`)
    }
}