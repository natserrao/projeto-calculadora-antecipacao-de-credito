import React, { useContext} from "react";
import { useForm } from "react-hook-form";
import { ValueContext } from "../../contexts/ValueContext";
import { formSchema } from "../../validators/addValue";
import {yupResolver} from "@hookform/resolvers/yup";
import { DivForm } from "./style";


export const Form = () => {

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(formSchema),
    });
    const { calculateAnticipation } = useContext(ValueContext);

    return(
        <DivForm className="div-form">
                <h2>Simule a sua antecipação</h2>

                <form onSubmit={handleSubmit(calculateAnticipation)}>
                    <label htmlFor="" >Informe o valor da renda *</label>
                    <input placeholder="Digite aqui..." type="number" {...register("amount")} />
                    {errors.amount ? ( <span className="error">{errors.amount.message}</span>) : null}


                    <label htmlFor="">Em quantas parcelas *</label>
                    <input placeholder="Digite aqui..." type="number" {...register("installments")} />
                    {errors.installments ? ( <span className="error">{errors.installments.message}</span>) : null}

                    <label htmlFor="" >Informe o percentual de MDR *</label>
                    <input placeholder="Digite aqui..." type="number" {...register("mdr") } />
                    {errors.mdr ? ( <span className="error">{errors.mdr.message}</span>) : null}

                    <label htmlFor="" >Informe o período</label>
                    <input {...register("days")} defaultValue={"[1,15,30,90]"} placeholder="[1, 15, 30, 90]"  />

                    <button type="submit">Calcular</button>

                </form>
                <div className="div-botoes">
                    <button  id="botao-timeout">Timeout</button>
                    <button  id="botao-delay">Delay</button>
                    <button  id="botao-internal">Internal</button>
                </div>

            </DivForm>
    );
}