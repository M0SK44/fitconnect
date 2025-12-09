"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Lock, LogIn, Calendar } from "lucide-react"

export default function LoginPage({ onSwitch, onBooking }: { onSwitch: () => void; onBooking?: () => void }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert("Inicio de sesión exitoso")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-muted p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary p-3">
            <LogIn className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">FitConnect</h1>
          <p className="mt-2 text-muted-foreground">Accede a tu cuenta</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="rounded-lg border border-border bg-card p-6 shadow-card">
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-foreground mb-2">Correo Electrónico</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                  required
                />
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="mb-6 flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="rounded border-input" />
                <span className="ml-2 text-muted-foreground">Recuérdame</span>
              </label>
              <a href="#" className="text-primary hover:text-primary/80 transition-smooth">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-primary px-4 py-2.5 font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-smooth flex items-center justify-center gap-2"
            >
              {isLoading ? "Iniciando..." : "Iniciar Sesión"}
            </button>
          </div>
        </form>

        {onBooking && (
          <div className="mt-6 border-t border-border pt-6">
            <p className="mb-4 text-center text-sm text-muted-foreground">¿Quieres ver una clase disponible?</p>
            <button
              onClick={onBooking}
              className="w-full rounded-lg border-2 border-secondary bg-transparent px-4 py-2.5 font-medium text-secondary hover:bg-secondary/10 transition-smooth flex items-center justify-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Ver Formulario de Reserva
            </button>
          </div>
        )}

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          ¿No tienes cuenta?{" "}
          <button onClick={onSwitch} className="text-primary hover:text-primary/80 font-medium transition-smooth">
            Regístrate aquí
          </button>
        </p>
      </div>
    </div>
  )
}
