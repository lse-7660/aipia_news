'use client';
import { useGetItemByIdQuery, getThumbnailUrl } from '@/store/features/hackerNewsApi';
import Image from 'next/image';
import Link from 'next/link';

export default function StoryItem({ id }: { id: number }) {
    const { data: story, isLoading } = useGetItemByIdQuery(id);

    if (isLoading) return <div className="h-24 bg-gray-100 animate-pulse mb-2 rounded-lg" />;
    if (!story) return null;

    return (
        <Link href={`/detail-page/${id}`} className="flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="relative w-16 h-16 shrink-0">
                <Image
                    src={getThumbnailUrl(id)}
                    alt="thumbnail"
                    fill
                    className="rounded-md object-cover bg-gray-200"
                    sizes="64px"
                />
            </div>
            <div className="flex-1">
                <h3 className="font-medium text-gray-900 line-clamp-2">{story.title}</h3>
                <p className="text-sm text-gray-500">
                    @{story.by} · {story.score} points
                </p>
            </div>
        </Link>
    );
}
