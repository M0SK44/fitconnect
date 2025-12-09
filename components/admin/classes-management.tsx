"use client"

import { useState } from "react"
import { Plus, Edit2, Trash2, Search } from "lucide-react"

const classes = [
  {
    id: 1,
    name: "Yoga Matutino",
    instructor: "María García",
    time: "07:00 - 08:00",
    capacity: 20,
    enrolled: 15,
    status: "Activa",
  },
  {
    id: 2,
    name: "HIIT Training",
    instructor: "Carlos Ruiz",
    time: "17:00 - 18:00",
    capacity: 25,
    enrolled: 23,
    status: "Activa",
  },
  {
    id: 3,
    name: "Pilates",
    instructor: "Laura Martínez",
    time: "18:30 - 19:30",
    capacity: 15,
    enrolled: 12,
    status: "Activa",
  },
  {
    id: 4,
    name: "Spinning",
    instructor: "Juan López",
    time: "19:00 - 20:00",
    capacity: 30,
    enrolled: 28,
    status: "Activa",
  },
  {
    id: 5,
    name: "Zumba",
    instructor: "Sofia Torres",
    time: "20:00 - 21:00",
    capacity: 35,
    enrolled: 35,
    status: "Llena",
  },
]

export default function ClassesManagement() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestión de Clases</h1>
          <p className="mt-2 text-muted-foreground">Administra las clases disponibles</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 font-medium text-primary-foreground hover:bg-primary/90 transition-smooth"
        >
          <Plus size={20} />
          Nueva Clase
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <input
            type="search"
            placeholder="Buscar clase..."
            className="w-full rounded-lg border border-input bg-background py-2 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
          />
        </div>
      </div>

      {/* Classes Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((fitnessClass) => (
          <div key={fitnessClass.id} className="rounded-lg border border-border bg-card p-6 shadow-card">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="font-bold text-foreground">{fitnessClass.name}</h3>
                <p className="text-sm text-muted-foreground">Con {fitnessClass.instructor}</p>
              </div>
              <span
                className={`inline-flex rounded-full px-2 py-1 text-xs font-bold ${
                  fitnessClass.status === "Llena" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                }`}
              >
                {fitnessClass.status}
              </span>
            </div>

            <div className="space-y-3 mb-4 text-sm">
              <div>
                <p className="text-muted-foreground">Hora</p>
                <p className="font-medium text-foreground">{fitnessClass.time}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Capacidad</p>
                <p className="font-medium text-foreground">
                  {fitnessClass.enrolled}/{fitnessClass.capacity} inscritos
                </p>
              </div>
            </div>

            <div className="h-2 w-full rounded-full bg-muted overflow-hidden mb-4">
              <div
                className="h-full bg-primary"
                style={{
                  width: `${(fitnessClass.enrolled / fitnessClass.capacity) * 100}%`,
                }}
              />
            </div>

            <div className="flex gap-2">
              <button className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-muted transition-smooth flex items-center justify-center gap-2">
                <Edit2 size={16} />
                Editar
              </button>
              <button className="flex-1 rounded-lg bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/20 transition-smooth flex items-center justify-center gap-2">
                <Trash2 size={16} />
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Class Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-lg bg-card shadow-card p-6 border border-border">
            <h2 className="mb-4 text-xl font-bold text-foreground">Crear Nueva Clase</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
                <input
                  type="text"
                  placeholder="Nombre de la clase"
                  className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Instructor</label>
                <input
                  type="text"
                  placeholder="Nombre del instructor"
                  className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Hora Inicio</label>
                  <input
                    type="time"
                    className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Capacidad</label>
                  <input
                    type="number"
                    placeholder="20"
                    className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 rounded-lg border border-input bg-background px-4 py-2 font-medium text-foreground hover:bg-muted transition-smooth"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/90 transition-smooth"
                >
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
