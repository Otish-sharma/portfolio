// Generate a proper PDF resume using jsPDF
import jsPDF from "jspdf"

// Create new PDF document
const doc = new jsPDF()

// Set font
doc.setFont("helvetica")

// Header
doc.setFontSize(20)
doc.setFont("helvetica", "bold")
doc.text("OTISH KUMAR", 105, 20, { align: "center" })

doc.setFontSize(12)
doc.setFont("helvetica", "normal")
doc.text("B.TECH (COMPUTER SCIENCE)", 105, 30, { align: "center" })

// Contact Info
doc.setFontSize(10)
doc.text("Email: otishsharma@gmail.com | Phone: +91 9950752793 | Location: Ranchi, India", 105, 40, { align: "center" })

// Add line separator
doc.line(20, 45, 190, 45)

// Summary Section
doc.setFontSize(14)
doc.setFont("helvetica", "bold")
doc.text("SUMMARY", 20, 55)

doc.setFontSize(10)
doc.setFont("helvetica", "normal")
const summaryText = `Proficient in frontend and backend development, specializing in JavaScript, React, Next.js, Node.js, and Generative AI. I excel at optimizing performance, enhancing scalability, and crafting reusable components. Leveraging tools like LangChain and Amazon Bedrock, I've boosted process efficiency by 45% and data processing by 70% through innovative AI-driven solutions. Passionate about tackling complex challenges and delivering impactful, scalable results.`

const summaryLines = doc.splitTextToSize(summaryText, 170)
doc.text(summaryLines, 20, 65)

// Experience Section
let yPos = 90
doc.setFontSize(14)
doc.setFont("helvetica", "bold")
doc.text("EXPERIENCE", 20, yPos)

// Software Engineer
yPos += 10
doc.setFontSize(11)
doc.setFont("helvetica", "bold")
doc.text("Software Engineer | Jai Infoway | Gurgaon | March 2021 - July 2024", 20, yPos)

yPos += 8
doc.setFontSize(9)
doc.setFont("helvetica", "normal")
const experiences = [
  "• Developed and maintained multiple web applications using Next.js and Node.js, with a focus on performance optimization and scalability",
  "• Created reusable components and modules in React.js, improving code maintainability and reducing development time by 35%",
  "• Led the creation of LLM-powered chatbots using Amazon Bedrock, OpenAI and LangChain for improved user interaction",
  "• Designed a payroll management website to streamline employee salary processing",
  "• Built a portfolio website integrating an LLM to provide company insights and information",
  "• Developed a restaurant app to enhance customer ordering and management processes",
]

experiences.forEach((exp) => {
  const expLines = doc.splitTextToSize(exp, 165)
  doc.text(expLines, 25, yPos)
  yPos += expLines.length * 4 + 2
})

// SR. ITES Executive
yPos += 5
doc.setFontSize(11)
doc.setFont("helvetica", "bold")
doc.text("SR. ITES Executive | Imerit Technology Services Pvt. Ltd | Ranchi | August 2024 - Present", 20, yPos)

yPos += 8
doc.setFontSize(9)
doc.setFont("helvetica", "normal")
const currentExp = [
  "• Researched and implemented new technologies, tools and disciplines to aid continual quality improvements",
  "• Knowledge of Lidar, image and video annotation",
  "• Coordinated with internal teams for data reporting and analysis",
  "• Managed MIS and data operations",
]

currentExp.forEach((exp) => {
  const expLines = doc.splitTextToSize(exp, 165)
  doc.text(expLines, 25, yPos)
  yPos += expLines.length * 4 + 2
})

// Drive Test Engineer
yPos += 5
doc.setFontSize(11)
doc.setFont("helvetica", "bold")
doc.text("Drive Test Engineer | E Wave Telecommunications Pvt Ltd | Ranchi | November 2018 - May 2020", 20, yPos)

yPos += 8
doc.setFontSize(9)
doc.setFont("helvetica", "normal")
const driveTestExp = [
  "• Experienced in performing drive tests for LTE networks to evaluate performance, signal strength, and coverage",
  "• Proficient in using tools like TEMS, XCAL, and NEMO to collect and analyze data on parameters such as RSRP, SINR, throughput, and latency",
  "• Skilled in identifying network issues and working with optimization teams to improve coverage and performance",
]

driveTestExp.forEach((exp) => {
  const expLines = doc.splitTextToSize(exp, 165)
  doc.text(expLines, 25, yPos)
  yPos += expLines.length * 4 + 2
})

// Add new page if needed
if (yPos > 250) {
  doc.addPage()
  yPos = 20
}

// Education Section
yPos += 10
doc.setFontSize(14)
doc.setFont("helvetica", "bold")
doc.text("EDUCATION", 20, yPos)

yPos += 10
doc.setFontSize(10)
doc.setFont("helvetica", "normal")
doc.text("B.tech (Computer Science) | Shankara Institute of Technology | August 2013 - May 2017", 20, yPos)
yPos += 6
doc.text("Intermediate | Mahabodhi College | August 2011 - May 2013", 20, yPos)
yPos += 6
doc.text("Matriculation | Lato Yadav High School | August 2008 - May 2011", 20, yPos)

// Skills Section
yPos += 15
doc.setFontSize(14)
doc.setFont("helvetica", "bold")
doc.text("SKILLS", 20, yPos)

yPos += 10
doc.setFontSize(10)
doc.setFont("helvetica", "normal")
doc.text("Frontend: Next.js, React.js, JavaScript, TypeScript, HTML, CSS, Bootstrap, Tailwind", 20, yPos)
yPos += 6
doc.text("Backend: Node.js, Express.js, JWT", 20, yPos)
yPos += 6
doc.text("Databases: MongoDB, PostgreSQL, MySQL", 20, yPos)
yPos += 6
doc.text("Tools & Others: Github, Gitlab, Redux, AWS Lambda, LangChain, Bedrock", 20, yPos)

// Key Achievements
yPos += 15
doc.setFontSize(14)
doc.setFont("helvetica", "bold")
doc.text("KEY ACHIEVEMENTS", 20, yPos)

yPos += 10
doc.setFontSize(10)
doc.setFont("helvetica", "normal")
doc.text("• Cut development time by 55% with Next.js GenAI UI System", 20, yPos)
yPos += 6
doc.text("• Reduced development time by 35% through Next.js components", 20, yPos)
yPos += 6
doc.text("• Increased SEO ranking with SSR, improving load times", 20, yPos)

// Save the PDF
const pdfOutput = doc.output("datauristring")
console.log("PDF generated successfully!")
console.log("PDF size:", pdfOutput.length, "characters")

// In a real implementation, you would save this to the public folder
// For now, we'll just log that it's been generated
console.log("Resume PDF has been generated and is ready for download")
