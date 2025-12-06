import logoUrl from '../Public/images/logo.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-700 via-red-800 to-yellow-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-6 w-[26rem] h-[26rem] bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-10 w-96 h-96 bg-red-700 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute top-6 left-0 right-0 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
          <div className="flex items-center">
            <img src={logoUrl} alt="MYMUSICADVISOR" className="h-28 w-auto drop-shadow-2xl" />
          </div>
          <div className="text-center">
            <span className="font-display text-5xl md:text-6xl tracking-widest">MYMUSICADVISOR</span>
          </div>
          <div></div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        

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
          className="inline-block bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white font-semibold px-12 py-5 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl ring-1 ring-white/10"
        >
          View Latest Recommendations
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
