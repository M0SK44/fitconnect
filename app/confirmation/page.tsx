import Sidebar from "@/components/layout/sidebar"
import ConfirmationPage from "@/components/payment/confirmation-page"

export default function Confirmation() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isAdmin={false} />

      <main className="flex-1 lg:ml-64">
        <div className="p-4 md:p-8">
          <ConfirmationPage />
        </div>
      </main>
    </div>
  )
}
