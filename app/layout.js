'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useEffect, useState } from 'react';
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/themeprovider";
import Loader from '@/components/loader';
import { usePathname } from 'next/navigation';
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';

// ✅ Font initialization must be in module scope
const geist = Geist({ subsets: ['latin'], weight: '400' });
const geistMono = Geist_Mono({ subsets: ['latin'], weight: '400' });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${geist.className} ${geistMono.className}`}>
        <ThemeProvider>
          <Toaster toastOptions={{
            style: {
              fontFamily: 'Afacad, sans-serif',
              fontSize: '16px',
              fontWeight: 'bold'
            },
          }}/>
          <Navbar />
          {loading ? <Loader /> : children}

          <Script
            strategy="lazyOnload"
            data-name="BMC-Widget"
            data-cfasync="false"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
            data-id="Harshad57"
            data-description="Support me on Buy me a coffee!"
            data-message="Thanks for visiting !"
            data-color="#FF5F5F"
            data-position="Right"
            data-x_margin="18"
            data-y_margin="18"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}