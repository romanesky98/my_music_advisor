import { Heart } from 'lucide-react';
import logoUrl from '../Public/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <img src={logoUrl} alt="MYMUSICADVISOR" className="h-10 w-auto" />
            <span className="text-2xl font-bold">MYMUSICADVISOR</span>
          </div>

          <p className="text-xl text-gray-300 font-semibold mb-6">
            Hidden gems. Real music. Real ratings.
          </p>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2025 MyMusicAdvisor — All rights reserved.
            </p>

            <p className="flex items-center gap-2 text-gray-400">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for music lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
