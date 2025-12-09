"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Home, Calendar, CreditCard, BarChart3, Users, Dumbbell, LogOut } from "lucide-react"

interface SidebarProps {
  isAdmin?: boolean
  currentPage?: string
}

export default function Sidebar({ isAdmin = false, currentPage = "dashboard" }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true)

  const userMenuItems = [
    { icon: Home, label: "Dashboard", href: "/client/dashboard" },
    { icon: Calendar, label: "Mis Reservas", href: "/client/bookings" },
    { icon: Dumbbell, label: "Clases", href: "/client/classes" },
    { icon: CreditCard, label: "Pagos", href: "/client/payments" },
  ]

  const adminMenuItems = [
    { icon: Home, label: "Panel Admin", href: "/admin/dashboard" },
    { icon: Users, label: "Usuarios", href: "/admin/users" },
    { icon: Dumbbell, label: "Clases", href: "/admin/classes" },
    { icon: Calendar, label: "Reservas", href: "/admin/bookings" },
    { icon: BarChart3, label: "Reportes", href: "/admin/reports" },
  ]

  const menuItems = isAdmin ? adminMenuItems : userMenuItems

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-4 z-50 rounded-lg bg-sidebar-accent p-2 text-sidebar-foreground lg:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-smooth transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-40 overflow-y-auto`}
      >
        {/* Logo */}
        <div className="border-b border-sidebar-border p-6">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-sidebar-primary p-2">
              <Dumbbell className="h-5 w-5 text-sidebar-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg">FitConnect</h1>
              <p className="text-xs text-sidebar-accent">{isAdmin ? "Admin" : "Usuario"}</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="space-y-1 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-smooth ${
                currentPage === item.href
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-sidebar-border p-4">
          <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 transition-smooth">
            <LogOut size={20} />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 lg:hidden z-30" onClick={() => setIsOpen(false)} />}
    </>
  )
}
