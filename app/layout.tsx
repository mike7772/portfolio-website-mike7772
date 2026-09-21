import React from 'react';
import { Header } from '../components/Header';

export const metadata = {
  title: 'Michael Asnake | Full-Stack Engineer',
  description: 'A high-performance, data-dense engineering portfolio.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark bg-[size:32px_32px] bg-fixed opacity-50 dark:opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />

      <Header />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {children}
      </main>

      <footer className="w-full border-t border-border py-10 mt-10 relative z-10 bg-background/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-xs font-medium text-muted-foreground">
            © {new Date().getFullYear()} Michael Asnake. Crafted with React, Tailwind, and Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}