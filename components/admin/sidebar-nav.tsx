"use client"

import Link from "next/link"
import { BarChart3, Users, Dumbbell, Calendar } from "lucide-react"

export default function AdminSidebarNav() {
  return (
    <nav className="space-y-2">
      <div className="px-4 py-2">
        <p className="text-xs font-bold uppercase text-muted-foreground">Panel Admin</p>
      </div>
      <Link
        href="/admin/dashboard"
        className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-accent/50 transition-smooth"
      >
        <BarChart3 size={20} />
        <span>Dashboard</span>
      </Link>
      <Link
        href="/admin/users"
        className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-accent/50 transition-smooth"
      >
        <Users size={20} />
        <span>Usuarios</span>
      </Link>
      <Link
        href="/admin/classes"
        className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-accent/50 transition-smooth"
      >
        <Dumbbell size={20} />
        <span>Clases</span>
      </Link>
      <Link
        href="/admin/bookings"
        className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-accent/50 transition-smooth"
      >
        <Calendar size={20} />
        <span>Reservas</span>
      </Link>
    </nav>
  )
}
