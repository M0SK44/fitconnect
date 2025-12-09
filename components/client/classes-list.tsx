"use client"

import { useState } from "react"
import { Clock, Users, BookOpen } from "lucide-react"

const classes = [
  {
    id: 1,
    name: "Yoga Matutino",
    instructor: "María García",
    time: "07:00 - 08:00",
    day: "Lunes a Viernes",
    capacity: 20,
    available: 5,
    price: "$15",
    image: "/yoga-class.jpg",
  },
  {
    id: 2,
    name: "HIIT Training",
    instructor: "Carlos Ruiz",
    time: "17:00 - 18:00",
    day: "Martes y Jueves",
    capacity: 25,
    available: 12,
    price: "$18",
    image: "/hiit-training.jpg",
  },
  {
    id: 3,
    name: "Pilates",
    instructor: "Laura Martínez",
    time: "18:30 - 19:30",
    day: "Lunes a Viernes",
    capacity: 15,
    available: 3,
    price: "$16",
    image: "/pilates-woman-mat.png",
  },
  {
    id: 4,
    name: "Spinning",
    instructor: "Juan López",
    time: "19:00 - 20:00",
    day: "Miércoles y Viernes",
    capacity: 30,
    available: 8,
    price: "$17",
    image: "/spinning-class.jpg",
  },
  {
    id: 5,
    name: "Zumba",
    instructor: "Sofia Torres",
    time: "20:00 - 21:00",
    day: "Lunes, Miércoles",
    capacity: 35,
    available: 0,
    price: "$15",
    image: "/zumba-dance.jpg",
  },
  {
    id: 6,
    name: "Box Fitness",
    instructor: "Miguel Ángel",
    time: "16:00 - 17:00",
    day: "Martes y Viernes",
    capacity: 20,
    available: 7,
    price: "$20",
    image: "/boxing-fitness.jpg",
  },
]

export default function ClassesList() {
  const [selectedClass, setSelectedClass] = useState<(typeof classes)[0] | null>(null)
  const [showBookingModal, setShowBookingModal] = useState(false)

  return (
    <div>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Clases Disponibles</h1>
          <p className="mt-2 text-muted-foreground">Selecciona una clase y reserva tu lugar</p>
        </div>
        <div className="flex gap-2">
          <input
            type="search"
            placeholder="Buscar clase..."
            className="rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Classes Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((fitnessClass) => (
          <div
            key={fitnessClass.id}
            className="overflow-hidden rounded-lg border border-border bg-card shadow-card hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-smooth"
          >
            {/* Image */}
            <div className="relative h-40 bg-muted overflow-hidden">
              <img
                src={fitnessClass.image || "/placeholder.svg"}
                alt={fitnessClass.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-foreground">{fitnessClass.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">Con {fitnessClass.instructor}</p>

              {/* Details */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={16} />
                  <span>{fitnessClass.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen size={16} />
                  <span>{fitnessClass.day}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users size={16} />
                    <span>
                      {fitnessClass.available}/{fitnessClass.capacity} disponibles
                    </span>
                  </div>
                  <span className="font-bold text-primary">{fitnessClass.price}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 h-2 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full ${fitnessClass.available === 0 ? "bg-destructive" : "bg-accent"}`}
                  style={{
                    width: `${((fitnessClass.capacity - fitnessClass.available) / fitnessClass.capacity) * 100}%`,
                  }}
                />
              </div>

              {/* Button */}
              <button
                onClick={() => {
                  setSelectedClass(fitnessClass)
                  setShowBookingModal(true)
                }}
                disabled={fitnessClass.available === 0}
                className={`mt-4 w-full rounded-lg px-4 py-2.5 font-medium transition-smooth ${
                  fitnessClass.available === 0
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {fitnessClass.available === 0 ? "Clase Llena" : "Reservar"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedClass && (
        <BookingModal fitnessClass={selectedClass} onClose={() => setShowBookingModal(false)} />
      )}
    </div>
  )
}

function BookingModal({
  fitnessClass,
  onClose,
}: {
  fitnessClass: (typeof classes)[0]
  onClose: () => void
}) {
  const [isConfirming, setIsConfirming] = useState(false)

  const handleConfirm = () => {
    setIsConfirming(true)
    setTimeout(() => {
      alert("¡Reserva confirmada! Ve a la página de pagos para completar.")
      onClose()
    }, 1000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-lg bg-card shadow-card p-6 border border-border">
        <h2 className="text-xl font-bold text-foreground">Confirmar Reserva</h2>
        <p className="mt-2 text-muted-foreground">Estás a punto de reservar la clase:</p>

        <div className="mt-6 space-y-3 rounded-lg bg-muted/50 p-4">
          <div>
            <p className="text-sm text-muted-foreground">Clase</p>
            <p className="font-bold text-foreground">{fitnessClass.name}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Instructor</p>
            <p className="font-bold text-foreground">{fitnessClass.instructor}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Hora</p>
            <p className="font-bold text-foreground">{fitnessClass.time}</p>
          </div>
          <div className="border-t border-border pt-3">
            <p className="text-sm text-muted-foreground">Precio</p>
            <p className="text-2xl font-bold text-primary">{fitnessClass.price}</p>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 font-medium text-foreground hover:bg-muted transition-smooth"
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirm}
            disabled={isConfirming}
            className="flex-1 rounded-lg bg-primary px-4 py-2.5 font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-smooth"
          >
            {isConfirming ? "Reservando..." : "Confirmar"}
          </button>
        </div>
      </div>
    </div>
  )
}
