import Sidebar from "@/components/layout/sidebar"
import CheckoutPage from "@/components/payment/checkout-page"

export default function ClientPayment() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isAdmin={false} currentPage="/client/payments" />

      <main className="flex-1 lg:ml-64">
        <div className="p-4 md:p-8">
          <CheckoutPage />
        </div>
      </main>
    </div>
  )
}
