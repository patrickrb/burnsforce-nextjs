export default function Contact() {
  return (
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
  );
}