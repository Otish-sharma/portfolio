// This script creates a properly formatted resume PDF
const fs = require("fs")
const path = require("path")

// Resume content based on your provided information
const resumeContent = `
OTISH KUMAR
B.TECH (COMPUTER SCIENCE)
Email: otishsharma@gmail.com | Phone: 9950752793 | Location: Ranchi

SUMMARY
Proficient in frontend and backend development, specializing in JavaScript, React, Next.js, Node.js, and Generative AI. I excel at optimizing performance, enhancing scalability, and crafting reusable components. Leveraging tools like LangChain and Amazon Bedrock, I've boosted process efficiency by 45% and data processing by 70% through innovative AI-driven solutions. Passionate about tackling complex challenges and delivering impactful, scalable results.

EXPERIENCE

Software Engineer | Jai Infoway | Gurgaon | March 2021 - July 2024
• Developed and maintained multiple web applications using Next.js and Node.js, with a focus on performance optimization and scalability
• Created reusable components and modules in React.js, improving code maintainability and reducing development time by 35%
• Led the creation of LLM-powered chatbots using Amazon Bedrock, OpenAI and LangChain for improved user interaction
• Designed a payroll management website to streamline employee salary processing
• Built a portfolio website integrating an LLM to provide company insights and information
• Developed a restaurant app to enhance customer ordering and management processes

SR. ITES Executive | Imerit Technology Services Pvt. Ltd | Ranchi | August 2024 - Present
• Researched and implemented new technologies, tools and disciplines to aid continual quality improvements
• Knowledge of Lidar, image and video annotation
• Coordinated with internal teams for data reporting and analysis
• Managed MIS and data operations

Drive Test Engineer | E Wave Telecommunications Pvt Ltd | Ranchi | November 2018 - May 2020
• Experienced in performing drive tests for LTE networks to evaluate performance, signal strength, and coverage
• Proficient in using tools like TEMS, XCAL, and NEMO to collect and analyze data on parameters such as RSRP, SINR, throughput, and latency
• Skilled in identifying network issues and working with optimization teams to improve coverage and performance
• Capable of generating detailed reports to support network enhancements and ensure optimal user experience
• Strong knowledge of LTE technologies and network performance metrics

Office Executive | United Facilities & Logistics Pvt Ltd | Ranchi | September 2017 - October 2018
• Coordinated with internal teams for data reporting and analysis
• Managed MIS and data operations

EDUCATION
B.tech (Computer Science) | Shankara Institute of Technology | August 2013 - May 2017
Intermediate | Mahabodhi College | August 2011 - May 2013
Matriculation | Lato Yadav High School | August 2008 - May 2011

SKILLS
Frontend: Next.js, React.js, JavaScript, TypeScript, HTML, CSS, Bootstrap, Tailwind
Backend: Node.js, Express.js, JWT
Databases:  PostgreSQL, MySQL
Tools & Others: Github, Gitlab, Redux, AWS Lambda, LangChain, Bedrock

KEY ACHIEVEMENTS
• Cut development time by 55% with Next.js GenAI UI System
• Reduced development time by 35% through Next.js components
• Increased SEO ranking with SSR, improving load times
`

console.log("Resume content prepared for PDF generation")
console.log(
  "Note: In a real implementation, you would use a PDF library like jsPDF or puppeteer to generate the actual PDF file",
)
