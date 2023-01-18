import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

export const ValueContext = createContext();

export const ValueProviders = ({children}) => {

    const [antecipation, setAntecipation] = useState({});

    const calculateAnticipation = async (data) => {
            await api.post("", data).then((res) =>{
                setAntecipation(res.data)
                toast.success("Simulação concluída!")
            }).catch(err => console.log(err))
    }

    return(
        <ValueContext.Provider value={{ antecipation, calculateAnticipation }}>
            {children}
        </ValueContext.Provider>
    );
}