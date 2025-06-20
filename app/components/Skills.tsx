"use client"

import { useState } from "react"
import { Code, Database, Brain, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML/CSS"],
  },
  {
    title: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "JWT"],
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    skills: ["LangChain", "Amazon Bedrock", "OpenAI API", "AWS Lambda", "Generative AI"],
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    skills: ["Github", "Gitlab", "Redux", "Docker", "AWS", "Vercel"],
  },
]

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-green-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life and create exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                hoveredCategory === categoryIndex ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              ></div>

              {/* Icon with gradient background */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {category.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-gray-800 transition-colors duration-300">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center group/skill">
                    <div
                      className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3 group-hover/skill:scale-125 transition-transform duration-200`}
                    ></div>
                    <span className="text-gray-700 font-medium group-hover/skill:text-gray-900 transition-colors duration-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover effect border */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                style={{
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Additional skills showcase */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "AWS", "LangChain", "Tailwind"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-gray-800 rounded-full text-sm font-medium hover:from-green-200 hover:to-blue-200 transition-all duration-300 hover:scale-105 cursor-default shadow-sm"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
