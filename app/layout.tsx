import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { FinanceBackground } from '@/components/finance-background';
import { MouseFollower } from '@/components/mouse-follower';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'Mubashir | Finance Professional, Internal Auditor & Strategic Consultant',
  description: 'Mubashir is a Certified Management Accountant (CMA) and Finance Professional from Kerala, India. Expert in Internal Auditing, Financial Analysis, SAP FICO, IFRS, and Strategic Business Consulting.',
  keywords: [
    'Mubashir',
    'Finance Professional',
    'Internal Auditor',
    'CMA',
    'Certified Management Accountant',
    'Finance Consultant Kerala',
    'Bookkeeping',
    'MIS Reports',
    'GST Filing',
    'Financial Analysis',
    'SAP FICO',
    'IFRS',
    'Business Strategy',
    'Kerala Finance Expert'
  ],
  authors: [{ name: 'Mubashir' }],
  creator: 'Mubashir',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Mubashir | Finance Professional & Internal Auditor',
    description: 'Certified Management Accountant (CMA) specializing in Internal Auditing, Financial Analysis, and Strategic Consulting.',
    siteName: 'Mubashir Finance Portfolio',
    images: [
      {
        url: '/icon.jpg',
        width: 800,
        height: 800,
        alt: 'Mubashir - Finance Professional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mubashir | Finance Professional & Internal Auditor',
    description: 'Certified Management Accountant (CMA) helping businesses grow with expert financial analysis and auditing.',
    images: ['/icon.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FinanceBackground />
          <MouseFollower />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
