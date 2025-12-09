import Sidebar from "@/components/layout/sidebar"
import ReportsPage from "@/components/admin/reports-page"

export default function AdminReports() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isAdmin={true} currentPage="/admin/reports" />

      <main className="flex-1 lg:ml-64">
        <div className="p-4 md:p-8">
          <ReportsPage />
        </div>
      </main>
    </div>
  )
}
