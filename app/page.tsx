import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Camera, Users, TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-background/80 backdrop-blur-sm sticky top-0 z-50">
=======
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
<<<<<<< HEAD
            {/* <CHANGE> Ensured foreground color for dark mode compatibility */}
            <span className="font-bold text-xl text-balance text-foreground">CivicSense</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-foreground">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-foreground">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-foreground">
=======
            <span className="font-bold text-xl text-balance">CivicSense</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
<<<<<<< HEAD
          {/* <CHANGE> Added explicit foreground colors for hero text */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-foreground">
            Report Issues, <span className="text-blue-600 dark:text-blue-400">Build Better Communities</span>
=======
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Report Issues, <span className="text-blue-600">Build Better Communities</span>
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
            Help your municipality address civic issues faster by reporting problems with photos and videos. Together,
            we can make our communities cleaner, safer, and better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section id="features" className="container mx-auto px-4 py-20 bg-white dark:bg-background">
        <div className="text-center mb-12">
          {/* <CHANGE> Ensured feature section text is visible in dark mode */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground">Why Choose CivicSense?</h2>
=======
      <section id="features" className="container mx-auto px-4 py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose CivicSense?</h2>
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
          <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
            Powerful features designed to make civic reporting simple and effective
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
<<<<<<< HEAD
              <Camera className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
=======
              <Camera className="w-12 h-12 text-blue-600 mb-4" />
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
              <CardTitle>Photo & Video Reports</CardTitle>
              <CardDescription>
                Capture issues with photos and videos to provide clear evidence for faster resolution
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
<<<<<<< HEAD
              <TrendingUp className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
=======
              <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
              <CardTitle>Track Progress</CardTitle>
              <CardDescription>
                Monitor the status of your reports and see real-time updates from municipal authorities
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
<<<<<<< HEAD
              <Users className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
=======
              <Users className="w-12 h-12 text-blue-600 mb-4" />
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
              <CardTitle>Community Impact</CardTitle>
              <CardDescription>
                Join thousands of citizens working together to improve their neighborhoods
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
<<<<<<< HEAD
        {/* <CHANGE> Adjusted CTA card colors for better dark mode */}
        <Card className="bg-blue-600 dark:bg-blue-700 text-white border-0">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-white">Ready to Make a Difference?</h2>
            <p className="text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto text-pretty">
=======
        <Card className="bg-blue-600 text-white border-0">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Make a Difference?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-pretty">
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
              Join our community of active citizens and start reporting issues today
            </p>
            <Link href="/signup">
              <Button size="lg" variant="secondary">
                Create Free Account
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
<<<<<<< HEAD
      <footer className="border-t bg-gray-50 dark:bg-muted/20 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* <CHANGE> Made footer text visible in dark mode */}
            <p className="text-sm text-muted-foreground">© 2026 CivicSense. Making communities better, together.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
=======
      <footer className="border-t bg-gray-50 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2026 CivicSense. Making communities better, together.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
