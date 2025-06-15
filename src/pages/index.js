import clsx from 'clsx';
import { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { AiOutlineDownload } from 'react-icons/ai';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import TechStack from '../components/TechStack';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [pdfMetaDate, setPdfMetaDate] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const loadPdfMetadata = async () => {
      try {
        const pdfjs = await eval('import("pdfjs-dist")');
        pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

        const response = await fetch('/resume.pdf');
        const blob = await response.blob();

        const reader = new FileReader();
        reader.onload = async function () {
          const typedArray = new Uint8Array(this.result);
          const pdf = await pdfjs.getDocument({ data: typedArray }).promise;
          const metadata = await pdf.getMetadata();

          const modDate = metadata.info?.ModDate || metadata.info?.CreationDate;
          if (modDate) {
            const cleaned = modDate.replace(/^D:/, '');
            const year = cleaned.slice(0, 4);
            const month = cleaned.slice(4, 6);
            const day = cleaned.slice(6, 8);
            setPdfMetaDate(`${year}-${month}-${day}`);
          }
        };
        reader.readAsArrayBuffer(blob);
      } catch (err) {
        console.error('Failed to load PDF metadata:', err);
      }
    };

    loadPdfMetadata();
  }, []);



  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            href="/resume.pdf"
            download
          >
            <AiOutlineDownload style={{ marginRight: '0.5rem' }} />
            Download Resume
          </a>
        </div>

        {pdfMetaDate && (
          <p
            className="margin-top--sm"
            style={{ color: '#eee', fontSize: '0.9rem' }}
          >
            📄 Last Update date: {pdfMetaDate}
          </p>
        )}
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <TechStack />
      </main>
    </Layout>
  );
}
