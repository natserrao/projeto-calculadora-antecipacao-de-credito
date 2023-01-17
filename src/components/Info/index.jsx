import { useContext } from "react";
import { ValueContext } from "../../contexts/ValueContext";
import { DivResults } from "./style";

export const Info = () =>{
    const antecipation = useContext(ValueContext);
    return (
        <DivResults>
            <h3>Você receberá</h3>
            <p>Amanhã:<span>R$ {antecipation.antecipation[1]}</span></p>
            <p>Em 15 dias: <span>R$ {antecipation.antecipation[15]}</span></p>
            <p>Em 30 dias: <span>R$ {antecipation.antecipation[30]}</span></p>
            <p>Em 90 dias: <span>R$ {antecipation.antecipation[90]}</span></p>

        </DivResults>
    )
}