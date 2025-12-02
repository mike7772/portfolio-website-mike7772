import React from 'react';
import { Hero } from '../components/Hero';
import { ServiceEndpoints } from '../components/ServiceEndpoints';
import { ProjectLog } from '../components/ProjectLog';
import { TechGrid } from '../components/TechGrid';
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <ServiceEndpoints />
      <ProjectLog />
      <TechGrid />
      <Contact />
    </>
  );
}