'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useGetItemByIdQuery, getThumbnailUrl } from '@/store/features/hackerNewsApi';
import { ChevronRightIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function StoryDetailPage() {
    const params = useParams();
    const id = Number(params.id);

    const { data: story, isLoading, isError } = useGetItemByIdQuery(id);

    if (isLoading) {
        return (
            <div className="section-layout">
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
        <div className="detail-page min-h-full w-full relative">
            <div className="detail-image-area relative w-full aspect-video max-h-[50vh] mb-8 overflow-hidden ">
                <Image src={getThumbnailUrl(id, 800, 500)} alt={story.title} fill priority className="object-cover" />
            </div>

            <article className="section-layout">
                <h1 className="text-2xl font-extrabold text-gray-900 mb-8 leading-tight">{story.title}</h1>

                <div className="article-info flex flex-col gap-2 mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">by {story.by}</span>
                        <span>•</span>
                        <span>{publishedDate}</span>
                    </div>
                    <div className="flex flex-row items-center gap-2 text-gray-500">
                        <HeartIcon className="size-5" />
                        {story.score}
                    </div>
                </div>
            </article>
            {story.url ? (
                <div className="btn-to-original section-layout fixed bottom-10 flex justify-center">
                    <a
                        href={story.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="max-w-180 w-full bg-gray-900 py-4 rounded-full text-2xl text-white flex items-center justify-center"
                    >
                        <div className="flex flex-row items-center gap-2">
                            <p>ORIGINAL STORY</p>
                            <ChevronRightIcon className="size-5" />
                        </div>
                    </a>
                </div>
            ) : (
                <p className="text-sm text-gray-500">원문 링크가 없는 스토리입니다.</p>
            )}
        </div>
    );
}
