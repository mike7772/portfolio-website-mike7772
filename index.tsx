import React from 'react';
import ReactDOM from 'react-dom/client';
import RootLayout from './app/layout';
import Home from './app/page';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {/* 
      Simulating Next.js App Router Structure:
      RootLayout wraps the page content.
    */}
    <RootLayout>
      <Home />
    </RootLayout>
  </React.StrictMode>
);