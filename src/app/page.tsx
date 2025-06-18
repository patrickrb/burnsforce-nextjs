
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">Patrick Burns</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
              <a href="#organizations" className="text-gray-300 hover:text-white transition-colors">Organizations</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About Me</h2>
              <p className="text-gray-300 text-lg mb-6">
                I&apos;m Patrick Burns, a Senior Software Engineer at Microsoft with a passion for both front-end and full-stack development. 
                I specialize in creating innovative solutions ranging from 3D visualizations to real-time chat applications.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Currently working on the Threat Intelligence Briefing Agent in Security Copilot, I combine my expertise 
                in modern web technologies with AI and cybersecurity to build cutting-edge applications that solve real-world problems.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
              <ul className="space-y-2 text-gray-300">
                <li>🎯 Focus: Full-Stack & Front-End Development</li>
                <li>💻 Experience: MEAN Stack, 3D Graphics, AI/ML</li>
                <li>🏢 Current Role: Senior Software Engineer at Microsoft</li>
                <li>📍 Location: Kansas City</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['Angular', 'JavaScript', 'TypeScript', 'Three.js', 'Ionic', 'HTML/CSS'].map((skill) => (
                  <span key={skill} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'WebSockets', 'Asterisk'].map((skill) => (
                  <span key={skill} className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">AI & Security</h3>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'Security Copilot', 'Threat Intelligence', 'Speech-to-Text', 'uClassify'].map((skill) => (
                  <span key={skill} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {['CodeShip', 'CI/CD', 'Modulus', 'Cordova/PhoneGap', 'WebGL', 'Microsoft Azure'].map((skill) => (
                  <span key={skill} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 group hover:border-purple-400/50 transition-all">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/images/projects/flappy.png" 
                  alt="WebGL Flappy Bird Clone"
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
                <img 
                  src="/images/projects/dice.png" 
                  alt="3D Dice Roller"
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
                <img 
                  src="/images/projects/tornado.png" 
                  alt="Tornado Simulation"
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
                <img 
                  src="/images/projects/moodify.png" 
                  alt="Moodify Mood Analysis"
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
                <img 
                  src="/images/projects/chausage.png" 
                  alt="Chausage Social Jukebox"
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
                <img 
                  src="/images/projects/soundboardr.png" 
                  alt="Soundboardr Prank Call App"
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

      {/* Work Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Work Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Senior Software Engineer</h3>
                  <p className="text-purple-400 text-lg">Microsoft</p>
                </div>
                <div className="text-gray-300 mt-2 md:mt-0">
                  <p>Oct 2021 - Present</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Leading the design and development of cutting-edge web applications using TypeScript and React. 
                My work spans from front-end development to integrating advanced AI models, with a strong focus on 
                prompt engineering to optimize user experiences and deliver scalable solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">AI/ML</span>
                <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Prompt Engineering</span>
              </div>
            </div>


            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Senior Software Engineer</h3>
                  <p className="text-purple-400 text-lg">RiskIQ</p>
                  <p className="text-sm text-gray-400">Acquired by Microsoft</p>
                </div>
                <div className="text-gray-300 mt-2 md:mt-0">
                  <p>Nov 2020 - Oct 2021</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Delivered high-impact front-end solutions helping leading enterprises secure their infrastructure. 
                Worked at the intersection of programming and information security, contributing to cyber defense solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">GraphQL</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">MongoDB</span>
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">Java</span>
                <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Cybersecurity</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Senior Software Engineer</h3>
                  <p className="text-purple-400 text-lg">Freightview</p>
                </div>
                <div className="text-gray-300 mt-2 md:mt-0">
                  <p>Feb 2017 - Nov 2020</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Full stack development using JavaScript on both front and backend with Node.js, Backbone, and Vue. 
                Utilized MongoDB, Redis, and microservices with Docker in a full CI pipeline environment with 
                multiple daily deployments.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Vue.js</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">MongoDB</span>
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">Docker</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">CI/CD</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Lead Developer</h3>
                  <p className="text-purple-400 text-lg">Kinetic Supply Company</p>
                </div>
                <div className="text-gray-300 mt-2 md:mt-0">
                  <p>Feb 2014 - Feb 2017</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Led front-end and back-end development for internal toolsets providing research, analysis, and consumer 
                insights. Managed a small development team while working with WebGL/Three.js for large SaaS application 
                components and architecting continuous integration solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">MEAN Stack</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Three.js</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">WebGL</span>
                <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Team Leadership</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Web Developer - Full Stack</h3>
                  <p className="text-purple-400 text-lg">Keywest Technology, Inc</p>
                </div>
                <div className="text-gray-300 mt-2 md:mt-0">
                  <p>Oct 2010 - Feb 2014</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Developed a new SaaS product for digital signage using PHP, JavaScript, jQuery, AJAX, PostgreSQL, 
                HTML5, and CSS3. Created administrative panels with RESTful APIs and integrated with Rackspace's 
                Cloud Server API for automated server provisioning.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">PHP</span>
                <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">RESTful APIs</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Asterisk Administrator</h3>
                  <p className="text-purple-400 text-lg">Codero</p>
                </div>
                <div className="text-gray-300 mt-2 md:mt-0">
                  <p>Apr 2008 - Nov 2010</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Developed and maintained 5 international Asterisk servers with clustering to reduce load and 
                telecommunication costs. Ensured 24/7/365 phone system functionality with comprehensive call 
                logging and automated backup systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">Asterisk</span>
                <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">VoIP</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">System Administration</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Clustering</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Linux Dedicated Server Support</h3>
                  <p className="text-purple-400 text-lg">Codero</p>
                </div>
                <div className="text-gray-300 mt-2 md:mt-0">
                  <p>Feb 2006 - Apr 2008</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Front-line troubleshooting of customer servers in a dedicated server environment. Learned to 
                correctly diagnose and resolve server problems without impacting other users on shared systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Linux</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Server Support</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Troubleshooting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section id="organizations" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Organizations</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Spotter</h3>
                  <p className="text-purple-400 text-lg">Johnson County Emergency Communications Service (ECS)</p>
                </div>
                <div className="text-gray-300 mt-2 md:mt-0">
                  <p>Mar 2022 - Present</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Volunteer with the Johnson County (KS) Emergency Communications Service, a not-for-profit amateur radio organization 
                serving as the R.A.C.E.S. organization for Johnson County Kansas Emergency Management and Communications. 
                ECS provides 24/7 emergency communication resources to Johnson County and the Kansas City Metro areas, 
                activated by Emergency Management to support Public Service Agencies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">Emergency Communications</span>
                <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Amateur Radio</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">R.A.C.E.S.</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Public Service</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Board of Directors</h3>
                  <p className="text-purple-400 text-lg">SecKC - Monthly Security Meetup</p>
                  <p className="text-sm text-gray-400">World's largest monthly security meetup</p>
                </div>
                <div className="text-gray-300 mt-2 md:mt-0">
                  <p>Jan 2013 - Present</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Board member for SecKC, guiding the direction and growth of an organization that brings together hundreds 
                of information security professionals, hackers, and enthusiasts monthly. Responsibilities include community 
                outreach, shaping event content, and fostering an inclusive environment for learning and networking.
              </p>
              <p className="text-gray-300 mb-4">
                Regular speaker delivering talks including the recurring "SecKC 101" sessions, designed to welcome newcomers 
                and introduce them to the culture, values, and opportunities within the thriving security community.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Information Security</span>
                <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Community Leadership</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Public Speaking</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Event Planning</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Badge Pirate</h3>
                  <p className="text-purple-400 text-lg">Badge Pirates LLC</p>
                </div>
                <div className="text-gray-300 mt-2 md:mt-0">
                  <p>Jan 2018 - Present</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Part of a tight-knit crew creating electronic badges for hacker conferences. I do much of the software 
                development from embedded software to full web applications that interact with the hardware. Contributing 
                across all aspects from brainstorming badge concepts to technical implementation, manufacturing, and sales 
                of innovative electronic conference badges.
              </p>
              <p className="text-gray-300 mb-4">
                Visit us at <a href="https://badgepirates.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">badgepirates.com</a>
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Embedded Software</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Full Stack Web Development</span>
                <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Hardware Integration</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Product Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Client Testimonials</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <div className="text-center">
                <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <blockquote className="text-gray-300 text-lg mb-6 italic">
                  "Patrick helped our small business resolve some complex coding issues as we worked to get our company online. 
                  He was diligent in his work, and got us taken care of quickly and efficiently. He seemed to have no trouble 
                  resolving issues that had our Developers completely stuck. Patrick is a tremendous business asset, and our 
                  company is lucky to have him as a resource."
                </blockquote>
                <div className="text-white font-semibold">Small Business Client</div>
                <div className="text-gray-400">Web Development Project</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl text-gray-300 mb-8">
            Have a project in mind? I&apos;d love to hear about it and discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:hello@burnsforce.com"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 inline-block"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/burnsforce"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-medium transition-all inline-block"
            >
              LinkedIn Profile
            </a>
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Patrick Burns. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
