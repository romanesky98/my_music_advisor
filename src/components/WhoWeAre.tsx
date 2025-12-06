import { Users, Music, Eye } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who we are
          </h2>
          <p className="text-2xl text-brand-600 font-semibold mb-8">
            The team that loves finding what others don't see.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10 md:p-12 mb-8">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            MyMusicAdvisor was born from a simple passion: <strong>discovering music that deserves attention, but often remains hidden</strong> among the releases of the moment.
          </p>

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            We are curious, compulsive listeners, collectors of musical "gems".
          </p>

          <p className="text-xl text-gray-700 leading-relaxed">
            We love giving visibility to emerging talents and explaining why certain tracks, although not famous, know how to hit the mark.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-brand-600" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">Passionate Team</h3>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Music className="w-8 h-8 text-brand-600" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">Music Collectors</h3>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-brand-600" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">Gem Seekers</h3>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 font-semibold italic">
            We don't seek hype: we seek truth and quality.
          </p>
        </div>
      </div>
    </section>
  );
}
