import { createContext, useState } from "react";


export const ModalContext = createContext();

export const ModalProviders = ({children}) => {

    const [modal, setModal] = useState({
        delay: false,
        timeout: false,
        internalError: false,
        openModal: false,
      });


    return(
        <ModalContext.Provider value={{ modal, setModal  }}>
            {children}
        </ModalContext.Provider>
    );
};
