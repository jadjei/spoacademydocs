import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Sidebar layout rule, so this does not drift back:
 *
 *  - A section with ONE page is a plain doc entry, not a category. Wrapping a single page
 *    in a category produces an accordion whose only child repeats its own name.
 *  - A section with SEVERAL pages is a category whose header links to the section index
 *    (`link: {type: 'doc'}`), with only the genuine sub-pages listed as items. The index
 *    is reachable by clicking the category itself, so it never appears twice.
 */
const sidebars: SidebarsConfig = {
  // SPO Academy documentation sidebar
  tutorialSidebar: [
    'README',
    'overview/README',
    {
      type: 'category',
      label: 'Course Design',
      link: {type: 'doc', id: 'course/README'},
      items: [
        'course/modules',
      ],
    },
    {
      type: 'category',
      label: 'Cohort Sessions',
      link: {type: 'doc', id: 'cohort/README'},
      items: [
        'cohort/2026-09-21-onboarding',
        'cohort/2026-09-28-session1',
        'cohort/2026-10-12-session2',
        'cohort/2026-10-19-session3',
        'cohort/2026-10-26-session4',
        'cohort/feedback-report',
        'cohort/improvements-and-actions',
      ],
    },
    'technical/README',
    {
      type: 'category',
      label: 'Project Catalyst Milestones',
      link: {type: 'doc', id: 'milestones/README'},
      items: [
        'milestones/milestone1-eomc',
        'milestones/milestone2-eomc',
        'milestones/milestone3-eomc',
        {
          type: 'category',
          label: 'Milestone 4 EoMC',
          link: {type: 'doc', id: 'milestones/milestone4-eomc'},
          items: [
            'milestones/pricing-strategy',
            'milestones/pricing-market-research',
            'milestones/close-out-report',
          ],
        },
      ],
    },
    'resources/README',
  ],
};

export default sidebars;
