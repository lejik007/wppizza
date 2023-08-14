import '@/styles/index.sass';
import 'modern-normalize/modern-normalize.css';

import { Alegreya } from 'next/font/google';
import React, { ReactNode } from 'react';

import ReactQueryProvider from '@/providers/react-query';
import StoreProvider from '@/providers/store';

import Index from 'features/home/home';

export const metadata = {
    title: 'Nextjs Starter',
    description: 'Default starter for projects',
};

const alegreya = Alegreya({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    style: 'normal',
    fallback: [
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
    ],
    variable: '--font-alegreya',
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru" className={`${alegreya.variable}`}>
            <body>
                <main>
                    {/*<Image src='/images/svg/logo.svg' alt='' width={100} height={100} />*/}
                    <ReactQueryProvider>
                        <StoreProvider>{/*{children}*/} <Index /></StoreProvider>
                    </ReactQueryProvider>
                </main>
            </body>
        </html>
    );
}
