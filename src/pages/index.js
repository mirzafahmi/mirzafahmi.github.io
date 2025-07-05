import React, { useEffect } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import TechStack from '../components/TechStack';
import PdfMetadataDate from '../components/PdfMetadataDate';
import DownloadSvg from '../components/svgs/DownloadSvg';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const btn = document.getElementById('resume-button');
    if (btn) {
      btn.addEventListener('click', () => {
        if (typeof gtag === 'function') {
          gtag('event', 'resume_click', {
            event_category: 'button',
            event_label: 'Resume Downloaded',
          });
        }
      });
    }
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
            id="resume-button"
            className="button button--secondary button--lg"
            href="/resume.pdf"
            download
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <DownloadSvg />
            Download Resume
          </a>
        </div>
        <PdfMetadataDate />
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
