"use client";
import { useEffect } from 'react';
import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: 'Shreyansh Kumar | Portfolio',
  description: 'Shreyansh Kumar portfolio',
}

const RootLayout = ({ children }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/f0e86dfbf8.js';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    const flowbiteScript = document.createElement('script');
    flowbiteScript.src = '../path/to/flowbite/dist/flowbite.min.js';
    document.head.appendChild(flowbiteScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(flowbiteScript);
    };
  }, []);

  return (
    <html lang='en'>
      <head>
        {/* Any other head elements */}
      </head>
      <body>
        <div className=''>
          <div className='' />
        </div>
        <main className=''>
          <Nav/>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
