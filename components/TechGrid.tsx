import React from 'react';
import { Cpu, HardDrive, Layout, Wrench } from 'lucide-react';
import { Card } from './ui/Primitives';
import { TechCategory } from '../types';

const techStack: TechCategory[] = [
  {
    category: 'Compute & Runtime',
    items: ['Node.js (Advanced)', 'Python', 'Go', 'Typescript']
  },
  {
    category: 'Frontend Ecosystem',
    items: ['React 18', 'Next.js 14', 'Tailwind CSS', 'Shadcn UI', 'Redux/Zustand']
  },
  {
    category: 'Data Persistence',
    items: ['PostgreSQL', 'Redis', 'MongoDB', 'ElasticSearch']
  },
  {
    category: 'DevOps & Infra',
    items: ['Docker', 'AWS (EC2, S3, Lambda)', 'GitHub Actions', 'Nginx']
  }
];

const icons = [Cpu, Layout, HardDrive, Wrench];

export const TechGrid: React.FC = () => {
  return (
    <section className="py-12 border-t border-border">
      <h2 className="text-xl font-bold tracking-tight mb-8 text-foreground">Infrastructure Stack</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {techStack.map((stack, idx) => {
          const Icon = icons[idx];
          return (
            <Card key={stack.category} className="p-5 hover:bg-accent/50 transition-colors">
              <div className="flex items-center gap-2 mb-4 text-foreground">
                <Icon size={16} className="text-muted-foreground" />
                <span className="font-semibold text-sm">{stack.category}</span>
              </div>
              
              <ul className="space-y-2">
                {stack.items.map(item => (
                  <li key={item} className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 bg-zinc-400 dark:bg-zinc-700 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
