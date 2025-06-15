import clsx from 'clsx';
import { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { AiOutlineDownload } from 'react-icons/ai';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import TechStack from '../components/TechStack';

import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';

GlobalWorkerOptions.workerSrc = pdfWorker;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [pdfMetaDate, setPdfMetaDate] = useState(null);

  useEffect(() => {
    fetch('/resume.pdf')
      .then(res => res.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onload = async function () {
          const typedArray = new Uint8Array(this.result);
          const pdf = await getDocument({ data: typedArray }).promise;
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
      })
      .catch(err => console.error('Failed to load PDF metadata:', err));
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
