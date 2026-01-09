"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, CheckCircle, Clock, LogOut, PlayCircle, ImageIcon, Video } from "lucide-react"

export default function AdminPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [reports, setReports] = useState<any[]>([])
  const [selectedReport, setSelectedReport] = useState<any>(null)

  useEffect(() => {
    const auth = localStorage.getItem("civicsense_auth")
    const role = localStorage.getItem("civicsense_role")
    const userData = localStorage.getItem("civicsense_user")

    if (!auth || role !== "admin") {
      router.push("/login")
      return
    }

    if (userData) {
      setUser(JSON.parse(userData))
    }

    // Load all reports from localStorage
    const savedReports = JSON.parse(localStorage.getItem("civicsense_reports") || "[]")
    setReports(savedReports)
  }, [router])

  const handleStatusChange = (reportId: number, newStatus: string) => {
    const updatedReports = reports.map((report) => (report.id === reportId ? { ...report, status: newStatus } : report))
    setReports(updatedReports)
    localStorage.setItem("civicsense_reports", JSON.stringify(updatedReports))

    if (selectedReport?.id === reportId) {
      setSelectedReport({ ...selectedReport, status: newStatus })
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("civicsense_auth")
    localStorage.removeItem("civicsense_role")
    localStorage.removeItem("civicsense_user")
    router.push("/login")
  }

  if (!user) return null

  const pendingCount = reports.filter((r) => r.status === "Pending").length
  const inProgressCount = reports.filter((r) => r.status === "In Progress").length
  const resolvedCount = reports.filter((r) => r.status === "Resolved").length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">CivicSense Admin</h1>
                <p className="text-sm text-muted-foreground">Municipal Dashboard</p>
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Issues</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingCount}</div>
              <p className="text-xs text-muted-foreground mt-1">Awaiting action</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">In Progress</CardTitle>
              <PlayCircle className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{inProgressCount}</div>
              <p className="text-xs text-muted-foreground mt-1">Being worked on</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Resolved</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{resolvedCount}</div>
              <p className="text-xs text-muted-foreground mt-1">Successfully completed</p>
            </CardContent>
          </Card>
        </div>

        {/* Issues List & Details */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Issues List */}
          <Card className="lg:h-[calc(100vh-280px)] overflow-auto">
            <CardHeader>
              <CardTitle>All Reported Issues</CardTitle>
              <CardDescription>Click on an issue to view details and manage status</CardDescription>
            </CardHeader>
            <CardContent>
              {reports.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">No issues reported yet</div>
              ) : (
                <div className="space-y-3">
                  {reports
                    .slice()
                    .reverse()
                    .map((report) => (
                      <div
                        key={report.id}
                        onClick={() => setSelectedReport(report)}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors hover:bg-muted/50 ${
                          selectedReport?.id === report.id ? "border-blue-500 bg-blue-50" : ""
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium truncate">{report.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {report.category} • {new Date(report.date).toLocaleDateString()}
                            </p>
                            {report.files && report.files.length > 0 && (
                              <div className="flex items-center gap-2 mt-2">
                                {report.files.some((f: any) => f.type.startsWith("image")) && (
                                  <Badge variant="secondary" className="text-xs">
                                    <ImageIcon className="w-3 h-3 mr-1" />
                                    {report.files.filter((f: any) => f.type.startsWith("image")).length} image(s)
                                  </Badge>
                                )}
                                {report.files.some((f: any) => f.type.startsWith("video")) && (
                                  <Badge variant="secondary" className="text-xs">
                                    <Video className="w-3 h-3 mr-1" />
                                    {report.files.filter((f: any) => f.type.startsWith("video")).length} video(s)
                                  </Badge>
                                )}
                              </div>
                            )}
                          </div>
                          <Badge
                            variant={
                              report.status === "Resolved"
                                ? "default"
                                : report.status === "In Progress"
                                  ? "secondary"
                                  : "outline"
                            }
                            className={
                              report.status === "Resolved"
                                ? "bg-green-100 text-green-700 hover:bg-green-100"
                                : report.status === "In Progress"
                                  ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
                                  : "bg-orange-100 text-orange-700 hover:bg-orange-100"
                            }
                          >
                            {report.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Issue Details */}
          <Card className="lg:h-[calc(100vh-280px)] overflow-auto">
            <CardHeader>
              <CardTitle>Issue Details</CardTitle>
              <CardDescription>View details and update status</CardDescription>
            </CardHeader>
            <CardContent>
              {!selectedReport ? (
                <div className="text-center py-12 text-muted-foreground">
                  <AlertCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Select an issue from the list to view details</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{selectedReport.title}</h3>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline">{selectedReport.category}</Badge>
                      <Badge variant="outline">{new Date(selectedReport.date).toLocaleDateString()}</Badge>
                    </div>
                  </div>

                  {selectedReport.location && (
                    <div>
                      <h4 className="font-medium mb-2">Location</h4>
                      <p className="text-sm text-muted-foreground">{selectedReport.location}</p>
                    </div>
                  )}

                  <div>
                    <h4 className="font-medium mb-2">Description</h4>
                    <p className="text-sm text-muted-foreground">{selectedReport.description}</p>
                  </div>

                  {selectedReport.files && selectedReport.files.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">Attachments</h4>
                      <div className="space-y-2">
                        {selectedReport.files.map((file: any, index: number) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                            {file.type.startsWith("image") ? (
                              <ImageIcon className="w-5 h-5 text-muted-foreground" />
                            ) : (
                              <Video className="w-5 h-5 text-muted-foreground" />
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">{file.name}</p>
                              <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(2)} KB</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-medium mb-2">Update Status</h4>
                    <Select
                      value={selectedReport.status}
                      onValueChange={(value) => handleStatusChange(selectedReport.id, value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="In Progress">In Progress</SelectItem>
                        <SelectItem value="Resolved">Resolved</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
