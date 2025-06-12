// pages/Home.jsx
import { UserProvider } from "../context/UserProvider"
import { ListUsers } from "../componentes/ListUsers"
import { ListUser } from "../componentes/ListUser"

export function Home() {
  return (
    <UserProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Lista de Usuarios</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ListUsers />
          </div>
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold mb-4">Detalles del Usuario</h2>
            <ListUser />
          </div>
        </div>
      </div>
    </UserProvider>
  )
}