"use client"

import { useState } from "react"
import { Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function ResumeViewer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="flex justify-center gap-4 mb-8">
            {/* <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Eye className="w-5 h-5 mr-2" />
              View Resume
            </Button> */}
            <a
              href="/OtishKumarResume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                asChild
              >
                <span>Download Resume</span>
              </Button>
            </a>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              <span>Otish Kumar - Resume</span>
            </DialogTitle>
          </DialogHeader>

          <div className="bg-white p-8 rounded-lg shadow-inner">
            {/* Resume Content */}
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center border-b pb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">OTISH KUMAR</h1>
                <p className="text-lg text-gray-600 mb-3">B.TECH (COMPUTER SCIENCE)</p>
                <p className="text-sm text-gray-600">
                  Email: otishsharma@gmail.com | Phone: +91 9950752793 | Location: Ranchi, India
                </p>
              </div>

              {/* Summary */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-green-600 pl-3">SUMMARY</h2>
                <p className="text-gray-700 leading-relaxed">
                  Proficient in frontend and backend development, specializing in JavaScript, React, Next.js, Node.js,
                  and Generative AI. I excel at optimizing performance, enhancing scalability, and crafting reusable
                  components. I am also proficient in n8n automation, enabling the creation of powerful, no-code workflows
                  for business process automation and system integrations. Passionate about tackling complex challenges
                  and delivering impactful, scalable results.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-green-600 pl-3">EXPERIENCE</h2>

                <div className="space-y-4">
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-semibold text-gray-900">Software Engineer</h3>
                    <p className="text-sm font-medium text-green-600">Jai Infoway | Ranchi</p>
                    <p className="text-sm text-gray-600 mb-2">08/2024 - 09/2025</p>
                    <p className="text-sm text-gray-700 mb-2 italic">
                      A software development company specializing in web applications.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>
                        • Developed and maintained multiple web applications using Next.js and Node.js, with a focus on
                        performance optimization and scalability
                      </li>
                      <li>
                        • Created reusable components and modules in React.js, improving code maintainability and
                        reducing development time by 35%
                      </li>
                      <li>
                        • Led the creation of LLM-powered chatbots using Amazon Bedrock, OpenAI and LangChain for
                        improved user interaction
                      </li>
                      <li>• Designed a payroll management website to streamline employee salary processing</li>
                      <li>
                        • Built a portfolio website integrating an LLM to provide company insights and information
                      </li>
                      <li>• Developed a restaurant app to enhance customer ordering and management processes</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-semibold text-gray-900">Simulation Engineer</h3>
                    <p className="text-sm font-medium text-green-600">Imerit Technology Services Pvt. Ltd | Ranchi</p>
                    <p className="text-sm text-gray-600 mb-2">03/2021 - 07/2024</p>
                    <p className="text-sm text-gray-700 mb-2 italic">
                      Company providing data services for technology-related industries.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>
                        • Researched and implemented new technologies, tools and disciplines to aid continual quality
                        improvements
                      </li>
                      <li>• Knowledge of Lidar, image and video annotation</li>
                     
                    </ul>
                  </div>

                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-semibold text-gray-900">Drive Test Engineer</h3>
                    <p className="text-sm font-medium text-green-600">E Wave Telecommunications Pvt Ltd | Ranchi</p>
                    <p className="text-sm text-gray-600 mb-2">09/2017 - 10/2018</p>
                    <p className="text-sm text-gray-700 mb-2 italic">
                      Telecommunications company focused on mobile networks.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>
                        • Experienced in performing drive tests for LTE networks to evaluate performance, signal
                        strength, and coverage
                      </li>
                      <li>
                        • Proficient in using tools like TEMS, XCAL, and NEMO to collect and analyze data on parameters
                        such as RSRP, SINR, throughput, and latency
                      </li>
                      <li>
                        • Skilled in identifying network issues and working with optimization teams to improve coverage
                        and performance
                      </li>
                      <li>
                        • Capable of generating detailed reports to support network enhancements and ensure optimal user
                        experience
                      </li>
                      <li>• Strong knowledge of LTE technologies and network performance metrics</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-semibold text-gray-900">Office Executive</h3>
                    <p className="text-sm font-medium text-green-600">United Facilities & Logistics Pvt Ltd | Gurgaon</p>
                    <p className="text-sm text-gray-600 mb-2">11/2018 - 05/2020</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Coordinated with internal teams for data reporting and analysis</li>
                      <li>• Managed MIS and data operations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-green-600 pl-3">EDUCATION</h2>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>B.tech (Computer Science)</strong> | Shankara Institute of Technology | 08/2013 - 05/2017 |
                    Jaipur
                  </p>
                  <p>
                    <strong>Intermediate</strong> | Mahabodhi College | 08/2011 - 05/2013 | Gaya
                  </p>
                  <p>
                    <strong>Matriculation</strong> | Lato Yadav High School | 08/2008 - 05/2011 | Nawada
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-green-600 pl-3">SKILLS</h2>
                <div className="text-sm text-gray-700 space-y-2">
                  <p>
                    <strong>Frontend:</strong> Next.js, React.js, Javascript, HTML, CSS, Bootstrap, Tailwind, TypeScript
                  </p>
                  <p>
                    <strong>Backend:</strong> Node.js, Express.js, JWT
                  </p>
                  <p>
                    <strong>Database:</strong>  PostgreSQL, MySQL
                  </p>
                  <p>
                    <strong>Tools & Others:</strong> Github, Gitlab, Redux, AWS Lambda, Terraform, n8n
                  </p>
                </div>
              </div>

              {/* Key Achievements */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-green-600 pl-3">
                  KEY ACHIEVEMENTS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-1">Accelerated UI System</h4>
                    <p className="text-gray-700">Cut development time by 55% with Next.js GenAI UI System</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-1">Improved Code Efficiency</h4>
                    <p className="text-gray-700">Reduced development time by 35% through Next.js components</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-1">Enhanced Web Performance</h4>
                    <p className="text-gray-700">Increased SEO ranking with SSR, improving load times</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
