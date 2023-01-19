import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { ModalContext} from "./ModalContext";

export const ValueContext = createContext();

export const ValueProviders = ({children}) => {

    const [antecipation, setAntecipation] = useState({});
    const { modal, setModal } = useContext(ModalContext);

    const calculateAnticipation = async (data) => {

        if (modal.delay) {
            setModal({ delay: true, openModal: true })
            await api
              .post('?delay=4000', data)
              .then(res => {
                setModal({ delay: false })
                setAntecipation(res.data)
              })
              .catch(err => console.log(err))
          }
      
          if (modal.timeout) {
            setModal({ timeout: true, openModal: true })
            await api
              .post('?timeout', data)
              .then(res => {
                setModal({ timeout: false })
              })
              .catch(err => console.log(err))
          }
          if (modal.internalError) {
            setModal({ internalError: true, openModal: true })
            await api
              .post('?internalError', data)
              .then(res => {
                setModal({ internalError: false })
              })
              .catch(err => console.log(err))
          } else {
            await api
              .post('', data)
              .then(res => {
                setAntecipation(res.data)
                toast.success("Simulação concluída!")
              })
              .catch(err => console.log(err))
          }
    }

    return(
        <ValueContext.Provider value={{ antecipation, calculateAnticipation }}>
            {children}
        </ValueContext.Provider>
    );
}