import { Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-6">
            <Mail className="w-10 h-10" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay ahead of others.
          </h2>

          <p className="text-xl text-gray-200 leading-relaxed mb-2">
            Once a week we send you the best discoveries, the most interesting reviews, and 3 tracks no one is suggesting to you yet.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-red-400"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        ) : (
          <div className="max-w-2xl mx-auto text-center bg-green-600 rounded-full py-4 px-6 shadow-xl">
            <p className="text-xl font-semibold">
              Thank you! Welcome to the discovery community.
            </p>
          </div>
        )}

        <p className="text-center text-gray-300 mt-8 text-lg italic">
          Discover tomorrow what others will find the day after.
        </p>
      </div>
    </section>
  );
}
