export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-green-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hello! I'm Otish Kumar</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in creating innovative digital solutions. My journey
              spans from telecommunications to software development, where I've specialized in modern web technologies
              and AI-driven applications.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I specialize in JavaScript frameworks like React and Next.js, with extensive backend experience in
              Node.js. I'm particularly passionate about Generative AI, having worked with LangChain and Amazon Bedrock
              to create LLM-powered solutions that boost efficiency by 45%.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I'm not coding, I enjoy exploring new AI technologies, optimizing web performance, and contributing
              to scalable software solutions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Experience</h4>
              <p className="text-gray-700">1 year in software development</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Education</h4>
              <p className="text-gray-700">B.Tech Computer Science</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Location</h4>
              <p className="text-gray-700">Ranchi, India</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Interests</h4>
              <p className="text-gray-700">AI/ML, Web Performance, Scalable Systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
