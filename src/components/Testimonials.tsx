export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Client Testimonials</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <div className="text-center">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <blockquote className="text-gray-300 text-lg mb-6 italic">
                &quot;Patrick helped our small business resolve some complex coding issues as we worked to get our company online. 
                He was diligent in his work, and got us taken care of quickly and efficiently. He seemed to have no trouble 
                resolving issues that had our Developers completely stuck. Patrick is a tremendous business asset, and our 
                company is lucky to have him as a resource.&quot;
              </blockquote>
              <div className="text-white font-semibold">Small Business Client</div>
              <div className="text-gray-400">Web Development Project</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}