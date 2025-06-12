//Importar useState y useEffect
import { useState, useEffect } from 'react';
//Importar UserContext
import { UserContext } from './UserContext';
//Importar getUser
import { getUser } from '../services/apiUsers';

export const UserProvider = ({ children }) => {
    //Estado del usuario seleccionado
    const [selectedUserId, setSelectedUserId] = useState(null);
    //Estado del usuario
    const [user, setUser] = useState(null);
    //Estado de la carga
    const [loading, setLoading] = useState(false);
    //Estado del error
    const [error, setError] = useState(null);

    // Función para seleccionar un usuario
    const selectUser = (userId) => {
        setSelectedUserId(userId);
    };

    // Efecto para cargar los datos del usuario cuando cambia el ID seleccionado
    useEffect(() => {
        const fetchUser = async () => {
            //Validar si hay un ID seleccionado
            if (!selectedUserId) {
                // si no hay un ID seleccionado, se limpia el usuario
                setUser(null);
                return;
            }
            
            //Funcion para obtener los datos del usuario
            try {
                //Cargando
                setLoading(true);
                //Obtener los datos del usuario
                const data = await getUser(selectedUserId);
                //Setear los datos del usuario
                setUser(data);
                //Error
                setError(null);
            } catch (error) {
                //Error
                setError(error.message);
                setUser(null);
            } finally {
                //Cargando
                setLoading(false);
            }
        };
        //Llama a la funcion
        fetchUser();
    }, 
    //Dependencia para que se ejecute cuando cambie el ID seleccionado
    [selectedUserId]);

    return (
        //Retorna el contexto con los datos del usuario
        <UserContext.Provider value={{ user, loading, error, selectUser }}>
            {children}
        </UserContext.Provider>
    );
};