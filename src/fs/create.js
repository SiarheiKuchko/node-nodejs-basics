import fs from 'fs';

const create = async () => {
    const text = 'I am fresh and young';
    const pathToFile = './files/fresh.txt';
    
    fs.writeFile(pathToFile, text, { flag: 'ax' }, (err) => {
        if (err) {
            console.error('FS operation failed');
            return;
        }
    }
)}

await create();