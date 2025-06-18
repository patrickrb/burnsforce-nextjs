export default function About() {
  return (
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
  );
}