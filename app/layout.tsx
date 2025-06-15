import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteData } from '@/data/siteData';
import AppClientWrapper from './AppClientWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteData.seo.title,
    template: `%s | ${siteData.personal.name}`
  },
  description: siteData.seo.description,
  keywords: siteData.seo.keywords,
  authors: [{ name: siteData.personal.name, url: siteData.personal.email }],
  creator: siteData.personal.name,
  publisher: siteData.personal.name,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: './',
    title: siteData.seo.title,
    description: siteData.seo.description,
    siteName: siteData.personal.name,
    images: [
      {
        url: siteData.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteData.seo.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteData.seo.title,
    description: siteData.seo.description,
    creator: siteData.seo.twitterHandle,
    images: [siteData.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Comprehensive Favicon Links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/favicon-192x192.png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/favicon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/favicon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/favicon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/favicon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/favicon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/favicon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/favicon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/favicon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon-180x180.png" />
        
        {/* Android Chrome Icons */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased relative`}>
        <AppClientWrapper>{children}</AppClientWrapper>
      </body>
    </html>
  );
} 