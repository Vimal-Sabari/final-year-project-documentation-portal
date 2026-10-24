# Ransomware Defense Optimization — Academic Documentation Portal

> **Project Title:** An Evolutionary Framework for Ransomware Defense Optimization  
> **Status:** Initial Scaffold & Academic Portal Design System Established  
> **Framework:** Astro 7 + Starlight (TypeScript, Markdown/MDX)

---

## 1. Project Overview

This website serves as the formal academic and engineering documentation portal for the research project **"An Evolutionary Framework for Ransomware Defense Optimization"**.

The portal is designed for academic presentation, peer review, and thesis evaluation. It provides:
- A restrained, high-contrast academic visual design system (burgundy/maroon primary palette, dark charcoal text, subtle borders, and technical teal accents) supporting both light and dark modes.
- Full hierarchical sidebar navigation with 5 primary research groups (23 structured pages) plus unlisted supporting resources.
- Client-side full-text documentation search powered by Starlight and Pagefind.
- A reusable component library (`PageIntro`, `SectionCard`, `WorkflowDiagram`, `FigurePlaceholder`, `MetricCard`, `StatusBadge`, `ReferenceItem`, `DataTable`).
- Staged placeholders for empirical findings, formal equations, architecture diagrams, benchmark figures, and IEEE-formatted citations.

---

## 2. Directory Structure

```text
Documentation Portal/
├── astro.config.mjs             # Starlight integration, branding & sidebar navigation
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # Strict TypeScript configuration
├── README.md                    # Setup, execution & content authoring guide
├── public/
│   ├── favicon.svg              # Shield & evolutionary network favicon
│   └── images/                  # Static image directory
├── src/
│   ├── assets/
│   │   └── logo.svg             # Academic shield & graph vector logo
│   ├── components/
│   │   ├── PageIntro.astro      # Subtitle banner and placeholder notice
│   │   ├── SectionCard.astro    # Navigation card component
│   │   ├── WorkflowDiagram.astro# Architecture & process diagram container
│   │   ├── FigurePlaceholder.astro # Figure & vector asset placeholder
│   │   ├── MetricCard.astro     # Experimental metric display card
│   │   ├── StatusBadge.astro    # Implemented / Tested / In progress / Planned badge
│   │   ├── ReferenceItem.astro  # IEEE-style structured reference item
│   │   ├── DataTable.astro      # Responsive academic data table
│   │   └── CustomFooter.astro   # Academic project footer override
│   ├── styles/
│   │   └── custom.css           # Academic CSS design tokens & component styling
│   ├── content.config.ts        # Starlight docs content collection loader
│   └── content/
│       └── docs/
│           ├── index.mdx        # Project Home (Route: /)
│           ├── overview/        # Group A — Project Overview
│           ├── research/        # Group B — Related Work & Research Gap
│           ├── methodology/     # Group C — System & Methodology
│           ├── experiments/     # Group D — Experiments & Results
│           └── resources/       # Group E & F — Discussion, Resources & Optional
└── dist/                        # Production build artifacts & Pagefind search index
```

---

## 3. Quick Start & Execution Instructions

### Prerequisites
- **Node.js**: v18+ (tested with Node.js v24.11.1)
- **npm**: v9+ (tested with npm v11.6.2)

### Installation
Dependencies are already configured. If reinstalling from scratch:
```bash
npm install
```

### Start Local Development Server
To launch the live-reloading development server:
```bash
npm run dev
```
By default, the server runs at:
```text
http://localhost:4321/
```

### Build for Production
To perform a complete static build and compile the Pagefind search index:
```bash
npm run build
```

### Preview Static Production Build
To test the built production files locally:
```bash
npm run preview
```

### Type Checking
To run TypeScript type checks:
```bash
npx tsc --noEmit
```

---

## 4. Documentation Pages & Route Inventory

All 23 primary pages and 5 supporting resource pages are created with active routing:

| Group | Page Title | Route | File Path |
| :--- | :--- | :--- | :--- |
| **Group A: Overview** | 1. Project Home | `/` | `src/content/docs/index.mdx` |
| | 2. Introduction & Background | `/overview/introduction/` | `src/content/docs/overview/introduction.mdx` |
| | 3. Problem Statement & Objectives | `/overview/problem-objectives/` | `src/content/docs/overview/problem-objectives.mdx` |
| | 4. Utility & Security Problems Addressed | `/overview/utility-security/` | `src/content/docs/overview/utility-security.mdx` |
| **Group B: Related Work** | 5. Literature Review | `/research/literature-review/` | `src/content/docs/research/literature-review.mdx` |
| | 6. Research Gap & Contributions | `/research/gap-contributions/` | `src/content/docs/research/gap-contributions.mdx` |
| **Group C: Methodology** | 7. System Architecture | `/methodology/architecture/` | `src/content/docs/methodology/architecture.mdx` |
| | 8. Cuckoo Sandbox & Malware Analysis | `/methodology/cuckoo-sandbox/` | `src/content/docs/methodology/cuckoo-sandbox.mdx` |
| | 9. Dataset Construction | `/methodology/dataset/` | `src/content/docs/methodology/dataset.mdx` |
| | 10. Behavioral Signature Extraction | `/methodology/signature-extraction/` | `src/content/docs/methodology/signature-extraction.mdx` |
| | 11. MITRE ATT&CK TTP Mapping | `/methodology/attack-mapping/` | `src/content/docs/methodology/attack-mapping.mdx` |
| | 12. MITRE D3FEND Defense Mapping | `/methodology/d3fend-mapping/` | `src/content/docs/methodology/d3fend-mapping.mdx` |
| | 13. Signature Impact Quantification | `/methodology/impact-quantification/` | `src/content/docs/methodology/impact-quantification.mdx` |
| | 14. LLM-Based Residual Severity | `/methodology/residual-severity/` | `src/content/docs/methodology/residual-severity.mdx` |
| | 15. Cooperative Co-Evolutionary Algorithm | `/methodology/ccea/` | `src/content/docs/methodology/ccea.mdx` |
| **Group D: Experiments** | 16. Experimental Setup | `/experiments/setup/` | `src/content/docs/experiments/setup.mdx` |
| | 17. LLM Evaluation | `/experiments/llm-evaluation/` | `src/content/docs/experiments/llm-evaluation.mdx` |
| | 18. CCEA Evaluation | `/experiments/ccea-evaluation/` | `src/content/docs/experiments/ccea-evaluation.mdx` |
| | 19. BeagleBoyz/APT38–HOPLIGHT Case Study | `/experiments/hoplight-case-study/` | `src/content/docs/experiments/hoplight-case-study.mdx` |
| | 20. Implementation Status | `/experiments/implementation-status/` | `src/content/docs/experiments/implementation-status.mdx` |
| **Group E: Resources** | 21. Limitations & Future Work | `/resources/limitations-future-work/` | `src/content/docs/resources/limitations-future-work.mdx` |
| | 22. References & Technical Resources | `/resources/references/` | `src/content/docs/resources/references.mdx` |
| | 23. Team & Project Information | `/resources/project-team/` | `src/content/docs/resources/project-team.mdx` |
| **Group F: Optional** | Glossary | `/resources/glossary/` | `src/content/docs/resources/glossary.mdx` |
| | Frequently Asked Questions | `/resources/faq/` | `src/content/docs/resources/faq.mdx` |
| | User-Study Methodology | `/resources/user-study-methodology/` | `src/content/docs/resources/user-study-methodology.mdx` |
| | User-Study Findings | `/resources/user-study-findings/` | `src/content/docs/resources/user-study-findings.mdx` |
| | Downloads & Project Documents | `/resources/downloads/` | `src/content/docs/resources/downloads.mdx` |

---

## 5. How to Add and Edit Research Content

Every page is written in standard **Markdown/MDX** under `src/content/docs/`. You can edit content directly without modifying layout or navigation plumbing.

### Step 1: Open the Target Page
Locate the relevant `.mdx` file in `src/content/docs/` (e.g. `src/content/docs/overview/introduction.mdx`).

### Step 2: Replace Placeholder Banners
Locate the placeholder blocks:
```html
<div class="academic-placeholder-banner">
  <div><strong>Section Placeholder:</strong> ...</div>
</div>
```
Replace the placeholder text with your approved research paragraphs, theorems, or data.

### Step 3: Insert Figures or Diagrams
To insert a figure, use the pre-built `FigurePlaceholder` component or embed a standard markdown image:
```astro
import FigurePlaceholder from '../../../components/FigurePlaceholder.astro';

<FigurePlaceholder 
  figureId="1.2" 
  title="Ransomware Process Injection Sequence" 
  caption="Dynamic sequence diagram showing NtUnmapViewOfSection and thread injection."
/>
```
Or place your image in `public/figures/my-figure.png` and reference it:
```markdown
![Caption text](/figures/my-figure.png)
```

### Step 4: Populate Metric Cards or Tables
To display benchmark results in `llm-evaluation.mdx` or `ccea-evaluation.mdx`:
```astro
<MetricCard 
  label="Macro F1-Score" 
  value="94.2%" 
  description="Multi-class mitigation classification accuracy."
/>
```

### Step 5: Add Bibliographic References
In `src/content/docs/resources/references.mdx`:
```astro
<ReferenceItem 
  number={9}
  authors="Smith, J. and Doe, A."
  title="Adaptive Defense Optimization Against Extortion Malware"
  venue="IEEE S&P"
  year="2025"
  doi="10.1109/SP.2025.001"
/>
```

---

## 6. Build and Validation Status

- **Build Check (`npm run build`)**: **Passed** (29/29 static pages generated, 0 errors).
- **Search Indexing**: **Passed** (Pagefind indexed all 29 HTML documents).
- **TypeScript Check (`tsc --noEmit`)**: **Passed** (0 errors).
- **Asset Processing**: **Passed** (Vector SVG logos and favicons compiled cleanly).
