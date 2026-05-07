import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import StoreProvider from '@/store/Provider';
import Header from '@/components/common/Header';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'AIPIA NEWS',
    description: '아이피아 뉴스에서 해커뉴스를 간편하게 확인하세요',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col">
                <div className="relative flex flex-col flex-1 items-center justify-center bg-white font-sans dark:bg-black">
                    <Header />
                    <StoreProvider>
                        <main className="flex flex-1 w-full flex-col items-center justify-between  bg-white dark:bg-black sm:items-start">
                            {children}
                        </main>
                    </StoreProvider>
                </div>
            </body>
        </html>
    );
}
