"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import ResumeViewer from "./ResumeViewer"
import { useState } from "react"

export default function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 pt-16 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 right-40 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="text-center">
          <div className="relative inline-block mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

            {!imageError ? (
              <div className="relative">
                <Image
                  src="/otish-profile.jpeg"
                  alt="Otish Kumar - Full Stack Developer & Software Engineer"
                  width={300}
                  height={300}
                  className="rounded-full mx-auto border-4 border-white shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300 object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
              </div>
            ) : (
              <div className="w-[300px] h-[300px] rounded-full mx-auto border-4 border-white shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <User className="w-24 h-24 text-green-600 mx-auto mb-2" />
                  <p className="text-green-700 font-semibold text-lg">Otish Kumar</p>
                  <p className="text-green-600 text-sm">Full Stack Developer</p>
                </div>
              </div>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Otish{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Kumar</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-6 font-medium">Full Stack Developer & Software Engineer</p>

          <div className="flex justify-center mb-8">
            <ResumeViewer />
          </div>

          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Proficient in frontend and backend development, specializing in JavaScript, React, Next.js, Node.js, and
            Generative AI. I excel at optimizing performance, enhancing scalability, and crafting reusable components
            with <span className="font-semibold text-green-600">45% efficiency improvements</span>.
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            {/* <Button
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button> */}
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => window.open("https://www.linkedin.com/in/otish-kumar-269531b1/", "_blank")}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => window.open("mailto:otishsharma@gmail.com", "_blank")}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Button>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
