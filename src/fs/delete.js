import fs from 'fs';

const remove = async () => {
    const pathToFile = './files/fileToRemove.txt';    
    fs.unlink(pathToFile, (err) => {
        if (err) {
            console.log('FS operation failed');
            return;
        } else {console.log('File deleted successfully')};
    }); 
};

await remove();