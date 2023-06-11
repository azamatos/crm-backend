import { Request } from 'express';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import * as fs from 'fs';
import * as XLSX from 'xlsx';

const editFileName = (
  req: Request,
  file: Express.Multer.File,
  callback: (error: Error | null, filename: string) => void,
) => {
  const filename: string =
    path.parse(file?.originalname).name.replace(/\s/g, '') + '$' + uuidv4();
  const extension: string = path.extname(file?.originalname);
  callback(null, `${filename}${extension}`);
};

const getBasicFileName = (filename: string) => {
  return filename.split('$')[0];
};

const getUploadedImage = (imageUrl: string) => {
  const imageData = fs.readFileSync(
    path.join(`${process.cwd()}/uploads/images`, imageUrl),
  );
  const basicName = getBasicFileName(imageUrl);

  return {
    name: basicName,
    file: imageData.toString('base64'),
  };
};

const convertExcelToIncoming = (file: Express.Multer.File) => {
  const workbook = XLSX.read(file.buffer, { type: 'buffer' });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  return XLSX.utils.sheet_to_json<IncomingCreateDTO>(sheet, { header: 3 });
};

export {
  editFileName,
  getBasicFileName,
  getUploadedImage,
  convertExcelToIncoming,
};
