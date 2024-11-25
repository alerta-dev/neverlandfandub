import { Video } from '@/lib/types';
import { VideoCard } from '@/components/VideoCard';

const videos: Video[] = [
  {
    id: '1',
    title: 'Título del Video 1',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    videoUrl: 'https://youtube.com/watch?v=123',
    description: 'Descripción del video 1...',
  },
  // Add more videos here
];

export function Videos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Nuestros Videos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}