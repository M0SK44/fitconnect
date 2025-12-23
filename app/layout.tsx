import type React from "react"
import type { Metadata } from "next"

// Tipografia global en Poppins para todo el proyecto.
import { Poppins } from "next/font/google"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
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
    <html lang="es" className={poppins.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
