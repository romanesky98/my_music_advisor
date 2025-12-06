import { Search, Filter, Star, MessageSquare } from 'lucide-react';

export default function OurMethod() {
  const steps = [
    {
      number: '1',
      icon: Search,
      title: 'We Dig',
      description: 'We sift through hundreds of emerging tracks, small albums, and independent releases.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '2',
      icon: Filter,
      title: 'We Choose',
      description: 'Every selection comes from listening. Not from numbers or artificial trending.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '3',
      icon: Star,
      title: 'We Rate',
      description: 'Transparent ratings, explained with simple words.',
      color: 'from-orange-500 to-red-500',
    },
    {
      number: '4',
      icon: MessageSquare,
      title: 'We Tell Stories',
      description: 'Every recommendation has a story, a mood, a reason why it can hit you.',
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our method
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${step.color}`}></div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                    {step.number}
                  </div>
                  <step.icon className="w-10 h-10 text-gray-700" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-brand-700 to-brand-500 rounded-2xl p-8 md:p-10 text-white text-center shadow-xl">
          <p className="text-xl md:text-2xl font-semibold">
            Behind every "hidden gem", there's someone who truly listened to it.
          </p>
        </div>
      </div>
    </section>
  );
}
