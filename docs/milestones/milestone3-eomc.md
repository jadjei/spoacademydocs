---
title: Milestone 3 EoMC
---

The live course for this milestone is the [SPO Online Business Academy](https://app.andamio.io/course/e60f29abf7a3f348bf4f51a078dae6f53cd3bc065d74632d3f67d785). This replaces the course id referenced in Milestone 2, which is no longer listed in the Andamio catalogue.

**A. Output:** Andamio Blockchain Functionalities — completed blockchain features integrated into the Andamio platform.

**Acceptance criteria:** Completion of the Pool registration system (100% tasks complete). Completion of the Course completion accreditation mechanism (100% tasks complete).

**Evidence**

*Pool registration, complete.* [Built into the onboarding site](https://spo.academy/#cta). The application form carries optional **Calidus key verification**, checked server side against the Cardano chain through the Koios `pool_calidus_keys` endpoint, so a claimed pool and Calidus ID are confirmed as a registered pairing before the application is accepted. Supporting explainer and pool lookup tool: [Calidus keys for stake pool operators](https://spo.academy/calidus).

*Course completion accreditation, complete.* Andamio issues credentials to the participating wallet once a stake pool has completed the course assignments. The [recorded demonstration](https://www.youtube.com/watch?v=0ls4uJnzxF8) shows that mechanism. All eight modules now carry an assignment, so there is something for a learner to complete.

- [GitHub repository](https://github.com/jadjei/spoacademyapp)
- [Technical documentation](https://catalyst.pages.fluid7.co.uk/spoacademydocs/docs/technical/): Andamio integration, course model, assignment and credential flow, Calidus verification
- [Milestone 2 technical case document](https://catalyst.pages.fluid7.co.uk/spoacademydocs/assets/files/Andamio-Customer-Support-Case-Fluid7-08_25_2025-636072dba17c71e90624f3acead84e12.pdf)

**B. Output:** Refined Front-end User Interface — updated UI components and improved user experience elements.

**Acceptance criteria:** Updated UI components implemented across all relevant sections of the platform. User experience improvements applied consistently throughout. The refined UI is responsive across desktop and mobile devices.

**Evidence**

*Updated UI, live.* [SPO Academy website](https://spo.academy/) and the [live course on Andamio](https://app.andamio.io/course/e60f29abf7a3f348bf4f51a078dae6f53cd3bc065d74632d3f67d785). The empty placeholder links reported at Milestone 2 were unpopulated lesson slots; all 37 learning targets now carry a lesson.

*Responsive across desktop and mobile.*

- SPO Academy: [desktop 1440](https://catalyst.pages.fluid7.co.uk/spoacademydocs/evidence/milestone3/spo-academy-desktop-1440.png), [tablet 820](https://catalyst.pages.fluid7.co.uk/spoacademydocs/evidence/milestone3/spo-academy-tablet-820.png), [mobile 390](https://catalyst.pages.fluid7.co.uk/spoacademydocs/evidence/milestone3/spo-academy-mobile-390.png)
- Calidus tool: [desktop](https://catalyst.pages.fluid7.co.uk/spoacademydocs/evidence/milestone3/calidus-desktop-1440.png), [mobile](https://catalyst.pages.fluid7.co.uk/spoacademydocs/evidence/milestone3/calidus-mobile-390.png)

*Course interface.*

- [Course outline](https://catalyst.pages.fluid7.co.uk/spoacademydocs/evidence/milestone3/course-outline-teacher-preview.jpg): 8 modules, 37 learning targets, eight credentials
- [Authoring view](https://catalyst.pages.fluid7.co.uk/spoacademydocs/evidence/milestone3/studio-course-modules.jpg): every module with its learning-target count

**C. Output:** Assessment and Evaluation Tools — a set of assessment tools to measure participant understanding and progress.

**Acceptance criteria:** Different types of assessment tool are reviewed and developed as appropriate to the course content. One assessment per module is expected.

**Evidence**

*One assignment per module, 8 of 8, all live on the course.*

- **000** Programme Introduction
- **100** Your Changing World
- **200** Edify Full Value Audit
- **300** Your Finance Model
- **400** Your Market Biome
- **500** Your 360 Internal Audit
- **600** Your External Biome
- **700** Your Business Playbook

Each asks the operator to apply that module's learning to their own pool and produce the section of their business plan it enables, accumulating into the Module 700 playbook. All 37 learning targets are evidenced by a module assignment. Briefs are written for the SPO persona defined in the Milestone 1 SPO Business Persona Document (available to Catalyst reviewers on request).

- [Module Reference](https://catalyst.pages.fluid7.co.uk/spoacademydocs/docs/course/modules/): structure and learning targets
- [Module 300's eleven learning targets](https://catalyst.pages.fluid7.co.uk/spoacademydocs/evidence/milestone3/course-outline-module-300-learning-targets.jpg) on the platform
- Module editors for [module 000](https://catalyst.pages.fluid7.co.uk/spoacademydocs/evidence/milestone3/studio-module-000-editor.jpg) and [module 300](https://catalyst.pages.fluid7.co.uk/spoacademydocs/evidence/milestone3/studio-module-300-editor.jpg), each showing learning targets, assignment, lessons and introduction complete

**D. Output:** Completed Video Content — finalised, edited video lessons for the course.

**Acceptance criteria:** All planned video lessons are produced, edited, and ready for deployment. Videos align with the scripts and storyboards developed in Milestone 2.

**Evidence**

Eight videos produced and edited, one for every module, as planned in Milestone 2.

- **000** SPO Academy Orientation
- **100** Our Changing World
- **200** Your Journey Toolkit
- **300** Defining Your Essence
- **400** Market Biome
- **500** Internal Biome
- **600** External Biome
- **700** Your Journey

The videos are unlisted course content. Links are available to reviewers on request.

*Deployed.* Every video sits at the top of its module's first lesson on the platform, so a learner meets it before the written material.

**E. Output:** Payment Processing System — integrated payment method for course access or additional features.

**Acceptance criteria:** Payment method is successfully integrated and processes transactions securely.

**Evidence**

*Integrated and processing transactions.* The enrolment and payment flow recorded end to end: tier choice, pool details, Stripe checkout at £250.00, confirmation, and the paid record arriving in the enrolment log. [Watch the recording](https://catalyst.pages.fluid7.co.uk/spoacademydocs/evidence/milestone3/payment-flow-enrolment-to-stripe.mp4), 84 seconds. The transaction shown is a sandbox one using Stripe's test card, exercising the identical code path as a live payment.

*Processed securely.* The provider is Stripe, using hosted Checkout. [The enrolment page](https://spo.academy/enrol) collects an email address, the pool ticker and the pool ID, then hands the operator to Stripe.

- Card data never touches the application: Stripe's hosted page collects it
- A payment is recorded in one place only, the `/api/stripe-webhook` endpoint, and nothing is parsed, logged or acted on until Stripe's signature verifies
- The request body size is capped before reading
- Repeat deliveries inside Stripe's retry window cannot double-record a payment
- Checkout sessions are created server side, so the amount and line item are set by us, not by the browser

Source: [GitHub repository](https://github.com/jadjei/spoacademyapp).

**F. Output:** Interactive Course Elements — a set of interactive components to enhance participant engagement.

**Acceptance criteria:** Interactive components are developed and integrated into the course. All interactive components function correctly across different devices and browsers.

**Evidence**

*[Playbook Builder](https://spo.academy/playbook), integrated into the course.* Carries the learner's assignment answers across all eight modules and composes the text they paste into Andamio as assignment evidence. Every one of the eight assignments on the platform opens with a link into its own section of the builder. Answers stay in the learner's browser, so no account is required. [Demo](https://catalyst.pages.fluid7.co.uk/spoacademydocs/evidence/milestone3/playbook-builder-demo.gif), [full page](https://catalyst.pages.fluid7.co.uk/spoacademydocs/evidence/milestone3/playbook-builder.jpg), [mobile](https://catalyst.pages.fluid7.co.uk/spoacademydocs/evidence/milestone3/playbook-builder-mobile-390.png).

*[Calidus pool lookup tool](https://spo.academy/calidus).* Takes an operator's pool ID, converts it to bech32 in the browser and builds the on-chain query returning the Calidus key registered to that pool. [Demo](https://catalyst.pages.fluid7.co.uk/spoacademydocs/evidence/milestone3/calidus-lookup-demo.gif).

*The application form's Calidus verification step*, described under Output A.

*Functioning across devices and browsers.* Exercised in Chromium (Chrome and Brave) and Gecko (Zen), and checked at tablet (820px) and mobile (390px) widths, captured under Output B.

**Course content status**, verified against the platform on 31 July 2026:

- **8 modules**, live on mainnet, their learning targets minted on chain
- **37 learning targets**, every one carrying a lesson
- **37 lessons**, plus 8 module introductions
- **27,926 words** of lesson narration
- **8 assignments**, one per module
- **135 diagrams and figures** on the CDN

The course is public and readable without an account. All lesson content derives from the course decks signed off in Milestone 2.
