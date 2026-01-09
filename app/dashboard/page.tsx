"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
<<<<<<< HEAD
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Clock, TrendingUp, Calendar } from "lucide-react"
import Link from "next/link"
import { AIChat } from "@/components/ai-chat"
=======
import { AlertCircle, CheckCircle, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [reports, setReports] = useState<any[]>([])

  useEffect(() => {
    const auth = localStorage.getItem("civicsense_auth")
    const userData = localStorage.getItem("civicsense_user")

    if (!auth) {
      router.push("/login")
      return
    }

    if (userData) {
      setUser(JSON.parse(userData))
    }

    const savedReports = JSON.parse(localStorage.getItem("civicsense_reports") || "[]")
    setReports(savedReports)
  }, [router])

  if (!user) return null

  const totalReports = reports.length
  const resolvedCount = reports.filter((r) => r.status === "Resolved").length
<<<<<<< HEAD
  const inProgressCount = reports.filter((r) => r.status === "In Progress").length
  const pendingCount = reports.filter((r) => r.status === "Pending").length

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Resolved":
        return (
          <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30">
            <CheckCircle className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        )
      case "In Progress":
        return (
          <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30">
            <Clock className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        )
      default:
        return (
          <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-900/30">
            <AlertCircle className="w-3 h-3 mr-1" />
            {status}
          </Badge>
        )
    }
  }

=======
  const pendingCount = reports.filter((r) => r.status === "Pending").length

>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-balance">Welcome back, {user.name}!</h1>
          <p className="text-muted-foreground mt-2">Here's an overview of your civic reports</p>
        </div>

        {/* Stats Cards */}
<<<<<<< HEAD
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="border-2 hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{totalReports}</div>
              <p className="text-xs text-muted-foreground mt-1">All time</p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Resolved</CardTitle>
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{resolvedCount}</div>
=======
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalReports}</div>
              <p className="text-xs text-muted-foreground mt-1">Lifetime reports</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Resolved</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{resolvedCount}</div>
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
              <p className="text-xs text-muted-foreground mt-1">
                {totalReports > 0 ? Math.round((resolvedCount / totalReports) * 100) : 0}% resolution rate
              </p>
            </CardContent>
          </Card>
<<<<<<< HEAD
          <Card className="border-2 hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">In Progress</CardTitle>
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{inProgressCount}</div>
              <p className="text-xs text-muted-foreground mt-1">Being addressed</p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                <AlertCircle className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{pendingCount}</div>
=======
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingCount}</div>
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
              <p className="text-xs text-muted-foreground mt-1">Awaiting review</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>Your latest civic issue submissions</CardDescription>
          </CardHeader>
          <CardContent>
            {reports.length === 0 ? (
<<<<<<< HEAD
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground mb-4 font-medium">No reports yet</p>
                <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
                  Start making a difference in your community by reporting your first issue
                </p>
                <Link href="/dashboard/report">
                  <Button size="lg">Report Your First Issue</Button>
=======
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">No reports yet</p>
                <Link href="/dashboard/report">
                  <Button>Report Your First Issue</Button>
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
                </Link>
              </div>
            ) : (
              <>
<<<<<<< HEAD
                <div className="space-y-3">
=======
                <div className="space-y-4">
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
                  {reports
                    .slice(0, 5)
                    .reverse()
                    .map((report) => (
                      <div
                        key={report.id}
<<<<<<< HEAD
                        className="flex items-center justify-between p-4 border-2 rounded-lg hover:bg-muted/50 transition-all hover:shadow-md group"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <AlertCircle className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground truncate">{report.title}</h3>
                            <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                              <span className="font-medium">{report.category}</span>
                              <span className="text-muted-foreground/60">•</span>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {new Date(report.date).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 shrink-0">{getStatusBadge(report.status)}</div>
                      </div>
                    ))}
                </div>
                <div className="mt-6 text-center pt-4 border-t">
                  <Link href="/dashboard/report">
                    <Button size="lg">Report New Issue</Button>
=======
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <AlertCircle className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">{report.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {report.category} • {new Date(report.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span
                            className={`text-sm px-3 py-1 rounded-full ${
                              report.status === "Resolved"
                                ? "bg-green-100 text-green-700"
                                : report.status === "In Progress"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {report.status}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="mt-6 text-center">
                  <Link href="/dashboard/report">
                    <Button>Report New Issue</Button>
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
                  </Link>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
<<<<<<< HEAD
      <AIChat />
=======
>>>>>>> b90544f0e5dc3992c6a98b7aa224ec70286208a6
    </DashboardLayout>
  )
}
