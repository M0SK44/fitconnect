"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Lock, User, Phone, UserPlus } from "lucide-react"

export default function RegisterPage({ onSwitch }: { onSwitch: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden")
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert("Registro exitoso")
      onSwitch()
    }, 1500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-muted p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-accent p-3">
            <UserPlus className="h-6 w-6 text-accent-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">FitConnect</h1>
          <p className="mt-2 text-muted-foreground">Crea tu cuenta</p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-6 shadow-card">
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-foreground mb-2">Nombre Completo</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-foreground mb-2">Correo Electrónico</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                  required
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-foreground mb-2">Teléfono</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+34 123 456 789"
                  className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-foreground mb-2">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                  required
                />
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Confirmar Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-accent px-4 py-2.5 font-medium text-accent-foreground hover:bg-accent/90 disabled:opacity-50 transition-smooth flex items-center justify-center gap-2"
            >
              {isLoading ? "Registrando..." : "Crear Cuenta"}
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          ¿Ya tienes cuenta?{" "}
          <button onClick={onSwitch} className="text-primary hover:text-primary/80 font-medium transition-smooth">
            Inicia sesión
          </button>
        </p>
      </div>
    </div>
  )
}
