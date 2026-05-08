'use client';

import { ChevronLeftIcon } from '@heroicons/react/16/solid';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();
    const pathName = usePathname();
    const isMain = pathName === '/';

    return (
        <header
            className={`section-layout h-13 md:h-16 fixed top-0 left-0 right-0 z-10 flex items-center ${isMain ? 'bg-white text-black' : 'bg-black mix-blend-exclusion text-white'}`}
        >
            <div className={`w-full flex flex-row items-center ${isMain ? 'justify-center' : 'justify-between'}`}>
                {!isMain && (
                    <button
                        onClick={() => router.back()}
                        className="text-sm text-black cursor-pointer bg-white rounded-full"
                    >
                        <ChevronLeftIcon className="size-6" />
                        <span className="sr-only">뒤로 가기</span>
                    </button>
                )}
                <h1 className="h-fit text-sm">AIPIA News</h1>
                {!isMain && <div className="w-6 h-6"></div>}
            </div>
        </header>
    );
}
