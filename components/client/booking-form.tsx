"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, User, Mail, Phone } from "lucide-react"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    className: "Yoga Matutino",
    date: "2024-01-15",
    time: "07:00",
    name: "Juan Pérez",
    email: "juan@example.com",
    phone: "+34 123 456 789",
    notes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Formulario de reserva completado. Procede al pago.")
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-2 text-3xl font-bold text-foreground">Formulario de Reserva</h1>
      <p className="mb-8 text-muted-foreground">Completa los detalles de tu reserva</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-lg border border-border bg-card p-6 shadow-card">
          {/* Class Selection */}
          <h2 className="mb-4 font-bold text-foreground">Información de la Clase</h2>
          <div className="mb-4 grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Clase</label>
              <select
                name="className"
                value={formData.className}
                onChange={handleChange}
                className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
              >
                <option>Yoga Matutino</option>
                <option>HIIT Training</option>
                <option>Pilates</option>
                <option>Spinning</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Fecha</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-2">Hora</label>
            <div className="relative">
              <Clock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                required
              />
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-card">
          <h2 className="mb-4 font-bold text-foreground">Tu Información</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-2">Nombre Completo</label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                required
              />
            </div>
          </div>

          <div className="mb-4 grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Correo Electrónico</label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Teléfono</label>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Notas Especiales (Opcional)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Cuéntanos si tienes alguna lesión o necesidad especial..."
              className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth h-24 resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-primary/90 transition-smooth"
        >
          Ir al Pago
        </button>
      </form>
    </div>
  )
}
