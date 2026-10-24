// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ransomware-defense.research.portal',
  integrations: [
    starlight({
      title: 'Ransomware Defense Optimization',
      description: 'An Evolutionary Framework for Ransomware Defense Optimization - Academic Documentation Portal',
      logo: {
        src: './src/assets/logo.svg',
        alt: 'Evolutionary Ransomware Defense Research Logo',
      },
      customCss: [
        './src/styles/custom.css',
      ],
      components: {
        Footer: './src/components/CustomFooter.astro',
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      sidebar: [
        {
          label: 'Group A — Project Overview',
          items: [
            { label: '1. Project Home', link: '/' },
            { label: '2. Introduction & Background', slug: 'overview/introduction' },
            { label: '3. Problem Statement & Objectives', slug: 'overview/problem-objectives' },
            { label: '4. Utility & Security Problems', slug: 'overview/utility-security' },
          ],
        },
        {
          label: 'Group B — Related Work & Research Gap',
          items: [
            { label: '5. Literature Review', slug: 'research/literature-review' },
            { label: '6. Research Gap & Contributions', slug: 'research/gap-contributions' },
          ],
        },
        {
          label: 'Group C — System & Methodology',
          items: [
            { label: '7. System Architecture', slug: 'methodology/architecture' },
            { label: '8. Cuckoo Sandbox & Malware Analysis', slug: 'methodology/cuckoo-sandbox' },
            { label: '9. Dataset Construction', slug: 'methodology/dataset' },
            { label: '10. Behavioral Signature Extraction', slug: 'methodology/signature-extraction' },
            { label: '11. MITRE ATT&CK TTP Mapping', slug: 'methodology/attack-mapping' },
            { label: '12. MITRE D3FEND Defense Mapping', slug: 'methodology/d3fend-mapping' },
            { label: '13. Signature Impact Quantification', slug: 'methodology/impact-quantification' },
            { label: '14. LLM-Based Residual Severity', slug: 'methodology/residual-severity' },
            { label: '15. Cooperative Co-Evolutionary Algorithm', slug: 'methodology/ccea' },
          ],
        },
        {
          label: 'Group D — Experiments & Results',
          items: [
            { label: '16. Experimental Setup', slug: 'experiments/setup' },
            { label: '17. LLM Evaluation', slug: 'experiments/llm-evaluation' },
            { label: '18. CCEA Evaluation', slug: 'experiments/ccea-evaluation' },
            { label: '19. BeagleBoyz/HOPLIGHT Case Study', slug: 'experiments/hoplight-case-study' },
            { label: '20. Implementation Status', slug: 'experiments/implementation-status' },
          ],
        },
        {
          label: 'Group E — Discussion & Resources',
          items: [
            { label: '21. Limitations & Future Work', slug: 'resources/limitations-future-work' },
            { label: '22. References & Technical Resources', slug: 'resources/references' },
            { label: '23. Team & Project Information', slug: 'resources/project-team' },
          ],
        },
      ],
    }),
  ],
});
