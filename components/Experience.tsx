import React from 'react';
import { Briefcase, GraduationCap, Languages } from 'lucide-react';
import { Card, Badge } from './ui/Primitives';

interface Role {
  title: string;
  company: string;
  period: string;
  highlights: string[];
}

const roles: Role[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Smartlink Technologies',
    period: '2026 – Present',
    highlights: [
      'Contributed to the development of the Oromia Court Management System, streamlining judicial workflows with a centralized case management platform.',
      'Implemented a real-time internal chat system, enabling secure communication between judges, clerks, and court staff.',
      'Implemented a queue management system, optimizing hearing schedules, case processing, and courtroom workflows to reduce delays.',
      'Designed and implemented a secure device-based authentication system, where login attempts from new devices require approval from a previously trusted device.',
      'Implemented comprehensive audit logging and activity tracking, improving transparency, accountability, and compliance across the judicial system.',
    ],
  },
  {
    title: 'Tech Lead',
    company: 'Mereb Technologies',
    period: '2025 – 2026',
    highlights: [
      'Worked on a recruitment automation system that streamlined developer hiring by sending automated coding challenges, conducting AI-powered interviews, and parsing CVs for skill/experience matching.',
      'Improved hiring efficiency by providing recruiters with candidate performance insights and integrating seamlessly with existing ATS tools.',
    ],
  },
  {
    title: 'Mobile and Web Developer',
    company: 'Geobit',
    period: 'Sep 2024 – Feb 2025 (6 mo)',
    highlights: [
      'Contributed to geospatial mapping features, enabling organizations to create, manage, and visualize custom areas of interest with interactive map-based tools.',
      'Built location-based data management services, allowing users to associate events and assets with geographic locations in real time.',
      'Implemented a secure real-time chat system, enabling seamless communication and collaboration among members within organizations.',
      'Developed organization and team management modules, supporting role-based collaboration, workspace management, and secure information sharing.',
    ],
  },
  {
    title: 'Senior Full Stack Developer',
    company: '360Ground',
    period: '2021 – 2025',
    highlights: [
      'Developed a Permit Issuance System for Ethiopia, reducing processing time by 25% through microservices for notifications, an admin panel, and dynamic form creation.',
      "Digitized Ethiopia's Job Evaluation and Grading System, improving evaluation accuracy and speed by 50% with a graphical organizational chart builder.",
      'Designed the system architecture and implemented a crowdfunding platform for ESX; the project is currently ongoing.',
      'Contributed to the development of MedaPay, a seamlessly integratable payment gateway.',
      'Developed a Notification Microservice to streamline user communications via email and SMS.',
      'Built a Membership Management System for EMA, simplifying registration and member communication.',
      'Created a scalable backend for an Event Management System, ensuring secure event and customer data handling.',
      'Designed and implemented an Authentication Microservice for ATS, enabling seamless and secure user management.',
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 border-t border-border">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Experience</h2>
        <p className="text-muted-foreground text-sm mt-1">Career history across product, government, and enterprise engineering teams.</p>
      </div>

      <div className="space-y-6">
        {roles.map((role, idx) => (
          <Card key={idx} className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Briefcase size={16} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground leading-tight">{role.title}</h3>
                  <p className="text-sm text-muted-foreground">{role.company}</p>
                </div>
              </div>
              {role.period && (
                <Badge variant="outline" className="w-fit">{role.period}</Badge>
              )}
            </div>
            <ul className="space-y-2 pl-1">
              {role.highlights.map((h, i) => (
                <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-3 text-foreground">
            <GraduationCap size={16} className="text-muted-foreground" />
            <span className="font-semibold text-sm">Education</span>
          </div>
          <p className="text-sm text-foreground">Electrical and Computer Engineering</p>
          <p className="text-xs text-muted-foreground mt-1">University of Gondar · 2016 – 2021</p>
        </Card>
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-3 text-foreground">
            <Languages size={16} className="text-muted-foreground" />
            <span className="font-semibold text-sm">Languages</span>
          </div>
          <p className="text-sm text-foreground">English</p>
        </Card>
      </div>
    </section>
  );
};
