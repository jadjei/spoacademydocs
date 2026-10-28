# Technical Implementation

## Architecture Overview

SPO Academy consists of two main applications working together:

### 1. **spoacademyapp** - Marketing Website
- **Technology**: Next.js 15.5 with App Router, React 19, Tailwind CSS 4
- **Purpose**: Public-facing landing page and lead generation
- **URL**: [https://spo.academy](https://spo.academy)
- **Key Features**:
  - Responsive design with dark/light mode
  - Form validation and Google Sheets integration
  - Course overview and benefits presentation
  - SPO application form with validation

### 2. **spoacademydocs** - Documentation Site
- **Technology**: Docusaurus 3.8.1
- **Purpose**: Internal project documentation and milestone tracking
- **URL**: [https://catalyst.pages.fluid7.co.uk/spoacademydocs](https://catalyst.pages.fluid7.co.uk/spoacademydocs)
- **Deployment**: GitLab Pages

### 3. **Andamio Platform Integration**
- **Course Platform**: [SPO Online Business Academy](https://app.andamio.io/course/e60f29abf7a3f348bf4f51a078dae6f53cd3bc065d74632d3f67d785)
- **Course ID**: `e60f29abf7a3f348bf4f51a078dae6f53cd3bc065d74632d3f67d785` (mainnet). Always use the full 56-character hash — a truncated id returns `502 BAD_GATEWAY`, which looks like an outage but is just a bad id.
- **Features**: Blockchain-verified credentials, learner access control
- **Smart Contracts**: Treasury smart contract for course management

## Andamio integration

How the course is structured on the platform, and how completion becomes a credential.

### Course model

A course holds **modules**; each module holds **Student Learning Targets (SLTs)** and
**one lesson per learning target**, plus a module **introduction** and **one assignment**.
That one-to-one binding between learning target and lesson is what lets progress be
measured against stated objectives rather than against time spent.

Learning targets remain editable while a module is in `DRAFT`. Once a module is published
on-chain its structure is fixed, so the set of learning targets is settled before minting.

### Assignment submission and review

1. A learner opens an **assignment commitment** against a module.
2. They submit **evidence** — a rich-text document — which the platform stores together
   with a hash of that evidence for on-chain verification. The hash covers the submitted
   text itself, so what a reviewer approves is exactly what is attested.
3. A teacher **reviews** the commitment and accepts or refuses it.
4. On successful completion, **credentials are claimable to the learner's wallet**.

This is why assignment evidence is submitted as text rather than as a link to material
held elsewhere: a link would leave the hash attesting to a URL whose contents could change
after review.

### Access control

Learner access is controlled by access token, so course material and assignment review are
tied to the identity that later receives the credential.

### Pool registration and Calidus verification

The onboarding form on [spo.academy](https://spo.academy/#cta) accepts an optional
**Calidus ID** alongside the applicant's pool. Verification runs **server-side** against
the Cardano chain through the Koios `pool_calidus_keys` endpoint, confirming that the pool
and the Calidus ID are a registered pairing.

The check is deliberately bounded: Calidus IDs are public on chain, so a match proves the
pairing is real — **not** that the applicant controls the key. Proving control requires a
signed challenge, which is out of scope. Verification runs on the server both because the
site's CSP sets `connect-src 'self'` and because it keeps the applicant's lookup off their
own network.

A public [explainer with a pool lookup tool](https://spo.academy/calidus) lets an operator
build the on-chain query for their own pool.

### Media constraints

The platform CDN accepts **PNG, JPG, GIF and WebP only**; SVG is rejected by both the
upload API and the CLI, so course figures are served as raster images.

## Development Stack

### Frontend Technologies
- **Next.js 15.5** with App Router architecture
- **React 19** with modern hooks and patterns  
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **next-themes** for dark mode support

### Backend Integration
- **Google Sheets API** for form data storage
- **Google Authentication** using service accounts
- **Environment Variables** for secure configuration

### Development Tools
- **ESLint** with Next.js configuration
- **PostCSS** with Tailwind CSS processing
- **GitLab CI/CD** for deployment automation


## Repository Structure

```
spoacademy/
├── spoacademyapp/          # Next.js marketing website
│   ├── src/
│   │   ├── app/            # Next.js App Router
│   │   ├── components/     # React components
│   │   ├── lib/            # Utilities and validation
│   │   └── styles/         # Global styles
│   └── public/             # Static assets
├── spoacademydocs/         # Docusaurus documentation
│   ├── docs/               # Documentation content
│   ├── src/                # Custom components
│   └── static/             # Static files
└── spoac-course/           # Course production tooling (Python)
```

## Form Integration

### Google Sheets Setup
1. **Service Account**: Created with Editor permissions
2. **API Configuration**: Google Sheets API enabled in GCP
3. **Environment Variables**:
   - `GOOGLE_SHEETS_SPREADSHEET_ID`
   - `GOOGLE_SHEETS_CLIENT_EMAIL`
   - `GOOGLE_SHEETS_PRIVATE_KEY`

### Form Validation
- **Client-side**: Real-time validation with TypeScript
- **Server-side**: API route validation using shared validation module
- **Fields**: Name, Email, Discord Handle, Pool Ticker, Pool ID
- **Validation Rules**: 
  - Pool Ticker: 3-5 uppercase letters/numbers
  - Pool ID: 56-character hex or Bech32 format (starting with "pool")
  - Discord Handle: 3-32 characters with optional discriminator

## Deployment

### Marketing Website (spoacademyapp)
- **Platform**: Production deployment details TBD
- **Build Command**: `npm run build`
- **Environment**: Requires Google Sheets API credentials

### Documentation Site (spoacademydocs)
- **Platform**: GitLab Pages
- **URL**: `catalyst.pages.fluid7.co.uk/spoacademydocs`
- **Branch**: `gl-pages`
- **Build Command**: `yarn build`

## Development Workflow

### Local Development
```bash
# Marketing website
cd spoacademyapp
npm install
npm run dev

# Documentation site  
cd spoacademydocs
yarn install
yarn start
```

### Production Build
```bash
# Marketing website
npm run build
npm start

# Documentation site
yarn build
yarn serve
```

## Security Considerations

- **API Keys**: Stored in environment variables, never committed
- **Form Validation**: Both client and server-side validation
- **CORS**: Proper configuration for API endpoints
- **Rate Limiting**: Consider implementing for form submissions
- **SSL/TLS**: HTTPS required for production deployment