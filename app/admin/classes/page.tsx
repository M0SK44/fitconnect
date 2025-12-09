import Sidebar from "@/components/layout/sidebar"
import ClassesManagement from "@/components/admin/classes-management"

export default function AdminClasses() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isAdmin={true} currentPage="/admin/classes" />

      <main className="flex-1 lg:ml-64">
        <div className="p-4 md:p-8">
          <ClassesManagement />
        </div>
      </main>
    </div>
  )
}
