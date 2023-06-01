import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { db } from '../db/index.js';

export const downloadTasksRoute = {
    method: 'get',
    path: '/download',
    handler: async (req, res) => {
        const tasks = db.get()
        const fileName = 'data.json';
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const filePath = path.join(__dirname, fileName);
        fs.writeFileSync(filePath, JSON.stringify(tasks));
        const deleteFile = () => {
            fs.unlink(filePath, (err) => {
                if (err) throw err;
                console.log('successfully deleted file: ' + fileName);
            });
        }
        res.download(filePath, fileName, deleteFile);
    },
}