import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - AI-Powered Marketing Revolution',
  description: 'Transform your marketing with cutting-edge AI. Generate campaigns, optimize content, and scale growth with intelligent automation.',
  keywords: 'AI marketing, marketing automation, content generation, brand optimization, digital marketing',
  openGraph: {
    title: 'ADmyBRAND AI Suite - AI-Powered Marketing Revolution',
    description: 'Transform your marketing with cutting-edge AI. Generate campaigns, optimize content, and scale growth with intelligent automation.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-slate-950 text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}