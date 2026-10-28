import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

// Figures are regenerated from the platform rather than typed by hand, so they cannot
// drift. Public copy must not reference the build process behind them.
import stats from '@site/src/data/course-stats.json';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          SPO Academy
        </Heading>
        <p className="hero__subtitle">
          Turning stake pool operators into sustainable businesses — and documenting how it
          is built
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/">
            Read the documentation
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to={stats.courseUrl}>
            View the live course
          </Link>
        </div>
      </div>
    </header>
  );
}

function CourseStats() {
  const items = [
    {value: stats.modules, label: 'modules'},
    {value: stats.slts, label: 'learning targets'},
    {value: stats.lessons, label: 'lessons'},
    {value: stats.assignments, label: 'assignments'},
    {value: stats.images, label: 'figures'},
  ];
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className="row">
          {items.map((s) => (
            <div className="col" key={s.label}>
              <div className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.statsNote}>
          Live on Andamio. Every learning target carries a lesson, and every module an
          assignment.
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="SPO Academy Documentation"
      description="Project documentation for SPO Academy — a project-based learning course teaching Cardano stake pool operators to run their pools as sustainable businesses.">
      <HomepageHeader />
      <main>
        <CourseStats />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
