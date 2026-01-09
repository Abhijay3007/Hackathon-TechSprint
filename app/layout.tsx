import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
<<<<<<< HEAD
import { ThemeProvider } from "@/components/theme-provider"
=======
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CivicSense - Report Civic Issues",
  description: "Help improve your community by reporting civic issues",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
<<<<<<< HEAD
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
=======
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
        <Analytics />
      </body>
    </html>
  )
}
