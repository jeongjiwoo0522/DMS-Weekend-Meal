import path from "path";
import { Cell, Workbook } from "exceljs";

const workbook = new Workbook();

export async function excelHook(grade: string, cls: string, status: { number: string, value?: number, reason?: string }[]) {
    const sheetName: string = grade + "-" + cls;

    await workbook.xlsx.readFile(path.join(__dirname, `./file/${sheetName}.xlsx`));

    const sheet = workbook.getWorksheet(sheetName);

    // console.log(sheet.getRow(8).getCell(4).value); // 이름 
    const length: number = status.length;
    for(let cellCounter=8, studentCounter=0; studentCounter<length; cellCounter++, studentCounter++) {
        const studentNumberCell: Cell = sheet.getRow(cellCounter).getCell(3);
        const studentApplyStatusCell: Cell = sheet.getRow(cellCounter).getCell(5);
        const studentReasonCell: Cell = sheet.getRow(cellCounter).getCell(6);
        if(studentNumberCell.value === parseInt(status[studentCounter].number)){
            studentReasonCell.value = status[studentCounter].reason;
            studentApplyStatusCell.value = status[studentCounter].value === 2 ? 1 : null;
        }
    }
    const fileName: string = `${sheetName}.xlsx`
    await workbook.xlsx.writeFile(path.join(__dirname, `./file/${sheetName}.xlsx`));
    return fileName;
}