import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'p_esx',
    name: 'ESX Crowdfunding Platform',
    company: '360Ground / ESX',
    role: 'System Architect & Lead Developer',
    year: 'Ongoing',
    stack: ['Microservices', 'Node.js', 'React', 'PostgreSQL', 'Finance'],
    metric: 'Secure Trading Arch.',
    description: 'A comprehensive crowdfunding platform for the Ethiopian Securities Exchange.',
    fullDescription: 'Designed the system architecture and implemented a comprehensive crowdfunding platform for ESX. The platform acts as a critical bridge facilitating secure interactions between investors, share providers, companies, and campaigns, ensuring compliance and data integrity.',
    features: ['Investor/Campaign Portals', 'Real-time Share Tracking', 'Secure Document Handling', 'Regulatory Compliance Tools', 'Dynamic Reporting'],
    url: 'https://cfipstaging.esx.et', 
    screenshots: [
        '/projects/esx/landing.png'
    ]
  },
  {
    id: 'p1',
    name: 'Permit Issuance System',
    company: '360Ground / Govt.',
    role: 'System Architect & Lead Developer',
    year: '2023',
    stack: ['Node.js', 'React', 'Microservices', 'Form Engine'],
    metric: 'Dynamic Form Engine',
    description: 'National Business Portal for the Ethiopian government.',
    fullDescription: 'A centralized portal for the Ministry of Innovation and Technology (MInT) allowing citizens to apply for government services like Construction Permits and Trade Licenses. Features a powerful dynamic form engine that allows admins to build complex, multi-step wizards without code.',
    features: ['Dynamic Form Builder (Wizard)', 'Service Status Tracking', 'Unified User Profile', 'Regional Service Provider Mapping', 'Automated Workflows'],
    url: 'https://new.business.gov.et',
    screenshots: [
        '/projects/nbp/landing.png',
        '/projects/nbp/dashboard.png',
        '/projects/nbp/form.png',
        '/projects/nbp/process.png'
    ]
  },
  {
    id: 'p2',
    name: 'JEGS Digitization',
    company: 'Civil Service of Ethiopia',
    role: 'System Architect & Lead Developer',
    year: '2023',
    stack: ['React', 'D3.js', 'Python', 'Interactive UI'],
    metric: 'Graphical Org Chart',
    description: 'Digitization of the national Job Evaluation and Grading System.',
    fullDescription: 'Digitized Ethiopia\'s Job Evaluation and Grading System, improving evaluation accuracy and speed by 50% with a custom graphical organizational chart builder. This tool allows HR professionals to visually restructure departments via drag-and-drop.',
    features: ['Drag-and-drop Org Chart', 'Real-time Grading Calculation', 'Exportable Reports', 'Version Control for Charts'],
    url: null,
    screenshots: [
        '/projects/jegs/editor.png',
        '/projects/jegs/list.png',
        '/projects/jegs/menu.png',
        '/projects/jegs/details.png'
    ]
  },
  {
    id: 'p_rec',
    name: 'Recruitment Automation',
    company: 'Mereb Tech',
    role: 'Tech Lead',
    year: '2025',
    stack: ['Node.js', 'AI Integration', 'React', 'CV Parsing'],
    metric: 'AI Interview Flow',
    description: 'Automated developer hiring platform with AI capabilities.',
    fullDescription: 'Worked on a recruitment automation system that streamlined developer hiring by sending automated coding challenges, conducting AI-powered interviews, and parsing CVs for skill/experience matching. Improved hiring efficiency by reducing manual screening.',
    features: ['Automated Coding Challenges', 'AI Interview', 'AI Resume Scoring', 'Candidate Pipeline Management'],
    url: 'https://talent.mereb.tech',
    screenshots: [
        '/projects/recruitment/jobs_list.png',
        '/projects/recruitment/candidate_pool.png',
        '/projects/recruitment/job_detail.png'
    ]
  },
  {
    id: 'p_meda',
    name: 'MedaPay Gateway',
    company: '360Ground',
    role: 'Full Stack Developer',
    year: '2024',
    stack: ['Nest', 'Next.js', 'MongoDB', 'Docker', 'Fintech'],
    metric: 'Payment Widget SDK',
    description: 'Seamlessly integratable payment gateway for Ethiopian merchants.',
    fullDescription: 'Contributed to the development of MedaPay, focusing on the frontend SDK widget that allows merchants to easily embed payment forms. Ensured the backend transaction processing was secure, idempotent, and compliant with local financial regulations.',
    features: ['Embeddable Payment Widget', 'Idempotent Transactions', 'Merchant Dashboard', 'Webhook System'],
    url: null,
    screenshots: []
  }
];