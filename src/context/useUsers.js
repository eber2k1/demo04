//Importar useState y useEffect
import { useState, useEffect } from 'react';
//Importar getUsers
import { getUsers } from '../services/apiUsers';
//Exportar useUsers
export const useUsers = () => {
    //Estado de los usuarios
  const [users, setUsers] = useState([]);
  //Estado de la carga
  const [loading, setLoading] = useState(true);
  //Estado del error
  const [error, setError] = useState(null);

  //Funcion para obtener los usuarios
  useEffect(() => {
    //Funcion para obtener los usuarios
    const fethUsers = async () => {
        try{
            //Cargando
            setLoading(true);
            //Obtener los datos de los usuarios
            const data = await getUsers();
            //Setear los datos de los usuarios
            setUsers(data);
            //Cargando
            setLoading(false);
            //Error
            setError(null);
        } catch (error) {
            //Error
            setError(error.message);}
        };
        //Llama a la funcion
        fethUsers();
    }, []);
    //Retorna los datos de los usuarios
    return {users, loading, error};
};