import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 group hover:border-purple-400/50 transition-all">
            <div className="h-48 relative overflow-hidden">
              <Image 
                src="/images/projects/flappy.png" 
                alt="WebGL Flappy Bird Clone"
                width={400}
                height={200}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">WebGL Flappy Bird Clone</h3>
              <p className="text-gray-300 mb-4">
                A Three.js and Angular recreation of the classic Flappy Bird game, featuring 3D graphics and physics-based gameplay.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">Three.js</span>
                <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-xs">Angular</span>
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">WebGL</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 group hover:border-purple-400/50 transition-all">
            <div className="h-48 relative overflow-hidden">
              <Image 
                src="/images/projects/dice.png" 
                alt="3D Dice Roller"
                width={400}
                height={200}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">3D Dice Roller</h3>
              <p className="text-gray-300 mb-4">
                Built with MEAN stack + Three.js, featuring Physi.js physics-based dice rolling with realistic 3D graphics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">MEAN Stack</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">Three.js</span>
                <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs">Physi.js</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 group hover:border-purple-400/50 transition-all">
            <div className="h-48 relative overflow-hidden">
              <Image 
                src="/images/projects/tornado.png" 
                alt="Tornado Simulation"
                width={400}
                height={200}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Tornado Simulation</h3>
              <p className="text-gray-300 mb-4">
                A MEAN stack and Three.js project allowing users to control the number of cubes and spin speed of a tornado simulation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">MEAN Stack</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">Three.js</span>
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">Particle System</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 group hover:border-purple-400/50 transition-all">
            <div className="h-48 relative overflow-hidden">
              <Image 
                src="/images/projects/moodify.png" 
                alt="Moodify Mood Analysis"
                width={400}
                height={200}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Moodify</h3>
              <p className="text-gray-300 mb-4">
                Conversational mood analysis app using Node, Angular/Ionic, MongoDB, and speech-to-text functionality with ML-powered sentiment analysis.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-pink-500/20 text-pink-300 px-2 py-1 rounded text-xs">Machine Learning</span>
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">Ionic</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">Speech-to-Text</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 group hover:border-purple-400/50 transition-all">
            <div className="h-48 relative overflow-hidden">
              <Image 
                src="/images/projects/chausage.png" 
                alt="Chausage Social Jukebox"
                width={400}
                height={200}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Chausage Social Jukebox</h3>
              <p className="text-gray-300 mb-4">
                Interactive music voting system for bars, parties, and offices where users can add songs and vote on the queue via QR codes.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs">Real-time Voting</span>
                <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs">MEAN Stack</span>
                <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">QR Codes</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 group hover:border-purple-400/50 transition-all">
            <div className="h-48 relative overflow-hidden">
              <Image 
                src="/images/projects/soundboardr.png" 
                alt="Soundboardr Prank Call App"
                width={400}
                height={200}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Soundboardr</h3>
              <p className="text-gray-300 mb-4">
                MEAN stack application integrated with Asterisk for prank calls, featuring caller ID spoofing and audio file playback with celebrity soundboards.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-xs">Asterisk</span>
                <span className="bg-pink-500/20 text-pink-300 px-2 py-1 rounded text-xs">VoIP</span>
                <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">Audio Processing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}