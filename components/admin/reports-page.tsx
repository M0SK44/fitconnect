"use client"

import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react"

export default function ReportsPage() {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold text-foreground">Reportes y Análisis</h1>
      <p className="mb-8 text-muted-foreground">Visualiza estadísticas y reportes detallados</p>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="rounded-lg border border-border bg-card p-6 shadow-card">
          <div className="mb-4 flex items-center justify-between">
            <Users className="h-8 w-8 text-blue-500" />
            <span className="text-xs font-bold text-green-600 bg-green-100 rounded-full px-2 py-1">+15%</span>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Asistencia Promedio</p>
          <p className="text-2xl font-bold text-foreground">456 personas/mes</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-card">
          <div className="mb-4 flex items-center justify-between">
            <DollarSign className="h-8 w-8 text-green-500" />
            <span className="text-xs font-bold text-green-600 bg-green-100 rounded-full px-2 py-1">+23%</span>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Ingresos Totales</p>
          <p className="text-2xl font-bold text-foreground">$48,320</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-card">
          <div className="mb-4 flex items-center justify-between">
            <TrendingUp className="h-8 w-8 text-purple-500" />
            <span className="text-xs font-bold text-green-600 bg-green-100 rounded-full px-2 py-1">+8%</span>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Tasa de Ocupación</p>
          <p className="text-2xl font-bold text-foreground">87.5%</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-card">
          <div className="mb-4 flex items-center justify-between">
            <BarChart3 className="h-8 w-8 text-amber-500" />
            <span className="text-xs font-bold text-green-600 bg-green-100 rounded-full px-2 py-1">+5%</span>
          </div>
          <p className="text-sm text-muted-foreground mb-1">Clases Impartidas</p>
          <p className="text-2xl font-bold text-foreground">156</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Attendance Chart */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-card">
          <h2 className="mb-4 font-bold text-foreground">Asistencia por Clase</h2>
          <div className="space-y-4">
            {[
              { name: "Yoga Matutino", attendance: 85, max: 100 },
              { name: "HIIT Training", attendance: 92, max: 100 },
              { name: "Pilates", attendance: 78, max: 100 },
              { name: "Spinning", attendance: 95, max: 100 },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex justify-between mb-2">
                  <p className="text-sm text-foreground">{item.name}</p>
                  <p className="text-sm font-bold text-primary">{item.attendance}%</p>
                </div>
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${item.attendance}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Distribution */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-card">
          <h2 className="mb-4 font-bold text-foreground">Distribución de Ingresos</h2>
          <div className="space-y-4">
            {[
              { category: "Membresías", amount: "$28,500", percentage: 59 },
              { category: "Clases Puntuales", amount: "$12,300", percentage: 25 },
              { category: "Servicios Adicionales", amount: "$7,520", percentage: 16 },
            ].map((item) => (
              <div key={item.category}>
                <div className="flex justify-between mb-2">
                  <p className="text-sm text-foreground">{item.category}</p>
                  <p className="text-sm font-bold text-primary">{item.amount}</p>
                </div>
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monthly Overview */}
      <div className="mt-8 rounded-lg border border-border bg-card p-6 shadow-card">
        <h2 className="mb-6 font-bold text-foreground">Resumen Mensual</h2>
        <div className="h-64 flex items-end gap-2">
          {[
            { month: "Ene", revenue: 4200 },
            { month: "Feb", revenue: 4800 },
            { month: "Mar", revenue: 5200 },
            { month: "Abr", revenue: 4900 },
            { month: "May", revenue: 6100 },
            { month: "Jun", revenue: 6500 },
            { month: "Jul", revenue: 7100 },
            { month: "Ago", revenue: 6800 },
            { month: "Sep", revenue: 7300 },
            { month: "Oct", revenue: 8100 },
            { month: "Nov", revenue: 8400 },
            { month: "Dic", revenue: 8920 },
          ].map((item, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              <div
                className="w-full rounded-t-lg bg-gradient-to-t from-primary to-primary/70 hover:from-primary/90 hover:to-primary/80 transition-smooth"
                style={{ height: `${(item.revenue / 10000) * 100}%` }}
              />
              <p className="mt-2 text-xs font-medium text-muted-foreground">{item.month}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
