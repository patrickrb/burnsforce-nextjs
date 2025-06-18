export default function Hero() {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <img 
            src="/images/profile.jpg" 
            alt="Patrick Burns Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 border-4 border-purple-400/50 shadow-lg"
          />
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          Full Stack
          <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Developer
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Building modern web applications with cutting-edge technologies and clean, efficient code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-medium transition-all"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}