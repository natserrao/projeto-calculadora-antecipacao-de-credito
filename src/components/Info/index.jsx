import { useContext } from "react";
import { ValueContext } from "../../contexts/ValueContext";
import { DivResults } from "./style";

export const Info = () =>{
    let period; 

    const { antecipation } = useContext(ValueContext);

    if(antecipation){
        period = Object.entries(antecipation)
    }
    return (
    <DivResults>
        <h3>Você receberá</h3>
    <>
      {
      antecipation ? (
        period.map((item, index) =>
          item[0] == 1 ? (
            <p key={index}>Amanhã: <strong> R${item[1].toFixed(2)} </strong></p>
          ) : (
            <p key={index}> Em {item[0]}dias: <strong> R${item[1].toFixed(2)}</strong></p>
          )
        )
      ) : (
        <>
          <p>Amanhã: <strong>$ 0,00</strong></p>
          <p>Em 15 dias:<strong>$ 0,00</strong></p>
          <p>Em 30 dias:<strong>$ 0,00</strong></p>
          <p>Em 90 dias:<strong>$ 0,00</strong>
          </p>
        </>
      )}
    </>
    </DivResults>
    )
}