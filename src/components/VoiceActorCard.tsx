import { VoiceActor } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { SocialButton } from './SocialButton';

interface VoiceActorCardProps {
  actor: VoiceActor;
}

export function VoiceActorCard({ actor }: VoiceActorCardProps) {
  return (
    <Card className="p-6 flex flex-col items-center gap-4 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all">
      <div className="relative w-32 h-32">
        <img
          src={actor.image}
          alt={actor.name}
          className="rounded-full w-full h-full object-cover border-4 border-pink-200"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{actor.name}</h3>
      <div className="flex gap-2">
        {actor.socials.youtube && (
          <SocialButton platform="youtube" url={actor.socials.youtube} />
        )}
        {actor.socials.discord && (
          <SocialButton platform="discord" url={actor.socials.discord} />
        )}
        {actor.socials.tiktok && (
          <SocialButton platform="tiktok" url={actor.socials.tiktok} />
        )}
      </div>
    </Card>
  );
}