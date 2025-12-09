"use client"

import { Users, Dumbbell, Calendar, DollarSign, TrendingUp } from "lucide-react"

const stats = [
  { icon: Users, label: "Usuarios Activos", value: "342", change: "+12%", color: "text-blue-500" },
  { icon: Dumbbell, label: "Clases", value: "18", change: "+2", color: "text-green-500" },
  { icon: Calendar, label: "Reservas Hoy", value: "87", change: "+5%", color: "text-purple-500" },
  { icon: DollarSign, label: "Ingresos (Mes)", value: "$12,450", change: "+18%", color: "text-amber-500" },
]

export default function DashboardOverview() {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold text-foreground">Panel de Control</h1>
      <p className="mb-8 text-muted-foreground">Bienvenido al panel administrativo de FitConnect</p>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-border bg-card p-6 shadow-card">
            <div className="mb-4 flex items-center justify-between">
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
              <span className="text-xs font-bold text-green-600 bg-green-100 rounded-full px-2 py-1">
                {stat.change}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Revenue Chart */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-card">
          <h2 className="mb-4 font-bold text-foreground flex items-center gap-2">
            <TrendingUp size={20} />
            Ingresos por Semana
          </h2>
          <div className="h-48 flex items-end gap-2">
            {[65, 78, 82, 71, 85, 88, 92].map((value, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-lg bg-primary hover:bg-primary/80 transition-smooth"
                style={{ height: `${value}%` }}
              />
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground text-center">Lunes - Domingo</p>
        </div>

        {/* Occupancy Chart */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-card">
          <h2 className="mb-4 font-bold text-foreground">Ocupación de Clases</h2>
          <div className="space-y-4">
            {["Yoga Matutino", "HIIT Training", "Spinning"].map((className) => (
              <div key={className}>
                <div className="flex justify-between mb-2">
                  <p className="text-sm text-foreground">{className}</p>
                  <p className="text-sm font-bold text-primary">85%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-[85%] rounded-full bg-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
