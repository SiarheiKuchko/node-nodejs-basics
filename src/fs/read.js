import fs from 'fs';

const read = async () => {    
    
    fs.readFile('./files/fileToRead.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('FS operation failed');
            return;
        }
        console.log(data);
    });

};

await read();