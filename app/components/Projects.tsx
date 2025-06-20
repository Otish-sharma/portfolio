"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "LLM-Powered Chatbot System",
    description:
      "Created intelligent chatbots using Amazon Bedrock, OpenAI and LangChain for improved user interaction, boosting process efficiency by 45%.",
    image: "/images/chatbot-project.png",
    technologies: ["Next.js", "LangChain", "Amazon Bedrock", "OpenAI", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/otish/chatbot",
    featured: true,
  },
  {
    id: 2,
    title: "Payroll Management System",
    description:
      "Designed and developed a comprehensive payroll management website to streamline employee salary processing with automated calculations.",
    image: "/images/payroll-project.png",
    technologies: ["React.js", "Node.js", "PostgreSQL", "Express.js", "JWT"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/otish/payroll",
    featured: true,
  },
  {
    id: 3,
    title: "Restaurant Management App",
    description:
      "Developed a restaurant application to enhance customer ordering and management processes with real-time updates and inventory tracking.",
    image: "/images/restaurant-project.png",
    technologies: ["Next.js", "PostgreSQL", "Tailwind CSS", "TypeScript","Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/otish/restaurant",
    featured: true,
  },
  {
    id: 4,
    title: "AI-Powered Portfolio Website",
    description:
      "Built a portfolio website integrating an LLM to provide company insights and information with enhanced user interaction capabilities.",
    image: "/images/portfolio-project.png",
    technologies: ["Next.js","Node.js", "LangChain", "Tailwind CSS", "OpenAI API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/otish/portfolio",
    featured: true,
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({})

  const handleImageError = (projectId: number) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }))
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-green-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              My <span className="text-green-600">Projects</span>
            </h2>
            <Sparkles className="w-6 h-6 text-green-600" />
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development and AI
            integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm ${
                project.featured ? "ring-2 ring-green-200 shadow-lg" : ""
              } ${hoveredProject === project.id ? "scale-[1.02]" : ""}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    Featured
                  </span>
                </div>
              )}

              <div className="relative h-48 overflow-hidden bg-gray-100">
                {!imageErrors[project.id] ? (
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} - Project Screenshot`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={() => handleImageError(project.id)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-200 rounded-lg flex items-center justify-center mb-2 mx-auto">
                        <span className="text-2xl">💻</span>
                      </div>
                      <p className="text-green-700 font-semibold text-sm">{project.title}</p>
                      <p className="text-green-600 text-xs">Project Preview</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader className="relative">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                        index % 3 === 0
                          ? "bg-green-100 text-green-700 hover:bg-green-200"
                          : index % 3 === 1
                            ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                            : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              {/* <CardFooter className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </CardFooter> */}

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Interested in seeing more of my work?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
