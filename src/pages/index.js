import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { AiOutlineDownload } from 'react-icons/ai';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import TechStack from '../components/TechStack';
import PdfMetadataDate from '../components/PdfMetadataDate';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

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
