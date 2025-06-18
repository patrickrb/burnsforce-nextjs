export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'JavaScript', 'TypeScript', 'Three.js', 'Ionic', 'HTML/CSS', 'Angular'].map((skill) => (
                <span key={skill} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'WebSockets', 'Asterisk', 'C#'].map((skill) => (
                <span key={skill} className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">AI & Security</h3>
            <div className="flex flex-wrap gap-2">
              {['Machine Learning', 'Security Copilot', 'Threat Intelligence'].map((skill) => (
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
  );
}