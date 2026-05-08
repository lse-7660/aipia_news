import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import StoreProvider from '@/store/Provider';
import Header from '@/components/common/Header';

const notoSansKr = Noto_Sans_KR({
    subsets: ['latin'],
    variable: '--font-noto-sans-kr',
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
        <html lang="en" className={`${notoSansKr.variable} h-full antialiased`}>
            <body className="min-h-full">
                <div className="relative items-center justify-center bg-white font-sans dark:bg-black">
                    <Header />
                    <StoreProvider>
                        <main className="w-full flex-col items-center justify-between  bg-white dark:bg-black sm:items-start">
                            {children}
                        </main>
                    </StoreProvider>
                </div>
            </body>
        </html>
    );
}
