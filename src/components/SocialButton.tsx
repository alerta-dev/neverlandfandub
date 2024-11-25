import { Youtube, Discord, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SocialButtonProps {
  platform: 'youtube' | 'discord' | 'tiktok' | 'facebook';
  url: string;
  className?: string;
}

const icons = {
  youtube: Youtube,
  discord: Discord,
  tiktok: MessageCircle,
  facebook: Facebook,
};

const colors = {
  youtube: 'hover:bg-red-200 hover:text-red-700',
  discord: 'hover:bg-indigo-200 hover:text-indigo-700',
  tiktok: 'hover:bg-pink-200 hover:text-pink-700',
  facebook: 'hover:bg-blue-200 hover:text-blue-700',
};

export function SocialButton({ platform, url, className }: SocialButtonProps) {
  const Icon = icons[platform];
  
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(colors[platform], className)}
      onClick={() => window.open(url, '_blank')}
    >
      <Icon className="h-5 w-5" />
    </Button>
  );
}