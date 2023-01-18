import * as yup from "yup";

export const formSchema = yup.object().shape({
    amount: yup.number().typeError("Amount é obrigatório").required("Amount is required").min(1000, "Valor mínimo é 1000"),
    installments: yup.number().typeError("Installments é obrigatório").integer().max(12, "Máximo de 12 parcelas").required("Installments is required"),
    mdr: yup.number().typeError("MDR é obrigatório").integer().positive().required("MDR is required"),
    days: yup.array(),

})  