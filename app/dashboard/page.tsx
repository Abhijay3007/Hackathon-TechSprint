"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"

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
  const pendingCount = reports.filter((r) => r.status === "Pending").length

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-balance">Welcome back, {user.name}!</h1>
          <p className="text-muted-foreground mt-2">Here's an overview of your civic reports</p>
        </div>

        {/* Stats Cards */}
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
              <p className="text-xs text-muted-foreground mt-1">
                {totalReports > 0 ? Math.round((resolvedCount / totalReports) * 100) : 0}% resolution rate
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingCount}</div>
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
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">No reports yet</p>
                <Link href="/dashboard/report">
                  <Button>Report Your First Issue</Button>
                </Link>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  {reports
                    .slice(0, 5)
                    .reverse()
                    .map((report) => (
                      <div
                        key={report.id}
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
                  </Link>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
