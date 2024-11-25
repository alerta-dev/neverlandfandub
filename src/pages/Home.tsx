import { SocialButton } from '@/components/SocialButton';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl mb-8">
            Bienvenidos a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Neverland Fandub
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Somos un equipo apasionado de fandubers con más de 2 años creando contenido
            de calidad para nuestra comunidad.
          </p>
          
          <div className="flex justify-center gap-6">
            <SocialButton
              platform="youtube"
              url="https://youtube.com/neverlandfandub"
              className="scale-125"
            />
            <SocialButton
              platform="discord"
              url="https://discord.gg/neverlandfandub"
              className="scale-125"
            />
            <SocialButton
              platform="facebook"
              url="https://facebook.com/neverlandfandub"
              className="scale-125"
            />
            <SocialButton
              platform="tiktok"
              url="https://tiktok.com/@neverlandfandub"
              className="scale-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
}