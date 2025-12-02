'use client';

import React, { useState } from 'react';
import { ChevronDown, Code, Layout, Server, Database, GitCommit, ArrowUpRight, Image as ImageIcon, ExternalLink, Globe } from 'lucide-react';
import { Badge, Button, Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/Primitives';
import { Project } from '../types';
import { projects } from '../data/projects';

export const ProjectLog: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(projects[0].id);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const openModal = (project: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-12 relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
         <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Selected Projects</h2>
            <p className="text-muted-foreground text-sm mt-1">A mix of complex backend logic and interactive frontend tools.</p>
         </div>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`group rounded-xl border transition-all duration-300 overflow-hidden ${
                expandedId === project.id 
                ? 'bg-card border-indigo-500/50 ring-1 ring-indigo-500/20 shadow-lg' 
                : 'bg-card/50 border-border hover:border-primary/20 hover:bg-accent/50'
            }`}
          >
            <div 
              className="flex flex-col md:flex-row md:items-center gap-6 p-5 cursor-pointer"
              onClick={() => toggleExpand(project.id)}
            >
              {/* Icon / Year */}
              <div className="hidden md:flex flex-col items-center gap-2 min-w-[60px]">
                 <div className={`p-2 rounded-lg transition-colors ${expandedId === project.id ? 'bg-indigo-500/10 text-indigo-500' : 'bg-secondary text-muted-foreground group-hover:text-foreground'}`}>
                    <Code size={20} />
                 </div>
                 <span className="text-[10px] font-mono text-muted-foreground">{project.year}</span>
              </div>

              {/* Main Info */}
              <div className="flex-1">
                 <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-semibold text-lg ${expandedId === project.id ? 'text-foreground' : 'text-foreground/80'}`}>
                        {project.name}
                    </h3>
                    <Badge variant="outline" className="md:hidden border-border text-muted-foreground">{project.year}</Badge>
                 </div>
                 
                 <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1.5">
                       <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600"></span>
                       {project.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                       <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600"></span>
                       {project.role}
                    </span>
                 </div>

                 {/* Tags */}
                 <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, expandedId === project.id ? undefined : 3).map(tech => (
                        <Badge key={tech} variant="secondary" className="bg-secondary text-secondary-foreground font-normal border-transparent">
                           {tech}
                        </Badge>
                    ))}
                    {expandedId !== project.id && project.stack.length > 3 && (
                        <span className="text-xs text-muted-foreground py-1">+ {project.stack.length - 3}</span>
                    )}
                 </div>
              </div>

              {/* Action/Metric */}
              <div className="flex items-center justify-between md:justify-end gap-4 md:min-w-[140px]">
                 <div className="text-right hidden md:block">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-1">Key Feature</div>
                    <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{project.metric}</div>
                 </div>
                 <div className={`transition-transform duration-300 ${expandedId === project.id ? 'rotate-180' : ''}`}>
                    <ChevronDown size={18} className="text-muted-foreground" />
                 </div>
              </div>
            </div>

            {/* Expanded Content */}
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${expandedId === project.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
               <div className="overflow-hidden">
                  <div className="px-5 pb-6 md:pl-[104px] pt-0">
                     <div className="p-5 rounded-lg bg-secondary/30 border border-border grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="flex flex-col justify-between">
                           <div>
                              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">Project Scope</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                 {project.description}
                              </p>
                           </div>
                           
                           <Button 
                              variant="default" 
                              className="w-fit text-xs font-mono gap-2" 
                              onClick={(e) => openModal(project, e)}
                           >
                              <ArrowUpRight size={14} /> VIEW CASE STUDY
                           </Button>
                        </div>
                        
                        <div className="space-y-4">
                            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-3">Technical Highlights</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                   <Layout size={14} className="text-indigo-500" />
                                   <span>Interactive UI / Dashboard</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                   <Server size={14} className="text-emerald-500" />
                                   <span>Microservices Arch.</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                   <Database size={14} className="text-blue-500" />
                                   <span>Optimized Data Layer</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                   <GitCommit size={14} className="text-purple-500" />
                                   <span>Automated CI/CD</span>
                                </div>
                            </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent onClose={() => setModalOpen(false)} className="sm:max-w-[900px]">
           <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                 <Badge variant="outline">{selectedProject?.year}</Badge>
                 <span className="text-xs font-mono text-muted-foreground">{selectedProject?.company}</span>
                 {selectedProject?.url && (
                    <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="ml-auto md:ml-0">
                       <Badge variant="secondary" className="hover:bg-emerald-500/10 hover:text-emerald-600 transition-colors cursor-pointer gap-1">
                          <Globe size={10} /> Live
                       </Badge>
                    </a>
                 )}
              </div>
              <DialogTitle className="text-2xl">{selectedProject?.name}</DialogTitle>
              <DialogDescription className="text-base">{selectedProject?.metric}</DialogDescription>
           </DialogHeader>

           <div className="mt-6 space-y-8">
              {/* Screenshots Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {selectedProject?.screenshots && selectedProject.screenshots.length > 0 ? (
                    selectedProject.screenshots.map((src, idx) => (
                       <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border border-border bg-muted group">
                          <img 
                            src={src} 
                            alt={`${selectedProject.name} screenshot ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                               // Fallback if image not found
                               (e.target as HTMLImageElement).style.display = 'none';
                               (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                          {/* Fallback Placeholder displayed if img fails */}
                          <div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-secondary/50 p-4 text-center">
                             <span className="text-xs text-muted-foreground font-mono mb-2">Image not found</span>
                             <span className="text-[10px] text-muted-foreground opacity-50">{src}</span>
                          </div>
                       </div>
                    ))
                 ) : (
                    <div className="col-span-full h-48 rounded-lg bg-secondary/30 border border-border border-dashed flex items-center justify-center">
                       <span className="text-muted-foreground text-sm">No screenshots available</span>
                    </div>
                 )}
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="md:col-span-2 space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Architectural Overview</h4>
                    <p className="text-sm text-foreground leading-relaxed">
                       {selectedProject?.fullDescription || selectedProject?.description}
                    </p>
                 </div>
                 
                 <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Key Features</h4>
                    <ul className="space-y-2">
                       {selectedProject?.features?.map((feature, i) => (
                          <li key={i} className="text-xs text-foreground/80 flex items-start gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1 shrink-0" />
                             {feature}
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-6 border-t border-border flex justify-between items-center">
                 <Button variant="outline" onClick={() => setModalOpen(false)}>Close Details</Button>
                 
                 {selectedProject?.url && (
                    <Button 
                       className="gap-2" 
                       onClick={() => window.open(selectedProject.url, '_blank')}
                    >
                       Visit Live Site <ExternalLink size={14} />
                    </Button>
                 )}
              </div>
           </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};