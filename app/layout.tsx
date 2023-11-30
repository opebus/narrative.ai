import type { Metadata } from 'next';
import { Providers } from './providers';
import { Inter } from 'next/font/google';
import clsx from 'clsx';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

import './globals.css';
import Nav from '@/app/components/Navbar';

export const metadata: Metadata = {
  title: 'Narrative.ai',
  description: 'Rolling out',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        inter.className
      )}
    >
      <body suppressHydrationWarning={true}>
        <Providers>
          <div className='bg-white h-screen'>
            <Nav />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
