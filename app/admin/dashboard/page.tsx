import Sidebar from "@/components/layout/sidebar"
import DashboardOverview from "@/components/admin/dashboard-overview"

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isAdmin={true} currentPage="/admin/dashboard" />

      <main className="flex-1 lg:ml-64">
        <div className="p-4 md:p-8">
          <DashboardOverview />
        </div>
      </main>
    </div>
  )
}
