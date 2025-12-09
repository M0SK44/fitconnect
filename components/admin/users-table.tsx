"use client"

import { useState } from "react"
import { Edit2, Trash2, Search } from "lucide-react"

const users = [
  {
    id: 1,
    name: "Juan Pérez",
    email: "juan@email.com",
    phone: "+34 123 456 789",
    joinDate: "2024-01-10",
    status: "Activo",
  },
  {
    id: 2,
    name: "María García",
    email: "maria@email.com",
    phone: "+34 234 567 890",
    joinDate: "2024-01-08",
    status: "Activo",
  },
  {
    id: 3,
    name: "Carlos López",
    email: "carlos@email.com",
    phone: "+34 345 678 901",
    joinDate: "2024-01-05",
    status: "Inactivo",
  },
  {
    id: 4,
    name: "Sofia Torres",
    email: "sofia@email.com",
    phone: "+34 456 789 012",
    joinDate: "2024-01-02",
    status: "Activo",
  },
  {
    id: 5,
    name: "Miguel Ángel",
    email: "miguel@email.com",
    phone: "+34 567 890 123",
    joinDate: "2023-12-28",
    status: "Activo",
  },
]

export default function UsersTable() {
  const [sortBy, setSortBy] = useState("name")

  return (
    <div>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Gestión de Usuarios</h1>
          <p className="mt-2 text-muted-foreground">Administra todos los usuarios del sistema</p>
        </div>
        <button className="rounded-lg bg-primary px-6 py-2.5 font-medium text-primary-foreground hover:bg-primary/90 transition-smooth">
          + Nuevo Usuario
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <input
            type="search"
            placeholder="Buscar usuario..."
            className="w-full rounded-lg border border-input bg-background py-2 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-card">
        <table className="w-full">
          <thead className="border-b border-border bg-muted/50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Nombre</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Email</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Teléfono</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Fecha de Registro</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Estado</th>
              <th className="px-6 py-4 text-right text-sm font-bold text-foreground">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-border hover:bg-muted/30 transition-smooth">
                <td className="px-6 py-4 font-medium text-foreground">{user.name}</td>
                <td className="px-6 py-4 text-muted-foreground">{user.email}</td>
                <td className="px-6 py-4 text-muted-foreground">{user.phone}</td>
                <td className="px-6 py-4 text-muted-foreground">{user.joinDate}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                      user.status === "Activo" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="rounded-lg p-2 text-muted-foreground hover:bg-muted transition-smooth">
                      <Edit2 size={18} />
                    </button>
                    <button className="rounded-lg p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-smooth">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
