'use client';

import { useState } from 'react';
import { useGetStoryIdsQuery } from '@/store/features/hackerNewsApi';
import StoryItem from './_components/StoryItem';

const navList = ['top', 'new', 'best'] as const;
type StoryType = (typeof navList)[number];

export default function Home() {
    const [category, setCategory] = useState<StoryType>('top');

    const { data: ids, isLoading, error, isFetching } = useGetStoryIdsQuery(category);

    if (error) return <div>에러가 발생했습니다.</div>;

    return (
        <div className="main-page section-layout pt-18 md:pt-24 flex flex-col gap-4">
            <p className="text-2xl md:text-4xl font-bold">DISCOVER</p>
            <nav className="flex flex-row gap-2">
                {navList.map((item) => (
                    <button
                        key={item}
                        onClick={() => setCategory(item)}
                        className={`text-sm w-18 py-1 rounded-full ${category === item ? 'font-medium text-white bg-black' : 'font-regular text-black bg-gray-200'}`}
                    >
                        {item.toUpperCase()}
                    </button>
                ))}
            </nav>

            {isLoading || isFetching ? (
                <div>데이터 로딩 중...</div>
            ) : (
                <div className="flex flex-col gap-4">
                    {ids?.slice(0, 20).map((id) => (
                        <StoryItem key={id} id={id} />
                    ))}
                </div>
            )}
        </div>
    );
}
