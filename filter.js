const fs = require('fs');
// const sent = [];

// const parse = require('csv-parse');

// Function to read CSV file and return parsed data
const readCSV = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
console.log(fileContent);
//   return parse(fileContent, { columns: true, trim: true });
};

// Read rows from CSV file and add them to an array
const csvFilePath = 'sent.csv'; // Replace with your CSV file path
const dataArray = readCSV(csvFilePath);

console.log('Array of CSV rows:', dataArray);

// fs.readFile('sent.csv', 'utf8', (err, data) => { 
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('Reading file...');
//     const rows = data.split('\n');

//     rows.forEach(row => {
//         //add the rows to a list
//         console.log(row);
// sent.

//     });
// });

// console.log('Sent:', sent);

// // Read the CSV file
// fs.readFile('email_status.csv', 'utf8', (err, data) => {
    
//   if (err) {
//     console.error('Error reading file emailstatus:', err);
//     return;
//   }
// //   console.log('Reading file...');
//     // console.log(data);

//   // Split the CSV data by newlines to get individual rows
//   const rows = data.split('\n');
// //   terate through the rows and log them
// rows.forEach(row => {
//     // const set1 = row.split('gsmtp');
//     // if (set1.length > 1) {
//     //     const set2 = set1[1].split(',Failed');
//     //     if (set2.length > 0) {
//     //         const extractedValue = set2[0];
//     //         console.log(extractedValue);
//     //     } else {
//     //         console.log('Failed to extract value');
//     //     }
//     // } else {
//     //     console.log('Failed to split on "gsmtp"');
//     // }
//     console.log(row);
// });

// //   console.log('Rows:', rows);

//   // Extract the email text from the CSV, assuming it's in the first column
// //   const emailTextColumnIndex = 0; // Adjust if email text is in a different column
// //   const emailText = rows.map(row => row.split(',')[emailTextColumnIndex]).join('\n');

// //   // Now you can use the same code to extract failed emails using regex
// //   const regex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\s*,Failed/g;
// //   const failedEmails = [];
// //   let match;
// //   while ((match = regex.exec(emailText)) !== null) {
// //     failedEmails.push(match[1]);
// //   }

// //   console.log('Failed Emails:', failedEmails);
// });
