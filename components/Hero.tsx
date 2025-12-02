'use client';

import React from 'react';
import { ArrowRight, Download, Mail, MousePointer2 } from 'lucide-react';
import { Button, Card, Badge } from './ui/Primitives';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start relative z-10">
        {/* Left Column: Introduction */}
        <div className="md:col-span-7 flex flex-col gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 text-xs font-medium w-fit">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
              </span>
              Full Stack Engineer based in Ethiopia
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-900 dark:from-indigo-300 dark:to-white">intelligent systems</span> & intuitive interfaces.
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I bridge the gap between heavy backend logic and pixel-perfect frontend experiences. 
              Specializing in <span className="text-foreground font-medium">distributed systems</span>, <span className="text-foreground font-medium">interactive UIs</span>, and <span className="text-foreground font-medium">automation tools</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button variant="default" className="gap-2" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects <ArrowRight size={14} />
            </Button>
            <Button variant="outline" className="gap-2" onClick={() => window.open('mailto:michaelasnake.dev@gmail.com')}>
              <Mail size={14} /> Get in touch
            </Button>
          </div>

          <div className="flex gap-6 pt-6 text-muted-foreground">
             <div className="flex flex-col gap-1">
                <span className="text-xs font-mono uppercase tracking-wider">Experience</span>
                <span className="text-sm font-semibold text-foreground">4+ Years</span>
             </div>
             <div className="w-px bg-border h-full" />
             <div className="flex flex-col gap-1">
                <span className="text-xs font-mono uppercase tracking-wider">Focus</span>
                <span className="text-sm font-semibold text-foreground">React • Node • Python</span>
             </div>
             <div className="w-px bg-border h-full" />
             <div className="flex flex-col gap-1">
                <span className="text-xs font-mono uppercase tracking-wider">Availability</span>
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Open</span>
             </div>
          </div>
        </div>

        {/* Right Column: "Developer Card" */}
        <div className="md:col-span-5 relative hidden md:block">
           <Card className="p-6 bg-card/60 backdrop-blur-xl shadow-2xl relative overflow-hidden group border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-sm font-medium text-foreground">Current Stack</h3>
                  <p className="text-xs text-muted-foreground">Preferred development environment</p>
                </div>
                <Badge variant="outline" className="text-muted-foreground">
                   v2.4.0
                </Badge>
              </div>

              <div className="space-y-4">
                 <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                       <span className="text-muted-foreground">Frontend (Next.js/React)</span>
                       <span className="text-indigo-500">Advanced</span>
                    </div>
                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                       <div className="h-full bg-indigo-500 w-[95%] rounded-full" />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                       <span className="text-muted-foreground">Backend (Node/Python)</span>
                       <span className="text-emerald-500">Expert</span>
                    </div>
                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                       <div className="h-full bg-emerald-500 w-[92%] rounded-full" />
                    </div>
                 </div>

                 <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                       <span className="text-muted-foreground">DevOps (Docker/AWS)</span>
                       <span className="text-purple-500">Proficient</span>
                    </div>
                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                       <div className="h-full bg-purple-500 w-[85%] rounded-full" />
                    </div>
                 </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border grid grid-cols-2 gap-4">
                 <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-secondary text-muted-foreground">
                       <MousePointer2 size={16} />
                    </div>
                    <div>
                       <div className="text-xs font-semibold text-foreground">Interaction</div>
                       <div className="text-[10px] text-muted-foreground">Framer Motion, D3.js</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-secondary text-muted-foreground">
                       <Download size={16} />
                    </div>
                    <div>
                       <div className="text-xs font-semibold text-foreground">Architecture</div>
                       <div className="text-[10px] text-muted-foreground">Microservices</div>
                    </div>
                 </div>
              </div>
           </Card>
        </div>
      </div>
    </section>
  );
};