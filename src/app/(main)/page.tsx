'use client';

import { useState } from 'react'; // 상태 관리를 위해 추가
import { useGetStoryIdsQuery } from '@/store/features/hackerNewsApi';
import StoryItem from './_components/StoryItem';

type StoryType = 'top' | 'new' | 'best';

export default function Home() {
    const [category, setCategory] = useState<StoryType>('top');

    const { data: ids, isLoading, error, isFetching } = useGetStoryIdsQuery(category);

    if (error) return <div>에러가 발생했습니다.</div>;

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1>AIPIA NEWS</h1>

                <nav>
                    <button onClick={() => setCategory('top')}>Top</button>
                    <button onClick={() => setCategory('new')}>New</button>
                    <button onClick={() => setCategory('best')}>Best</button>
                </nav>

                {isLoading || isFetching ? (
                    <div>데이터 로딩 중...</div>
                ) : (
                    <ul>
                        {ids?.slice(0, 20).map((id) => (
                            <StoryItem key={id} id={id} />
                        ))}
                    </ul>
                )}
            </main>
        </div>
    );
}
