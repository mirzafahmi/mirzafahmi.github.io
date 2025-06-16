import metadata from '../data/pdfMetadata.json';

function formatPdfDate(pdfDate) {
  const match = pdfDate.match(/^D:(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/);
  if (!match) return 'Unknown';

  const [_, year, month, day, hour, minute, second] = match;
  const date = new Date(Date.UTC(year, month - 1, day, hour, minute, second));

  return date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function PdfMetadataDate() {
  const formattedDate = formatPdfDate(metadata.creationDate);
  return <p style={{ fontSize: '0.75rem', marginTop: '0.3rem' }}>Last Update At: {formattedDate}</p>;
}
