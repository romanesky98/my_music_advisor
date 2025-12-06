import { Star, ArrowRight } from 'lucide-react';

export default function PinnedArticle() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-10 md:p-12 shadow-lg border-2 border-brand-200">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-6 h-6 text-brand-600 fill-brand-600" />
            <span className="text-brand-600 font-semibold uppercase tracking-wide text-sm">
              Featured — Our Latest Discovery
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            An artist you should listen to before everyone else discovers them.
          </h3>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Every day we select a new gem: a track, an EP, or a name that deserves much more attention than it has now. This is what we've chosen for you today — and yes, it truly deserves it.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Read Today's Discovery
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
