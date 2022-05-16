import React from "react";

const ContextoTema = React.createContext();

const ProveedorTema = ({children}) => {
    return (
        <ContextoTema.Provider value={ {nombre: 'Carlos'}}>
            {children}
        </ContextoTema.Provider>
    );
}
 
export {ContextoTema, ProveedorTema};