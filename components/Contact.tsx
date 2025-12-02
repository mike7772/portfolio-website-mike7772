'use client';

import React from 'react';
import { Button } from './ui/Primitives';
import { Copy, Mail, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Side: Context */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground">Get in Touch</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I'm currently available for freelance work and open to full-time engineering roles. 
              If you have a project that needs a scalable backend or a high-performance frontend, let's talk.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <div className="w-2 h-2 bg-current rounded-full" />
                </div>
                <span className="text-sm font-medium text-foreground">Accepting new projects</span>
              </div>
              
              <div className="flex items-center gap-3">
                 <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <div className="w-2 h-2 bg-current rounded-full" />
                </div>
                <span className="text-sm font-medium text-foreground">Remote (Ethiopia / Worldwide)</span>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-4">
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Direct Contact</div>
             <div className="flex gap-3">
                <Button variant="outline" className="gap-2 font-mono text-xs" onClick={() => {
                   navigator.clipboard.writeText('michaelasnake644@gmail.com');
                }}>
                   <Copy size={14} /> michaelasnake644@gmail.com
                </Button>
                <Button variant="ghost" className="gap-2 text-xs" onClick={() => window.open('mailto:michaelasnake644@gmail.com')}>
                   <Mail size={14} /> Open Mail Client
                </Button>
             </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
           <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <input 
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-muted-foreground/50" 
                      placeholder="Jane Doe" 
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <input 
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-muted-foreground/50" 
                      placeholder="jane@company.com" 
                    />
                 </div>
              </div>
              
              <div className="space-y-2">
                 <label className="text-sm font-medium text-foreground">Message</label>
                 <textarea 
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-muted-foreground/50 min-h-[140px] resize-none" 
                    placeholder="Tell me about your project needs, timeline, and tech stack..." 
                 />
              </div>

              <div className="pt-2 flex justify-end">
                 <Button className="w-full sm:w-auto gap-2 bg-foreground text-background hover:bg-foreground/90">
                    Send Message <ArrowRight size={14} />
                 </Button>
              </div>
           </form>
        </div>
      </div>
    </section>
  );
};