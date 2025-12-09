import Sidebar from "@/components/layout/sidebar"
import ClassesList from "@/components/client/classes-list"

export default function ClientClasses() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isAdmin={false} currentPage="/client/classes" />

      <main className="flex-1 lg:ml-64">
        <div className="p-4 md:p-8">
          <ClassesList />
        </div>
      </main>
    </div>
  )
}
