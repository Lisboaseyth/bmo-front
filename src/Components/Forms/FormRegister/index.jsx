import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContext';
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DivHeader, FormStyled } from './style';
import { ButtonSubmitPageRegister } from '../../Buttons/ButtonSubmitRegister';
import imgLogo from '../../../Assets/RGB_logo_white_blue.png'

export const RegisterForm = () => {

    const {registerUser, disable} = useContext(AuthContext)

    const navigate = useNavigate();
  
    const returnPage = () => {
      navigate(-1);
    };
  
    const formSchema = yup.object().shape({
      name: yup
        .string()
        .required("Nome obrigatório")
        .min(3, "Nome precisar ter no mínimo 3 letras")
        .max(20, "Nome máximo de 20 letras"),
      email: yup.string().required("Email obrigatório").email("Email inválido"),
      password: yup
        .string()
        .required("Senha obrigatório")
        .min(8, " Senha precisa ter no mínimo 8 caractéres")
        .matches(/(?=.*?[A-Z])/, "Sua senha precisa uma letra maiúscula"),
      repeatPass: yup
        .string()
        .required("Confirmar senha é obrigatório")
        .min(8, " Senha precisa ter no mínimo 8 caractéres")
        .matches(/(?=.*?[A-Z])/, "Sua senha precisa uma letra maiúscula")
        .oneOf([yup.ref("password")], "As senhas não são iguais"),
      bio: yup
        .string()
        .required("Fale pelo menos um pouco")
        .min(5, "bio precisar ter no mínimo 5 caractéres")
        .max(20, "Biografia máximo 20 caracteres"),
      contact: yup.string().required("Contato obrigatório"),
      selectForm: yup.string().required("Selecione o seu módulo"),
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(formSchema),
      mode: "onChange",
    });

  return (
    <>
    <DivHeader>
        <img className='logoBmo' src={imgLogo} alt="logo" />
        <button onClick={returnPage} className="btnReturn">
          Voltar
        </button>
    </DivHeader>
      <FormStyled onSubmit={handleSubmit(registerUser)}>
        <div className="divAlignText">
          <h2>Crie sua conta</h2>
          <span>Rápido e grátis, vamos nessa!</span>
        </div>

        <div className="divAlignInputs">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          {errors.name && <p>{errors.name?.message}</p>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          {errors.email && <p>{errors.email?.message}</p>}

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          {errors.password && <p>{errors.password?.message}</p>}

          <label htmlFor="repeatPass">Confirmar Senha</label>
          <input
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("repeatPass")}
          />
          {errors.repeatPass && <p>{errors.repeatPass?.message}</p>}

          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          {errors.bio && <p>{errors.bio?.message}</p>}

          <label htmlFor="contact">Contato</label>
          <input
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          {errors.contact && <p>{errors.contact?.message}</p>}

          <label htmlFor="selectForm">Selecionar módulo</label>
          <select name="course_module" id="" {...register("selectForm")}>
            <option value="">Selecione o módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
          {errors.selectForm && <p>{errors.selectForm?.message}</p>}
        </div>

        <ButtonSubmitPageRegister type="submit" disabled={disable}>
          Cadastrar
        </ButtonSubmitPageRegister>
      </FormStyled>
    </>
  )
}
