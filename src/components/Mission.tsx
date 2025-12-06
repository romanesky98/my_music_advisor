import { Target, CheckCircle } from 'lucide-react';

export default function Mission() {
  const promises = [
    'Bring you new discoveries every day',
    'Give space to quality emerging artists',
    'Offer honest ratings explained clearly',
    'Create a community that truly loves to explore',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-6 py-3 rounded-full mb-4">
            <Target className="w-6 h-6 text-red-600" />
            <span className="text-red-600 font-bold uppercase tracking-wide">Mission</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Finding what algorithms won't show you.
          </h2>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-10 md:p-12 shadow-lg border-2 border-red-100">
          <p className="text-xl text-gray-800 leading-relaxed mb-6">
            Our mission is to help you discover <strong>authentic, fresh, little-known but powerful music</strong>.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8">
            We want to take you beyond automatic playlists, beyond trends of the moment, towards artists who are creating something real.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">We promise to:</h3>

          <div className="space-y-4 mb-8">
            {promises.map((promise) => (
              <div key={promise} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{promise}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <p className="text-lg text-gray-800 font-semibold italic text-center">
              If you like discovering before others, you're in the right place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
