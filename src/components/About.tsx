export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-300 text-lg mb-6">
              I&apos;m Patrick Burns, a Senior Software Engineer at Microsoft with deep expertise in cybersecurity and full-stack development. 
              I specialize in building security-focused applications, from threat intelligence systems to advanced AI-powered security tools.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Working alongside an exceptional team on the Threat Intelligence Briefing Agent for Security Copilot, I leverage my extensive 
              background in cybersecurity, threat analysis, and modern web technologies to create innovative solutions that protect 
              organizations from emerging threats and solve complex security challenges.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
            <ul className="space-y-2 text-gray-300">
              <li>🛡️ Focus: Software Engineering / AI & Threat Intelligence</li>
              <li>💻 Experience: Full-stack development & cybersecurity</li>
              <li>🏢 Current Role: Senior Software Engineer at Microsoft Security</li>
              <li>📍 Location: Kansas City</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}