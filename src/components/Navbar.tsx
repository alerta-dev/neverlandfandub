import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Mic2 } from 'lucide-react';

const routes = [
  { path: '/', label: 'Inicio' },
  { path: '/voices', label: 'Banco de Voces' },
  { path: '/videos', label: 'Videos' },
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Mic2 className="h-6 w-6 text-pink-500" />
            <span className="font-bold text-xl text-gray-900">Neverland Fandub</span>
          </Link>
          <div className="flex space-x-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-pink-500',
                  location.pathname === route.path
                    ? 'text-pink-500'
                    : 'text-gray-600'
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}