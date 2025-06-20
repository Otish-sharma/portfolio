export default function Experience() {
  const experiences = [
  {
      title: "Software Engineer",
      company: "Jai Infoway",
      location: "Ranchi",
      period: "August 2024 - Present",
      dateRange: "08/2024 - Present",
      description: [
        "A software development company specializing in web applications.",
        "Developed and maintained multiple web applications using Next.js and Node.js, with a focus on performance optimization and scalability",
        "Created reusable components and modules in React.js, improving code maintainability and reducing development time by 35%",
        "Led the creation of LLM-powered chatbots using Amazon Bedrock, OpenAI and LangChain for improved user interaction",
        "Designed a payroll management website to streamline employee salary processing",
        "Built a portfolio website integrating an LLM to provide company insights and information",
        "Developed a restaurant app to enhance customer ordering and management processes",
      ],
      achievements: [
        "Cut development time by 55% with Next.js GenAI UI System",
        "Reduced development time by 35% through Next.js components",
        "Increased SEO ranking with SSR, improving load times",
      ],
    },
    {
      title: "SR. ITES Executive",
      company: "Imerit Technology Services Pvt. Ltd",
      location: "Ranchi",
      period: "March 2021 - July 2024",
      dateRange: "03/2021 - 07/2024",
      description: [
        "Company providing data services for technology-related industries.",
        "Researched and implemented new technologies, tools and disciplines to aid continual quality improvements",
        "Knowledge of Lidar, image and video annotation",
        "Coordinated with internal teams for data reporting and analysis",
        "Managed MIS and data operations",
      ],
    },
    
    {
      title: "Drive Test Engineer",
      company: "E Wave Telecommunications Pvt Ltd",
      location: "Ranchi",
      period: "September 2017 - October 2018",
      dateRange: "09/2017 - 10/2018",
      description: [
        "Telecommunications company focused on mobile networks.",
        "Experienced in performing drive tests for LTE networks to evaluate performance, signal strength, and coverage",
        "Proficient in using tools like TEMS, XCAL, and NEMO to collect and analyze data on parameters such as RSRP, SINR, throughput, and latency",
        "Skilled in identifying network issues and working with optimization teams to improve coverage and performance",
        "Capable of generating detailed reports to support network enhancements and ensure optimal user experience",
        "Strong knowledge of LTE technologies and network performance metrics",
      ],
    },
    {
      title: "Office Executive",
      company: "United Facilities & Logistics Pvt Ltd",
      location: "Gurgaon",
      period: "November 2018 - May 2020",
      dateRange: "11/2018 - 05/2020",
      description: [
        "Coordinated with internal teams for data reporting and analysis",
        "Managed MIS and data operations",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work <span className="text-green-600">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey spanning telecommunications, software development, and AI integration.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-green-600 font-medium">{exp.company}</p>
                  <p className="text-gray-600">{exp.location}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {exp.description.map((desc, descIndex) => (
                  <p key={descIndex} className="text-gray-700 flex items-start">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    {desc}
                  </p>
                ))}
              </div>

              {exp.achievements && (
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <div className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <p key={achIndex} className="text-green-700 text-sm flex items-start">
                        <span className="text-green-600 mr-2 mt-1">★</span>
                        {achievement}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
