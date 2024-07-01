import * as path from 'path';
import * as fs from 'fs';
import * as pdf2table from 'pdf2table';

export async function ExtractPDF() {
    const pdfPath = path.join(__dirname, '../../data/dosen.pdf');
    return fs.readFile(pdfPath, function (err, buffer) {
        if (err) throw new Error('failed reading file')
        pdf2table.parse(buffer, function (err: any, rows: any, rowsdebug: any) {
            if (err) throw new err
            fs.writeFile("./data/dosen.json", JSON.stringify(rows), err => {
                if (err) throw err
                console.log('success writing file')
            });
        });
    });
}

export async function LoadJSON() {
    const jsonPath = path.join(__dirname, '../../data/dosen.json');
    fs.readFile(jsonPath, function(err, data) {
        if (err) throw err
        const users = JSON.parse(data.toString()); 
        console.log(users);
    })
}