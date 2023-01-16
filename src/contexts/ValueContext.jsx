import { createContext, ReactNode, useState } from "react";

export const ValueContext = createContext();

export const ValueProviders = ({children}) => {
    return(
        <ValueContext.Provider value={{}}>
            {children}
        </ValueContext.Provider>
    );
}