import React from 'react';
import { Layers, Server, Cpu } from 'lucide-react';
import { Card } from './ui/Primitives';

const domains = [
  {
    title: 'Frontend Engineering',
    icon: Layers,
    description: 'Building complex, data-heavy applications with React and Next.js. I focus on performance, accessibility, and creating intuitive workflows for end-users.',
    tags: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Redux'],
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-500/10'
  },
  {
    title: 'Backend Architecture',
    icon: Server,
    description: 'Designing scalable microservices and event-driven systems. Expert in handling high-throughput data pipelines and ensuring system reliability.',
    tags: ['Node.js', 'Python', 'Django', 'PostgreSQL', 'Redis', 'NestJS', 'FastAPI', 'ElasticSearch'],
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10'
  },
  {
    title: 'DevOps & Infrastructure',
    icon: Cpu,
    description: 'Automating deployment pipelines and managing cloud infrastructure. I treat infrastructure as code to ensure reproducible and secure environments.',
    tags: ['Docker', 'AWS (EC2, S3)', 'GitHub Actions', 'Nginx', 'Linux', 'CI/CD Pipelines'],
    color: 'text-orange-600 dark:text-orange-400',
    bg: 'bg-orange-500/10'
  }
];

export const ServiceEndpoints: React.FC = () => {
  return (
    <section className="py-16">
      <div className="mb-10">
         <h2 className="text-2xl font-bold tracking-tight text-foreground">Domain Expertise</h2>
         <p className="text-muted-foreground text-sm mt-2 max-w-2xl">
            I don't just write API endpoints. I build complete, resilient products from the database schema to the client-side interaction.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {domains.map((domain, idx) => {
          const Icon = domain.icon;
          return (
            <Card key={idx} className="group p-6 hover:bg-accent/50 transition-all duration-300 flex flex-col h-full">
               <div className={`w-10 h-10 rounded-lg ${domain.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0`}>
                  <Icon size={20} className={domain.color} />
               </div>
               
               <h3 className="text-lg font-semibold text-foreground mb-3">{domain.title}</h3>
               
               <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {domain.description}
               </p>

               <div className="flex flex-wrap gap-2 mt-auto">
                  {domain.tags.map(tag => (
                     <span key={tag} className="text-[10px] font-medium px-2 py-1 rounded bg-secondary text-secondary-foreground border border-border/50">
                        {tag}
                     </span>
                  ))}
               </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};