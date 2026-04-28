'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useGetItemByIdQuery, getThumbnailUrl } from '@/store/features/hackerNewsApi';

export default function StoryDetailPage() {
    const params = useParams();
    const id = Number(params.id);

    const { data: story, isLoading, isError } = useGetItemByIdQuery(id);

    if (isLoading) {
        return (
            <div className="max-w-3xl mx-auto p-6 animate-pulse">
                <div className="w-full h-64 bg-gray-200 rounded-xl mb-6" />
                <div className="h-10 bg-gray-200 rounded w-3/4 mb-4" />
                <div className="h-4 bg-gray-200 rounded w-1/4" />
            </div>
        );
    }

    if (isError || !story) {
        return <div className="p-10 text-center">뉴스를 불러오는 중 오류가 발생했습니다.</div>;
    }

    const publishedDate = new Date(story.time * 1000).toLocaleDateString();

    return (
        <main className="max-w-3xl mx-auto p-6">
            <div className="relative w-full h-80 mb-8 overflow-hidden ">
                <Image
                    src={getThumbnailUrl(id, 800, 500)}
                    alt={story.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                />
            </div>

            <article>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{story.title}</h1>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-8 border-b pb-4">
                    <span className="flex items-center gap-1">
                        <b>By:</b> {story.by}
                    </span>
                    <span>•</span>
                    <span>{publishedDate}</span>
                    <span>•</span>
                    <span className="font-bold">Score: {story.score}</span>
                </div>

                {story.url ? (
                    <a href={story.url} target="_blank" rel="noopener noreferrer" className="font-bold">
                        Original Article
                    </a>
                ) : (
                    <p className="text-sm text-gray-400 italic">원문 링크가 없는 스토리입니다.</p>
                )}
            </article>

            <button
                onClick={() => window.history.back()}
                className="mt-12 text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2"
            >
                목록으로 돌아가기
            </button>
        </main>
    );
}
