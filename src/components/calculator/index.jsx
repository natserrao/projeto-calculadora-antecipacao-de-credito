import { SectionStyled, DivForm, DivResults } from "./style";
import { formSchema } from "../../validators/addValue";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";


export const Calculator = () => {

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(formSchema),
    });

    return(
        <SectionStyled className="container">
            <DivForm className="div-form">
                <h2>Simule a sua antecipação</h2>

                <form onSubmit={handleSubmit()}>
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

            <DivResults className="div-results">
                <h3>Você receberá</h3>
                <ul>
                    <li>Amanhã: R$</li>
                    <li>Em 15 dias: R$</li>
                    <li>Em 30 dias: R$</li>
                    <li>Em 90 dias: R$</li>
                </ul>
            </DivResults>

        </SectionStyled>
    );
}