import React, {useState} from "react";

const ContextoTema = React.createContext();

const ProveedorTema = ({children}) => {
    const [tema, cambiarTema] = useState(
        {
            alineado: 'left',
            fuente: 20
        }
    );

    const aumentarFuente = () => {
        cambiarTema(
            {
                ...tema,
                fuente: tema.fuente + 1
            }
        );
    }

    const disminuirFuente = () => {
        cambiarTema(
            {
                ...tema,
                fuente: tema.fuente - 1
            }
        );
    }

    const alineadoC = () => {
        cambiarTema(
            {
                ...tema,
                alineado: 'center'
            }
        );
    }

    const alineadoI = () => {
        cambiarTema(
            {
                ...tema,
                alineado: 'left'
            }
        );
    }

    const alineadoD = () => {
        cambiarTema(
            {
                ...tema,
                alineado: 'right'
            }
        );
    }

    return (
        <ContextoTema.Provider value={{tema, aumentarFuente, disminuirFuente, alineadoC, alineadoI, alineadoD}}>
            {children}
        </ContextoTema.Provider>
    );
}
 
export {ContextoTema, ProveedorTema};