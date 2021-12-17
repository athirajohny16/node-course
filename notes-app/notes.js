const fs = require('fs')

fs.writeFileSync('notes.txt','This file was created by Nodejs!');

//how i did the challenge
try {
    fs.appendFileSync('notes.txt',' The data you append.');
    console.log('the new data is added to the file');
} catch (error) {
   console.log('error in adding new text to notes.txt');
}

//vs how the instructor did the challenge
 fs.appendFileSync('notes.txt',' You only have to do this like this, use try-catch only if required.');


 /*
 writeFileSync - creates a file 'notes.txt' and adds the data to the file.
appendFileSync - adds new data to the existing 'notes.txt' without removing the existing data on the file.
*/

