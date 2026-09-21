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
        '/projects/esx/landing.png',
        '/projects/esx/discover.png',
        '/projects/esx/raise-capital.png',
        '/projects/esx/how-it-works.png'
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
  },
  {
    id: 'p_notify',
    name: 'Notification Microservice',
    company: '360Ground',
    role: 'System Architect & Lead Developer',
    year: '2021–2025',
    stack: ['Node.js', 'Microservices', 'Email/SMS'],
    metric: 'Unified Comms Layer',
    description: 'Notification microservice streamlining user communications via email and SMS.',
    fullDescription: 'Designed and built a standalone notification microservice consumed by multiple internal platforms, unifying email and SMS delivery behind a single event-driven interface so product teams didn\'t need to integrate providers directly.',
    features: ['Email & SMS delivery', 'Event-driven triggers', 'Reusable across multiple platforms', 'Delivery status tracking'],
    url: null,
    screenshots: []
  },
  {
    id: 'p_ema',
    name: 'EMA Membership Management',
    company: '360Ground',
    role: 'System Architect & Lead Developer',
    year: '2021–2025',
    stack: ['Node.js', 'React', 'PostgreSQL'],
    metric: 'Streamlined Registration',
    description: 'Membership management system for EMA, simplifying registration and member communication.',
    fullDescription: 'Built a membership management platform for the Ethiopian Medical Association (EMA) that simplified member registration, renewals, and ongoing communication with the membership base.',
    features: ['Member Registration & Renewals', 'Member Communication Tools', 'Admin Dashboard'],
    url: 'https://emamember.org',
    screenshots: [
        '/projects/ema/landing.png',
        '/projects/ema/login.png'
    ]
  },
  {
    id: 'p_event',
    name: 'Event Management System',
    company: '360Ground',
    role: 'System Architect & Lead Developer',
    year: '2021–2025',
    stack: ['Node.js', 'PostgreSQL', 'Microservices'],
    metric: 'Secure Data Handling',
    description: 'Scalable backend for an event management system handling event and customer data.',
    fullDescription: 'Created a scalable backend for an event management system, ensuring secure handling of event data and customer information at scale.',
    features: ['Event Lifecycle Management', 'Secure Customer Data Handling', 'Scalable Backend Architecture'],
    url: null,
    screenshots: []
  },
  {
    id: 'p_ats_auth',
    name: 'ATS Authentication Microservice',
    company: '360Ground',
    role: 'System Architect & Lead Developer',
    year: '2021–2025',
    stack: ['Node.js', 'Microservices', 'Security'],
    metric: 'Secure User Management',
    description: 'Authentication microservice for ATS enabling seamless, secure user management.',
    fullDescription: 'Designed and implemented a dedicated authentication microservice for an Applicant Tracking System (ATS), enabling seamless and secure user management shared across the platform\'s services.',
    features: ['Centralized Authentication', 'Secure Session Management', 'Shared Across Microservices'],
    url: null,
    screenshots: []
  },
  {
    id: 'p_oromia',
    name: 'Oromia Court Management System',
    company: 'Smartlink Technologies',
    role: 'Senior Full Stack Developer',
    year: '2026',
    stack: ['React', 'Node.js', 'Real-time', 'Security'],
    metric: 'Device-Trust Auth',
    description: 'Centralized case management platform streamlining judicial workflows for the Oromia court system.',
    fullDescription: 'Contributed to the Oromia Court Management System, a centralized case management platform for the judiciary. Implemented a real-time internal chat system for secure communication between judges, clerks, and court staff, a queue management system to optimize hearing schedules and reduce delays, a device-based authentication system requiring a previously trusted device to approve logins from new devices, and comprehensive audit logging for transparency and compliance.',
    features: ['Centralized Case Management', 'Real-time Internal Chat', 'Hearing Queue Management', 'Trusted-Device Authentication', 'Audit Logging & Activity Tracking'],
    url: 'https://osc.gov.et',
    screenshots: [
        '/projects/oromia/home.png',
        '/projects/oromia/services.png',
        '/projects/oromia/about.png',
        '/projects/oromia/sign-in.png'
    ]
  },
  {
    id: 'p_geobit',
    name: 'Geospatial Organization Platform',
    company: 'Geobit',
    role: 'Mobile & Web Developer',
    year: '2024',
    stack: ['React', 'Mobile', 'GIS', 'Real-time'],
    metric: 'Interactive Map Tooling',
    description: 'Geospatial mapping platform for organizations to create, manage, and visualize areas of interest.',
    fullDescription: 'Contributed to a geospatial mapping platform enabling organizations to create, manage, and visualize custom areas of interest with interactive map-based tools. Built location-based data services associating events and assets with geographic locations in real time, a secure real-time chat system for team collaboration, and organization/team management modules supporting role-based collaboration and secure information sharing.',
    features: ['Interactive Map-Based Tools', 'Real-time Location-Based Data', 'Secure Real-time Chat', 'Role-Based Org & Team Management'],
    url: null,
    screenshots: []
  }
];