'use client';

import React, { useEffect, useState } from 'react';
import { Command, Moon, Sun } from 'lucide-react';

export const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial preference
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto max-w-5xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-1.5 rounded-md shadow-sm">
             <Command size={14} className="text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold tracking-tight">Michael Asnake</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-sm text-muted-foreground">Portfolio</span>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          
          <div className="hidden sm:flex items-center gap-2 text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full border border-border">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span>Available for work</span>
          </div>
        </div>
      </div>
    </header>
  );
};