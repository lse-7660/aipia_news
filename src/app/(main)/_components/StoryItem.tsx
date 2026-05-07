'use client';
import { useGetItemByIdQuery, getThumbnailUrl } from '@/store/features/hackerNewsApi';
import Image from 'next/image';
import Link from 'next/link';

export default function StoryItem({ id }: { id: number }) {
    const { data: story, isLoading } = useGetItemByIdQuery(id);

    if (isLoading) return <div className="h-24 bg-gray-100 animate-pulse mb-2 rounded-lg" />;
    if (!story) return null;

    const publishedDate = new Date(story.time * 1000).toLocaleDateString();

    return (
        <Link href={`/detail-page/${id}`} className="flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="relative w-30 h-30 shrink-0">
                <Image
                    src={getThumbnailUrl(id)}
                    alt="thumbnail"
                    fill
                    className="rounded-md object-cover bg-gray-200"
                    sizes="64px"
                />
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <h3 className="font-medium text-gray-900 line-clamp-2">{story.title}</h3>
                <p className="text-sm text-gray-500">@{story.by}</p>
                <p className="text-sm text-gray-500">{publishedDate}</p>
            </div>
        </Link>
    );
}
