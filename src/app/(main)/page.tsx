'use client';

import { useEffect, useRef } from 'react';
import { useGetStoryIdsQuery } from '@/store/features/hackerNewsApi';
import StoryItem from './_components/StoryItem';
import { useDispatch, useSelector } from 'react-redux';
import { setGlobalCategory, setGlobalLimit } from '@/store/features/navSlice';
import { RootState } from '@/store/store';

const navList = ['top', 'new', 'best'] as const;

export default function Home() {
    const dispatch = useDispatch();

    const { category, limit } = useSelector((state: RootState) => state.nav);

    const { data: ids, isLoading, error, isFetching } = useGetStoryIdsQuery(category);
    const observerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && ids && limit < ids.length) {
                    dispatch(setGlobalLimit(limit + 20));
                }
            },
            { threshold: 1.0 },
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => observer.disconnect();
    }, [ids, limit, dispatch]);

    if (error) return <div>에러가 발생했습니다.</div>;

    return (
        <div className="main-page section-layout pb-8 pt-18 md:pt-24 flex flex-col gap-4">
            <p className="text-2xl md:text-4xl font-bold">DISCOVER</p>
            <nav className="flex flex-row gap-2">
                {navList.map((item) => (
                    <button
                        key={item}
                        onClick={() => dispatch(setGlobalCategory(item))}
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
                    {ids?.slice(0, limit).map((id) => (
                        <StoryItem key={id} id={id} />
                    ))}

                    <div ref={observerRef} className="h-10 w-full flex items-center justify-center">
                        {limit < (ids?.length || 0) && isFetching && <span>로딩 중...</span>}
                    </div>
                </div>
            )}
        </div>
    );
}
