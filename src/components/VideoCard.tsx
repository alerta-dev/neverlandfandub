import { Video } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all">
      <div className="relative aspect-video">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button
            variant="secondary"
            className="bg-white/90 hover:bg-white"
            onClick={() => window.open(video.videoUrl, '_blank')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Ver en YouTube
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
      </div>
    </Card>
  );
}