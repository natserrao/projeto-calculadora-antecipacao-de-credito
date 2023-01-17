import { createContext, useState } from "react";
import api from "../services/api";

export const ValueContext = createContext();

export const ValueProviders = ({children}) => {

    const [antecipation, setAntecipation] = useState({});

    const calculateAnticipation = (data) => {
        api.post("", data).then((resp) => {
            setAntecipation(resp.data);

        }).catch(err => console.log(err))
    }

    return(
        <ValueContext.Provider value={{antecipation, calculateAnticipation}}>
            {children}
        </ValueContext.Provider>
    );
}