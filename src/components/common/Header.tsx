'use client';

import { ChevronLeftIcon } from '@heroicons/react/16/solid';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();
    const pathName = usePathname();
    const isMain = pathName === '/';

    return (
        <header
            className={`section-layout h-13 md:h-16 fixed top-0 left-0 right-0 z-10 flex items-cente ${isMain ? 'bg-white' : ''}`}
        >
            <div className={`w-full flex flex-row items-center ${isMain ? 'justify-center' : 'justify-between'}`}>
                {!isMain && (
                    <button onClick={() => router.back()} className="text-sm">
                        <ChevronLeftIcon className="size-6 mix-blend-exclusion" />
                        <span className="sr-only">뒤로 가기</span>
                    </button>
                )}

                <h1 className="h-fit text-sm">AIPIA News</h1>
                {!isMain && <div></div>}
            </div>
        </header>
    );
}
