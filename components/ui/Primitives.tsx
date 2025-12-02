'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`rounded-xl border border-border bg-card text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
);

export const Badge: React.FC<{ children: React.ReactNode; variant?: 'default' | 'outline' | 'secondary'; className?: string }> = ({ 
  children, 
  variant = 'default',
  className = ''
}) => {
  const styles = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "text-foreground border-border hover:bg-accent hover:text-accent-foreground",
  };

  return (
    <span className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-mono ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export const Separator: React.FC<{ className?: string; orientation?: 'horizontal' | 'vertical' }> = ({ 
  className = '', 
  orientation = 'horizontal' 
}) => (
  <div 
    className={`shrink-0 bg-border ${orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'} ${className}`} 
  />
);

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'ghost' | 'outline' }> = ({ 
  className = '', 
  variant = 'default', 
  children, 
  ...props 
}) => {
  const styles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",
  };

  return (
    <button 
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${styles[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

// --- Modal Primitives ---

export const Dialog: React.FC<{ open: boolean; onOpenChange: (open: boolean) => void; children: React.ReactNode }> = ({ open, onOpenChange, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Create portal root if it doesn't exist
    if (!document.getElementById('portal-root')) {
      const portalRoot = document.createElement('div');
      portalRoot.id = 'portal-root';
      document.body.appendChild(portalRoot);
    }
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [open]);

  if (!open || !mounted) return null;

  const portalRoot = document.getElementById('portal-root') || document.body;

  // Use high z-index (z-[9999]) to overlay everything
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity" onClick={() => onOpenChange(false)} />
      {children}
    </div>,
    portalRoot
  );
};

export const DialogContent: React.FC<{ children: React.ReactNode; className?: string; onClose: () => void }> = ({ children, className = '', onClose }) => (
  <div className={`relative z-[10000] grid w-full max-w-lg gap-4 border bg-background p-6 shadow-2xl duration-200 sm:rounded-lg md:w-full md:max-w-3xl max-h-[85vh] overflow-y-auto ${className}`}>
    <div className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none cursor-pointer bg-background/50 p-1" onClick={onClose}>
      <X className="h-5 w-5" />
      <span className="sr-only">Close</span>
    </div>
    {children}
  </div>
);

export const DialogHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col space-y-1.5 text-center sm:text-left">
    {children}
  </div>
);

export const DialogTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h2 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h2>
);

export const DialogDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-sm text-muted-foreground ${className}`}>
    {children}
  </p>
);
