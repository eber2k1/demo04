import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const useUser = () => {
    //Desestructurar el contexto
    const context = useContext(UserContext);
    //Validar si el contexto existe
    if (!context) {
        throw new Error('useUser debe ser usado dentro de un UserProvider');
    }
    //Retorna el contexto
    return context;
};