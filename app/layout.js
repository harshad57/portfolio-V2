'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from 'react';
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/themeprovider";
import Loader from '@/components/loader'
import { usePathname } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { Toaster } from 'react-hot-toast';


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

    // Optional: transition smoothing
  const [, startTransition] = useTransition();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      startTransition(() => {
        setLoading(false);
      });
    }, 500); // Fake loader duration — can be removed if you use Router events

    return () => clearTimeout(timer);
  }, [pathname]);
  
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Toaster toastOptions={{style: {fontFamily: 'Afacad, sans-serif',fontSize: '16px', fontWeight: 'bold'},}}/>

          <Navbar />
        {loading && <Loader />}
        {!loading && children}
        </ThemeProvider>
      </body>
    </html>
  );
}
