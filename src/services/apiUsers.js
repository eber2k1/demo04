const API_URL = 'https://jsonplaceholder.typicode.com/';

//Obtener los datos de los usuarios
export const getUsers = async ()  => {
    try{
        //Obtener los datos de los usuarios
        const response = await fetch(`${API_URL}users`);
        //Validar la respuesta
        if (!response.ok) {
            //Lanza un error con el mensaje de la respuesta
            throw new Error(`Error HTTP: ${response.status}`);
        }
        //Obtener los datos de los usuarios en formato json
        const data = await response.json();
        //Retorna los datos de los usuarios
        return data;
    } catch (error) {
        //Lanza un error con el mensaje de la respuesta
        console.log('Error en Obtener los datos de los usuarios',error);
        throw error;
    }
};

// Obtener los datos de un usuario
export const getUser = async (id) => {
    try {
        // Obtener los datos de un usuario
        const response = await fetch(`${API_URL}users/${id}`);
        // Validar la respuesta
        if (!response.ok) {
            // Lanza un error con el mensaje de la respuesta
            throw new Error(`Error HTTP: ${response.status}`);
        }
        // Obtener los datos de un usuario en formato json
        const data = await response.json();
        // Retornar los datos de un usuario
        return data;
    } catch (error) {
        // Lanza un error con el mensaje de la respuesta
        console.log('Error en Obtener los datos de un usuario', error);
        throw error;
    }
};
