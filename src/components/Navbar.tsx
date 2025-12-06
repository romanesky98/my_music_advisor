import { Link, NavLink } from 'react-router-dom';
import logoUrl from '../Public/images/logo.png';

export default function Navbar() {
  const linkBase = 'text-gray-700 hover:text-red-600 font-semibold px-3 py-2 transition-colors';
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-red-100">
      <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-3 items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="inline-flex items-center gap-2">
            <img src={logoUrl} alt="MYMUSICADVISOR" className="h-10 w-auto" />
          </Link>
        </div>
        <div className="text-center">
          <Link to="/" className="font-display text-2xl md:text-3xl font-extrabold tracking-wide">
            MYMUSICADVISOR
          </Link>
        </div>
        <nav className="flex justify-end items-center gap-1">
          <NavLink to="/articles" className={({isActive}) => `${linkBase} ${isActive ? 'text-red-600' : ''}`}>Articles</NavLink>
          <NavLink to="/discover" className={({isActive}) => `${linkBase} ${isActive ? 'text-red-600' : ''}`}>Discover</NavLink>
          <NavLink to="/about" className={({isActive}) => `${linkBase} ${isActive ? 'text-red-600' : ''}`}>About</NavLink>
          <NavLink to="/social" className={({isActive}) => `${linkBase} ${isActive ? 'text-red-600' : ''}`}>Social</NavLink>
          <NavLink to="/newsletter" className={({isActive}) => `${linkBase} ${isActive ? 'text-red-600' : ''}`}>Newsletter</NavLink>
          <NavLink to="/contact" className={({isActive}) => `${linkBase} ${isActive ? 'text-red-600' : ''}`}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}