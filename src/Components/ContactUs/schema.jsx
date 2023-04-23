import * as yup from 'yup'

export const ContactSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório').min(3, 'Nome precisa de pelo menos 3 caracteres')
    .max(20, 'Nome precisa ser menor que 20 caracteres'),
    sobrenome: yup.string().required('Sobrenome é obrigatório').min(3, 'Nome precisa de pelo menos 3 caracteres')
    .max(20, 'Sobrenome precisa ser menor que 20 caracteres'),
    email: yup.string().required('Email é obrigatório').email('Escrever em formato correto, Ex. example@mail.com'),
    contact: yup.string().required('Alguma forma de contato é requerida'),
    subject: yup.string().required('Assunto é obrigatório').min(3, 'Nome precisa de pelo menos 3 caracteres'),
    messageText: yup.string().required('Escreva algo'),
})