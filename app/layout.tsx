import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import config from '../config.js';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${config.name} - ${config.title}`,
  description: config.objective,
  keywords: config.skills.join(', '),
  authors: [{ name: config.name }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}