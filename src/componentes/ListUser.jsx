import { useUser } from "../hooks/useUser";

export const ListUser = () => {
    const { user, loading, error } = useUser();
    
    if (loading) {
        return <p className="p-4 text-gray-500">Cargando...</p>;
    }

    if (error) {
        return <p className="p-4 text-red-500">Error: {error}</p>;
    }

    if (!user) {
        return (
            <div className="p-4 text-center text-gray-500 border border-gray-200 rounded-lg">
                <p>Selecciona un usuario para ver sus detalles</p>
            </div>
        );
    }

    return (
        <div className="font-mono border border-gray-200 rounded-lg p-4">
            <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
            <ul className="space-y-2">
                <li><span className="font-semibold">Correo:</span> {user.email}</li>
                <li><span className="font-semibold">Teléfono:</span> {user.phone}</li>
                <li>
                    <h2 className="text-lg font-bold mt-3 mb-1">Dirección</h2>
                    <ul className="pl-4 space-y-1">
                        <li><span className="font-semibold">Calle:</span> {user.address.street}</li>
                        <li><span className="font-semibold">Suite:</span> {user.address.suite}</li>
                        <li><span className="font-semibold">Ciudad:</span> {user.address.city}</li>
                        <li><span className="font-semibold">Código Postal:</span> {user.address.zipcode}</li>
                        <li>
                            <h3 className="font-semibold mt-2">Ubicación</h3>
                            <ul className="pl-4">
                                <li><span className="font-semibold">Latitud:</span> {user.address.geo.lat}</li>
                                <li><span className="font-semibold">Longitud:</span> {user.address.geo.lng}</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2 className="text-lg font-bold mt-3 mb-1">Empresa</h2>
                    <ul className="pl-4 space-y-1">
                        <li><span className="font-semibold">Nombre:</span> {user.company.name}</li>
                        <li><span className="font-semibold">Eslogan:</span> {user.company.catchPhrase}</li>
                        <li><span className="font-semibold">Negocio:</span> {user.company.bs}</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};