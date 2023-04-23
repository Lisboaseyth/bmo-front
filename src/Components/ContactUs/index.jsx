import React from 'react'
import { FormContact, SectionContact } from './style'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ContactSchema } from './schema';
import emailJs from '@emailjs/browser'
import { toast } from 'react-toastify';

export const ContactUs = ({ idCustom }) => {

    const {register, handleSubmit, formState: { errors }, reset} = useForm({
        resolver: yupResolver(ContactSchema)
    })

    const sendEmail = (data) => {
        const templateParams = {
             name: data.name,
             sobrenome: data.sobrenome,
             email: data.email,
             contact: data.contact,
             subject: data.subject,
             messageText: data.messageText

        }

        try {
            emailJs.send('service_sxvnjn7', 'template_hpuqrqw', templateParams, 'XoR3FOmHF7UwrBgZC');
            reset();
            toast.success('Email enviado');
        } catch (error) {
            toast.error('Ops, algo deu errado!');
            console.error(error);
        }

    }

  return (
    <SectionContact id={idCustom}>
        <h1>
            Fale com <strong>a gente!</strong>
        </h1>
        <FormContact onSubmit={handleSubmit(sendEmail)}>
            <div className="inputContent">
                <div className='divInput'>
                    <input type="text"  placeholder="Name" {...register('name')}/>
                    {errors.name && <p className='pError'>{errors.name.message}</p>}
                </div>
                <div className='divInput'>
                    <input type="text"  placeholder="Sobrenome" {...register('sobrenome')}/>
                    {errors.sobrenome && <p className='pError'>{errors.sobrenome.message}</p>}
                </div>
                <div className='divInputContact'>
                    <div className='subDivs'>
                        <input type="email" className='inputEmail'  placeholder="Email" {...register('email')}/>
                        {errors.email && <p className='pError'>{errors.email.message}</p>}
                    </div>
                    <div className='subDivs'>
                        <input placeholder='Contact' {...register('contact')}/>
                        {errors.contact && <p className='pError'>{errors.contact.message}</p>}
                    </div>
                </div>
                <div className='divInput'>
                    <input type="text"  placeholder="Assunto" {...register('subject')}/>
                    {errors.subject && <p className='pError'>{errors.subject.message}</p>}
                </div>
                <div className='divInput'>
                    <textarea type="text"  placeholder="Mensagem" {...register('messageText')}/>
                    {errors.messageText && <p className='pError'>{errors.messageText.message}</p>}
                </div>
            </div>
            <button type='submit' className='btnSubmit'>
                Enviar
            </button>
        </FormContact>
    </SectionContact>
  )
}
