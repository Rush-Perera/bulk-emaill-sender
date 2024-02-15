const fs = require('fs');
const parse = require('csv-parse');

// Function to read CSV file and return a Promise with parsed data
const readCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const rows = [];
    fs.createReadStream(filePath)
      .pipe(parse({ columns: true, trim: true }))
      .on('data', (row) => rows.push(row))
      .on('end', () => resolve(rows))
      .on('error', (error) => reject(error));
  });
};

// Read emails from emails.csv
readCSV('emails.csv')
  .then((emailData) => {
    // Read text list from textlist.csv
    return readCSV('textlist.csv')
      .then((textListData) => ({ emailData, textListData }));
  })
  .then(({ emailData, textListData }) => {
    // Extract text values from textListData
    const textsToFilter = textListData.map(item => item.text);

    // Filter emails containing specific texts
    const filteredEmails = emailData.filter(emailItem => {
      const email = emailItem.email.toLowerCase();
      return textsToFilter.some(text => email.includes(text.toLowerCase()));
    });

    // Print the filtered email list
    console.log('Filtered Emails:', filteredEmails.map(item => item.email));
  })
  .catch((error) => {
    console.error('Error:', error);
  });
