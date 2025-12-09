import Sidebar from "@/components/layout/sidebar"
import BookingForm from "@/components/client/booking-form"

export default function ClientBooking() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isAdmin={false} currentPage="/client/bookings" />

      <main className="flex-1 lg:ml-64">
        <div className="p-4 md:p-8">
          <BookingForm />
        </div>
      </main>
    </div>
  )
}
