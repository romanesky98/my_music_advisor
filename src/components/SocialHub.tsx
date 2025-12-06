import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

export default function SocialHub() {
  const socials = [
    { icon: Instagram, name: 'Instagram', url: '#', color: 'hover:text-pink-600' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'hover:text-blue-400' },
    { icon: Youtube, name: 'YouTube', url: '#', color: 'hover:text-red-600' },
    { icon: Facebook, name: 'Facebook', url: '#', color: 'hover:text-blue-600' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our discoveries, wherever you are.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're present on all social platforms to share hidden gems, mini-reviews, ratings, and short musical clips you won't find in standard algorithms.
          </p>
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className={`flex items-center gap-3 bg-gradient-to-br from-yellow-50 to-red-50 px-8 py-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            >
              <social.icon className="w-8 h-8 text-yellow-600" />
              <span className="font-semibold text-lg">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
