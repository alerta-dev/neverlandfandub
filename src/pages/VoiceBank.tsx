import { useState } from 'react';
import { VoiceActor } from '@/lib/types';
import { VoiceActorCard } from '@/components/VoiceActorCard';
import { Button } from '@/components/ui/button';

const voiceActors: VoiceActor[] = [
  {
    id: '1',
    name: 'Ana García',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    gender: 'female',
    socials: {
      youtube: 'https://youtube.com/@ana',
      discord: 'https://discord.gg/ana',
      tiktok: 'https://tiktok.com/@ana',
    },
  },
  // Add more voice actors here
];

type Filter = 'all' | 'male' | 'female';

export function VoiceBank() {
  const [filter, setFilter] = useState<Filter>('all');

  const filteredActors = voiceActors.filter((actor) => {
    if (filter === 'all') return true;
    return actor.gender === filter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Banco de Voces
        </h1>

        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className="bg-purple-500 hover:bg-purple-600"
          >
            Todos
          </Button>
          <Button
            variant={filter === 'male' ? 'default' : 'outline'}
            onClick={() => setFilter('male')}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Masculinas
          </Button>
          <Button
            variant={filter === 'female' ? 'default' : 'outline'}
            onClick={() => setFilter('female')}
            className="bg-pink-500 hover:bg-pink-600"
          >
            Femeninas
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredActors.map((actor) => (
            <VoiceActorCard key={actor.id} actor={actor} />
          ))}
        </div>
      </div>
    </div>
  );
}