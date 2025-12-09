"use client"

import type React from "react"

import { useState } from "react"
import { CreditCard, Lock } from "lucide-react"

export default function CheckoutPage() {
  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target

    // Format card number
    if (name === "number") {
      value = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
    }

    // Format expiry date
    if (name === "expiry") {
      value = value.replace(/\D/g, "")
      if (value.length >= 2) {
        value = value.slice(0, 2) + "/" + value.slice(2, 4)
      }
    }

    // Limit CVC to 3 digits
    if (name === "cvc") {
      value = value.slice(0, 3)
    }

    setCardData({
      ...cardData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setTimeout(() => {
      alert("¡Pago procesado exitosamente!")
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
      {/* Order Summary */}
      <div className="md:col-span-1">
        <div className="rounded-lg border border-border bg-card p-6 shadow-card sticky top-4">
          <h2 className="mb-4 text-lg font-bold text-foreground">Resumen del Pedido</h2>

          <div className="space-y-4 border-b border-border pb-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="h-16 w-16 rounded-lg bg-muted" />
              <div>
                <p className="font-medium text-foreground">Yoga Matutino</p>
                <p className="text-sm text-muted-foreground">07:00 - 08:00</p>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-4">
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
          </div>

          <div className="border-t border-border pt-4">
            <div className="flex justify-between">
              <span className="font-bold text-foreground">Total</span>
              <span className="text-2xl font-bold text-primary">$17.49</span>
            </div>
          </div>

          <button className="mt-6 w-full rounded-lg bg-primary px-4 py-3 font-bold text-primary-foreground hover:bg-primary/90 transition-smooth">
            Confirmar Pago
          </button>
        </div>
      </div>

      {/* Payment Form */}
      <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
        {/* Security Alert */}
        <div className="flex gap-3 rounded-lg border border-border bg-card p-4">
          <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">Pago 100% Seguro</p>
            <p className="text-xs text-muted-foreground mt-1">
              Tu información de pago se procesa de forma segura con encriptación SSL
            </p>
          </div>
        </div>

        {/* Card Information */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-card">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
            <CreditCard size={24} />
            Información de la Tarjeta
          </h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-2">Nombre del Titular</label>
            <input
              type="text"
              name="name"
              value={cardData.name}
              onChange={handleCardChange}
              placeholder="Juan Pérez García"
              className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-2">Número de Tarjeta</label>
            <input
              type="text"
              name="number"
              value={cardData.number}
              onChange={handleCardChange}
              placeholder="4242 4242 4242 4242"
              maxLength={19}
              className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth font-mono"
              required
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Fecha de Vencimiento</label>
              <input
                type="text"
                name="expiry"
                value={cardData.expiry}
                onChange={handleCardChange}
                placeholder="MM/YY"
                maxLength={5}
                className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth font-mono"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">CVC</label>
              <input
                type="text"
                name="cvc"
                value={cardData.cvc}
                onChange={handleCardChange}
                placeholder="123"
                maxLength={3}
                className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth font-mono"
                required
              />
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-card">
          <h2 className="mb-4 text-lg font-bold text-foreground">Dirección de Facturación</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-2">Dirección</label>
            <input
              type="text"
              placeholder="Calle Principal 123"
              className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Ciudad</label>
              <input
                type="text"
                placeholder="Madrid"
                className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Provincia</label>
              <input
                type="text"
                placeholder="Madrid"
                className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Código Postal</label>
              <input
                type="text"
                placeholder="28001"
                className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
              />
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="flex gap-3 rounded-lg border border-border bg-muted/50 p-4">
          <input type="checkbox" className="mt-1" required />
          <label className="text-sm text-muted-foreground">Acepto los términos y condiciones de pago</label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isProcessing}
          className="w-full rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-smooth"
        >
          {isProcessing ? "Procesando..." : "Completar Pago - $17.49"}
        </button>
      </form>
    </div>
  )
}
