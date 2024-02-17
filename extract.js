const fs = require('fs');

// Read the CSV file
fs.readFile('email_status.csv', 'utf8', (err, data) => {
    
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('Reading file...');
    // console.log(data);

  // Split the CSV data by newlines to get individual rows
  const rows = data.split('\n');
//   terate through the rows and log them
rows.forEach(row => {
    // const set1 = row.split('gsmtp');
    // if (set1.length > 1) {
    //     const set2 = set1[1].split(',Failed');
    //     if (set2.length > 0) {
    //         const extractedValue = set2[0];
    //         console.log(extractedValue);
    //     } else {
    //         console.log('Failed to extract value');
    //     }
    // } else {
    //     console.log('Failed to split on "gsmtp"');
    // }
    console.log(row);
});

//   console.log('Rows:', rows);

  // Extract the email text from the CSV, assuming it's in the first column
//   const emailTextColumnIndex = 0; // Adjust if email text is in a different column
//   const emailText = rows.map(row => row.split(',')[emailTextColumnIndex]).join('\n');

//   // Now you can use the same code to extract failed emails using regex
//   const regex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\s*,Failed/g;
//   const failedEmails = [];
//   let match;
//   while ((match = regex.exec(emailText)) !== null) {
//     failedEmails.push(match[1]);
//   }

//   console.log('Failed Emails:', failedEmails);
});
