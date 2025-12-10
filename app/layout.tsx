import type React from "react"
import type { Metadata } from "next"

// Cambiamos las fuentes porque Geist y Geist_Mono NO existen en Next 14
import { Inter, Roboto_Mono } from "next/font/google"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Fuentes reemplazadas por alternativas compatibles
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "FitConnect - Reserva tus Clases de Gimnasio",
  description: "Sistema profesional de reservas y pagos para gimnasios",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
