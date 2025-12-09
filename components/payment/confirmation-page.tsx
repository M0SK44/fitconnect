"use client"

import { CheckCircle, Download, Mail, Calendar } from "lucide-react"

export default function ConfirmationPage() {
  return (
    <div className="mx-auto max-w-2xl">
      {/* Success Message */}
      <div className="mb-8 rounded-lg border border-border bg-card p-8 shadow-card text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-green-100 p-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
        </div>
        <h1 className="mb-2 text-3xl font-bold text-foreground">¡Pago Confirmado!</h1>
        <p className="text-muted-foreground">Tu reserva ha sido procesada exitosamente</p>
      </div>

      {/* Order Details */}
      <div className="rounded-lg border border-border bg-card p-6 shadow-card mb-6">
        <h2 className="mb-4 font-bold text-foreground">Detalles de tu Reserva</h2>

        <div className="space-y-4 border-b border-border pb-4 mb-4">
          {/* Class Info */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Clase Reservada</p>
              <p className="font-bold text-foreground">Yoga Matutino</p>
            </div>
            <span className="text-2xl font-bold text-primary">$15.00</span>
          </div>

          {/* Details Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Fecha</p>
                <p className="font-medium text-foreground">15 de Enero, 2024</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Hora</p>
              <p className="font-medium text-foreground">07:00 - 08:00</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Instructor</p>
              <p className="font-medium text-foreground">María García</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Número de Reserva</p>
              <p className="font-medium text-foreground">#RES-2024-001234</p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Clase</span>
            <span className="text-foreground font-medium">$15.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Impuestos</span>
            <span className="text-foreground font-medium">$1.50</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tarifa de servicio</span>
            <span className="text-foreground font-medium">$0.99</span>
          </div>
          <div className="border-t border-border pt-3 flex justify-between">
            <span className="font-bold text-foreground">Total</span>
            <span className="text-xl font-bold text-primary">$17.49</span>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="rounded-lg border border-border bg-muted/50 p-6 mb-6">
        <h2 className="mb-4 font-bold text-foreground">Próximos Pasos</h2>
        <ol className="space-y-3">
          <li className="flex gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              1
            </span>
            <span className="text-sm text-foreground pt-0.5">Recibirás un correo de confirmación en tu email</span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              2
            </span>
            <span className="text-sm text-foreground pt-0.5">Llega 10 minutos antes a la clase</span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              3
            </span>
            <span className="text-sm text-foreground pt-0.5">Presenta el número de reserva en recepción</span>
          </li>
        </ol>
      </div>

      {/* Actions */}
      <div className="grid gap-4 md:grid-cols-2 mb-6">
        <button className="flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-6 py-3 font-medium text-foreground hover:bg-muted transition-smooth">
          <Mail size={20} />
          Reenviar Confirmación
        </button>
        <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-smooth">
          <Download size={20} />
          Descargar Recibo
        </button>
      </div>

      {/* Back to Dashboard */}
      <button className="w-full rounded-lg border border-border bg-card px-6 py-3 font-medium text-foreground hover:bg-muted transition-smooth">
        Volver al Dashboard
      </button>
    </div>
  )
}
