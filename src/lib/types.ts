export interface SocialLinks {
  youtube?: string;
  discord?: string;
  tiktok?: string;
  facebook?: string;
}

export interface VoiceActor {
  id: string;
  name: string;
  image: string;
  gender: 'male' | 'female';
  socials: SocialLinks;
}

export interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
}