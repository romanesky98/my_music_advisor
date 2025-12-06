import logoUrl from '../Public/images/logo.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-700 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center justify-center gap-4 bg-red-600 px-8 py-4 mb-8 rounded-lg shadow-2xl">
          <img src={logoUrl} alt="MYMUSICADVISOR" className="h-16 w-auto" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            MYMUSICADVISOR
          </h1>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Discover music you haven't heard yet… but will love.
        </h2>

        <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto leading-relaxed">
          We guide you through hidden gems, emerging artists, and sounds that deserve more attention.
        </p>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Every day, a new listen you won't find anywhere else.
        </p>

        <a
          href="#recent-articles"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          View Latest Recommendations
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
