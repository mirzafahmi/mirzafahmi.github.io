const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

async function extractMetadata() {
  const pdfPath = path.resolve(__dirname, '../static/resume.pdf');
  const dataBuffer = fs.readFileSync(pdfPath);

  const data = await pdf(dataBuffer);

  const metadata = {
    info: data.info,
    creationDate: data.info.CreationDate || 'Unknown',
  };

  fs.writeFileSync(
    path.resolve(__dirname, '../src/data/pdfMetadata.json'),
    JSON.stringify(metadata, null, 2)
  );

  console.log('✅ Extracted PDF metadata:', metadata);
}

extractMetadata().catch(console.error);
