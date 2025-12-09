import Sidebar from "@/components/layout/sidebar"

export default function ClientDashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isAdmin={false} currentPage="/client/dashboard" />

      <main className="flex-1 lg:ml-64">
        <div className="p-4 md:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Bienvenido, Juan</h1>
            <p className="mt-2 text-muted-foreground">Visualiza tus reservas y próximas clases</p>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="rounded-lg border border-border bg-card p-6 shadow-card">
              <p className="text-sm text-muted-foreground mb-2">Reservas Activas</p>
              <p className="text-3xl font-bold text-foreground">4</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-card">
              <p className="text-sm text-muted-foreground mb-2">Próxima Clase</p>
              <p className="text-lg font-bold text-foreground">Yoga Matutino</p>
              <p className="text-sm text-muted-foreground">Mañana 07:00</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-card">
              <p className="text-sm text-muted-foreground mb-2">Saldo</p>
              <p className="text-2xl font-bold text-primary">$45.50</p>
            </div>
          </div>

          {/* Upcoming Classes */}
          <div className="rounded-lg border border-border bg-card p-6 shadow-card">
            <h2 className="mb-4 text-lg font-bold text-foreground">Próximas Clases</h2>
            <div className="space-y-3">
              {["Yoga Matutino", "Pilates", "Spinning"].map((cls) => (
                <div key={cls} className="flex items-center justify-between rounded-lg bg-muted/50 p-4">
                  <div>
                    <p className="font-medium text-foreground">{cls}</p>
                    <p className="text-sm text-muted-foreground">Esta semana</p>
                  </div>
                  <button className="text-primary hover:text-primary/80">Ver detalles →</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
