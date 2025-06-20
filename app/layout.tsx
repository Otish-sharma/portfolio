import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Otish Kumar - Full Stack Developer & Software Engineer",
  description:
    "Professional portfolio of Otish Kumar, a Full Stack Developer specializing in JavaScript, React, Next.js, Node.js, and Generative AI solutions.",
  keywords: "full stack developer, software engineer, React, Next.js, Node.js, AI, LangChain, portfolio, Otish Kumar",
  authors: [{ name: "Otish Kumar" }],
  openGraph: {
    title: "Otish Kumar - Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing web development projects and AI-powered solutions",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
