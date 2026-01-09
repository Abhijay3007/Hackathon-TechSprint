"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Zap } from "lucide-react"

export default function AboutPage() {
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem("civicsense_auth")
    if (!auth) {
      router.push("/login")
    }
  }, [router])

  return (
    <DashboardLayout>
      <div className="max-w-4xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-balance">About CivicSense</h1>
          <p className="text-muted-foreground mt-2">Building better communities through citizen engagement</p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed">
              CivicSense is a platform designed to bridge the gap between citizens and municipal authorities. We believe
              that every community member should have an easy way to report civic issues and contribute to making their
              neighborhoods cleaner, safer, and more livable.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Target className="w-10 h-10 text-blue-600 mb-2" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To empower citizens with tools to actively participate in improving their communities and to help
                municipal authorities respond more efficiently to civic issues.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-10 h-10 text-blue-600 mb-2" />
              <CardTitle>Community First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We put community needs at the center of everything we do. Every feature is designed to make civic
                participation accessible and meaningful for all citizens.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="w-10 h-10 text-blue-600 mb-2" />
              <CardTitle>Quick Action</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We facilitate rapid communication between citizens and authorities, ensuring that issues are addressed
                promptly and communities see real improvements.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Report an Issue</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Spot a civic problem? Take a photo or video and submit a report with details about the location and
                  nature of the issue.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Municipal Review</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your report is sent directly to the relevant municipal department for review and action planning.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Track Progress</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Monitor the status of your report from your dashboard and receive updates as the issue is addressed.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
