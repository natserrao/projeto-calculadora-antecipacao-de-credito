import { SectionStyled, DivForm} from "./style";
import { formSchema } from "../../validators/addValue";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import { useContext } from "react";
import { ValueContext } from "../../contexts/ValueContext";
import { Info } from "../Info";


export const Calculator = () => {

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(formSchema),
    });

    const {calculateAnticipation} = useContext(ValueContext);

    return(
        <SectionStyled className="container">
            <DivForm className="div-form">
                <h2>Simule a sua antecipação</h2>

                <form onSubmit={handleSubmit(calculateAnticipation)}>
                    <label htmlFor="">Informe o valor da renda *</label>
                    <input type="text" {...register("amount")} />
                    {errors.amount ? ( <span className="error">{errors.amount.message}</span>) : null}


                    <label htmlFor="">Em quantas parcelas *</label>
                    <input type="text" {...register("installments")} />
                    {errors.installments ? ( <span className="error">{errors.installments.message}</span>) : null}

                    <label htmlFor="">Informe o percentual de MDR *</label>
                    <input type="text" {...register("mdr")} />
                    {errors.mdr ? ( <span className="error">{errors.mdr.message}</span>) : null}

                    <button>Calcular</button>
                </form>
            </DivForm>
            <Info/>
        </SectionStyled>
    );
}