export default function Organizations() {
  return (
    <section id="organizations" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Organizations</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Board of Directors</h3>
                <p className="text-purple-400 text-lg">SecKC - Monthly Security Meetup</p>
                <p className="text-sm text-gray-400">World&apos;s largest monthly security meetup</p>
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
  );
}