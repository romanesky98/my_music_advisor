import { Calendar, Tag, Play } from 'lucide-react';

export default function RecentArticles() {
  const articles = [
    {
      id: 1,
      title: 'The Sound of Tomorrow: Indie Dreamscapes',
      date: 'March 15, 2025',
      preview: 'A journey through ambient textures and ethereal vocals that define the new wave of independent music...',
      tags: ['Emerging', 'Indie', 'Hidden Gem'],
      rating: 4.5,
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=60',
    },
    {
      id: 2,
      title: 'Underrated Voices: Folk Revival',
      date: 'March 14, 2025',
      preview: 'Discover artists bringing authenticity back to folk music with raw emotion and acoustic mastery...',
      tags: ['Folk', 'Hidden Gem', 'Rating 9/10'],
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=1200&q=60',
    },
    {
      id: 3,
      title: 'Electronic Gems from Underground Labels',
      date: 'March 13, 2025',
      preview: 'Exploring the experimental sounds emerging from small labels that major platforms haven\'t noticed yet...',
      tags: ['Electronic', 'Emerging', 'Underground'],
      rating: 4.3,
      imageUrl: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=1200&q=60',
    },
    {
      id: 4,
      title: 'Jazz Fusion: The New Generation',
      date: 'March 12, 2025',
      preview: 'Young musicians blending jazz traditions with modern influences to create something entirely fresh...',
      tags: ['Jazz', 'Fusion', 'Hidden Gem'],
      rating: 4.6,
      imageUrl: 'https://images.unsplash.com/photo-1506291318501-31d09b57162c?auto=format&fit=crop&w=1200&q=60',
    },
  ];

  return (
    <section id="recent-articles" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The latest hidden gems
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore all our discoveries: emerging artists, small but incredible albums, underrated tracks, and mini-reviews with personalized ratings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="h-56 relative overflow-hidden">
                <img src={article.imageUrl} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/40 via-red-500/30 to-yellow-600/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.preview}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gray-900 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300">
                  Listen / Read
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-lg">
          Looking for something even rarer? Check out our filters for mood, genre, or level of "rarity".
        </p>
      </div>
    </section>
  );
}
