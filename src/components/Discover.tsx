import { Sparkles, Focus, Heart, Compass, TrendingUp } from 'lucide-react';

export default function Discover() {
  const categories = [
    {
      icon: Sparkles,
      title: 'To Relax',
      description: 'Gentle sounds for unwinding',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Focus,
      title: 'To Focus',
      description: 'Ambient tracks for concentration',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Heart,
      title: 'To Feel Emotions',
      description: 'Music that moves you',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Compass,
      title: 'To Discover Something Unique',
      description: 'Rare finds off the beaten path',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: TrendingUp,
      title: 'To Stay Ahead',
      description: 'Tomorrow\'s hits before they trend',
      color: 'from-yellow-500 to-red-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find your next discovery.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-2">
            Whether you want to relax, focus, or surprise yourself, we have an emerging artist perfect for that moment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category) => (
            <a
              key={category.title}
              href="#"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>

              <div className="relative p-8 text-white">
                <category.icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-white/90">{category.description}</p>
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-gray-600 text-lg">
          Every category brings you hand-selected recommendations, without algorithms.
        </p>
      </div>
    </section>
  );
}
