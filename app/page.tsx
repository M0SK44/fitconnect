"use client"

import { useState } from "react"
import LoginPage from "@/components/auth/login-page"
import RegisterPage from "@/components/auth/register-page"
import BookingForm from "@/components/client/booking-form"
import Sidebar from "@/components/layout/sidebar"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("login")

  const showBookingForm = currentPage === "booking"

  return (
    <div className="min-h-screen bg-background">
      {showBookingForm ? (
        <div className="flex">
          <Sidebar currentPage="/client/bookings" />
          <main className="flex-1 lg:ml-64 p-8">
            <div className="max-w-2xl">
              <button
                onClick={() => setCurrentPage("login")}
                className="mb-6 flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-smooth"
              >
                ← Volver al inicio
              </button>
              <BookingForm />
            </div>
          </main>
        </div>
      ) : currentPage === "login" ? (
        <LoginPage onSwitch={() => setCurrentPage("register")} onBooking={() => setCurrentPage("booking")} />
      ) : (
        <RegisterPage onSwitch={() => setCurrentPage("login")} />
      )}
    </div>
  )
}
