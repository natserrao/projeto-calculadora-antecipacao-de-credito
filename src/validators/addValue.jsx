import * as yup from "yup";

export const formSchema = yup.object().shape({
    amount: yup.number().typeError("Amount é obrigatório com apenas números").required("Amount is required"),
    installments: yup.number().typeError("Installments é obrigatório com apenas números").integer().max(12).required("Installments is required"),
    mdr: yup.number().typeError("MDR é obrigatório com apenas números").integer().positive().required("MDR is required"),
    days: yup.array().min(1).nullable().optional()
})  