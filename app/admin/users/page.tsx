import Sidebar from "@/components/layout/sidebar"
import UsersTable from "@/components/admin/users-table"

export default function AdminUsers() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isAdmin={true} currentPage="/admin/users" />

      <main className="flex-1 lg:ml-64">
        <div className="p-4 md:p-8">
          <UsersTable />
        </div>
      </main>
    </div>
  )
}
