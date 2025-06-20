"use client"

import { useState } from "react"
import { Heart, Github, Linkedin, Mail, Facebook, Instagram, Twitter, ExternalLink } from "lucide-react"

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

  const socialLinks = [
    // {
    //   name: "Facebook",
    //   icon: <Facebook className="w-5 h-5" />,
    //   url: "https://facebook.com/otishsharma",
    //   color: "hover:text-blue-600",
    //   bgColor: "hover:bg-blue-50",
    // },
    // {
    //   name: "Instagram",
    //   icon: <Instagram className="w-5 h-5" />,
    //   url: "https://instagram.com/otishsharma",
    //   color: "hover:text-pink-600",
    //   bgColor: "hover:bg-pink-50",
    // },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/otish-kumar-269531b1/",
      color: "hover:text-blue-700",
      bgColor: "hover:bg-blue-50",
    },
    // {
    //   name: "Twitter",
    //   icon: <Twitter className="w-5 h-5" />,
    //   url: "https://twitter.com/otishsharma",
    //   color: "hover:text-blue-400",
    //   bgColor: "hover:bg-blue-50",
    // },
    // {
    //   name: "GitHub",
    //   icon: <Github className="w-5 h-5" />,
    //   url: "https://github.com/otishsharma",
    //   color: "hover:text-gray-900",
    //   bgColor: "hover:bg-gray-50",
    // },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:otishsharma@gmail.com",
      color: "hover:text-green-600",
      bgColor: "hover:bg-green-50",
    },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-white border-t border-gray-200 relative">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  Otish Kumar
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Full Stack Developer & Software Engineer passionate about creating innovative digital solutions with
                modern technologies and AI integration.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>📍 Ranchi, India</span>
                <span className="mx-2">•</span>
                <span>📧 otishsharma@gmail.com</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Connect with me</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 rounded-xl bg-gray-50 border border-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.bgColor} ${social.color}`}
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    {social.icon}
                    <span className="sr-only">{social.name}</span>

                    {/* Tooltip */}
                    <div
                      className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap ${
                        hoveredSocial === social.name ? "opacity-100" : ""
                      }`}
                    >
                      {social.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center group"
                  >
                    <ExternalLink className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Highlight */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "TypeScript", "AI/ML", "AWS"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 border border-gray-200 rounded-md text-xs text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Let's Work Together</h4>
              <p className="text-gray-600 text-sm mb-3">Open to freelance projects and full-time opportunities.</p>
              <button
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Bottom Section with "Created by Otish" */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Otish Kumar. All rights reserved.</p>
          </div>

          {/* Simple and Clear "Created by Otish" line */}
          <div className="group relative">
            <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-300">
              <span className="text-sm">Crafted with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-sm">by</span>
              <span className="font-bold text-2xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent hover:from-green-700 hover:to-blue-700 transition-all duration-300">
                Otish
              </span>
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-green-500 rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce animation-delay-200"></div>
                <div className="w-1 h-1 bg-purple-500 rounded-full animate-bounce animation-delay-400"></div>
              </div>
            </div>

            {/* Simple hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
          </div>

          <div className="text-gray-500 text-sm">
            <p>Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
    </footer>
  )
}
