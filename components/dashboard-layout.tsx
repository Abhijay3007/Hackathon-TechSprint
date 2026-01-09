"use client"

import type React from "react"
<<<<<<< HEAD
=======

>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { AlertCircle, LayoutDashboard, FileText, AlertTriangle, Mail, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
<<<<<<< HEAD
import { ThemeToggle } from "@/components/theme-toggle"
=======
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Report Issue", href: "/dashboard/report", icon: AlertTriangle },
  { name: "About", href: "/dashboard/about", icon: FileText },
  { name: "Contact", href: "/dashboard/contact", icon: Mail },
]

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("civicsense_auth")
    localStorage.removeItem("civicsense_user")
    router.push("/")
  }

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-card border-r hidden md:block">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl tracking-tight">CivicSense</span>
=======
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r hidden md:block">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">CivicSense</span>
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
            </Link>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
<<<<<<< HEAD
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-primary/10 text-primary font-semibold shadow-sm"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
=======
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    isActive ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700 hover:bg-gray-100",
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

<<<<<<< HEAD
          <div className="p-4 border-t flex flex-col gap-2">
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-sm text-muted-foreground font-medium">Appearance</span>
              <ThemeToggle />
            </div>
            <Button
              variant="ghost"
              className="w-full justify-start text-destructive hover:bg-destructive/10 hover:text-destructive"
              onClick={handleLogout}
            >
=======
          <div className="p-4 border-t">
            <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
<<<<<<< HEAD
      <header className="md:hidden sticky top-0 z-40 bg-background border-b shadow-sm">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold">CivicSense</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-destructive">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <nav className="flex overflow-x-auto px-4 pb-2 gap-2 no-scrollbar">
=======
      <header className="md:hidden sticky top-0 z-40 bg-white border-b">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold">CivicSense</span>
          </Link>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
        <nav className="flex overflow-x-auto px-4 pb-2 gap-2">
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
<<<<<<< HEAD
                  "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                  isActive ? "bg-primary text-primary-foreground shadow-md" : "bg-accent text-accent-foreground border",
=======
                  "px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors",
                  isActive ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700",
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>
      </header>

      {/* Main Content */}
      <main className="md:pl-64">
        <div className="container mx-auto p-6 md:p-8">{children}</div>
      </main>
    </div>
  )
}
