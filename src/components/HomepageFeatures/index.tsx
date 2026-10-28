import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type SectionItem = {
  title: string;
  to: string;
  description: ReactNode;
  links: {label: string; to: string}[];
};

// The three questions people actually arrive with: what is the course, how is it built,
// and what has been delivered against the funding.
const SectionList: SectionItem[] = [
  {
    title: 'Course Design',
    to: '/docs/course/',
    description: (
      <>
        Project-based learning built on the Edify Business Planning Framework. Eight
        modules take an operator from reading their changing environment through to an
        assembled business playbook, with an assignment per module that applies the
        learning to their own pool.
      </>
    ),
    links: [{label: 'Module reference', to: '/docs/course/modules/'}],
  },
  {
    title: 'Technical Implementation',
    to: '/docs/technical/',
    description: (
      <>
        A marketing site, this documentation, and the course itself on Andamio, where
        learner access is controlled and course completion is credentialed on-chain.
      </>
    ),
    links: [{label: 'Architecture', to: '/docs/technical/'}],
  },
  {
    title: 'Catalyst Milestones',
    to: '/docs/milestones/',
    description: (
      <>
        SPO Academy is funded through Project Catalyst Fund 12. Milestones 1 and 2 are
        signed off; Milestone 3 covers platform enhancement and course content
        finalisation. Each milestone page carries its deliverables and evidence.
      </>
    ),
    links: [
      {label: 'Milestone 1 EoMC', to: '/docs/milestones/milestone1-eomc/'},
      {label: 'Milestone 2 EoMC', to: '/docs/milestones/milestone2-eomc/'},
      {label: 'Milestone 3 EoMC', to: '/docs/milestones/milestone3-eomc/'},
    ],
  },
];

function Section({title, to, description, links}: SectionItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.card}>
        <Heading as="h3">
          <Link to={to}>{title}</Link>
        </Heading>
        <p>{description}</p>
        <ul className={styles.cardLinks}>
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {SectionList.map((props) => (
            <Section key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
