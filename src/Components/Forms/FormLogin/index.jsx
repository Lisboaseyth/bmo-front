import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContentAll, LoginForm } from './style';
import { ButtonSubmitPageLogin } from '../../Buttons/ButtonSubmitLogin';
import { AuthContext } from '../../../Contexts/AuthContext';

export const FormLogin = () => {

    const navigate = useNavigate();

    const navigateLogin = () => {
      navigate("/register");
    };

    const {login} = useContext(AuthContext)
  
    const schema = yup.object().shape({
      email: yup.string().required("Email obrigatório").email("Email inválido"),
      password: yup.string().required("Senha obrigatório"),
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });

  return (
  <ContentAll>
    <LoginForm onSubmit={handleSubmit(login)}>
    <h2>Login</h2>

    <div className="divAlignInputs">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Insira seu email"
        {...register("email")}
      />
      {errors.email && <p>{errors.email?.message}</p>}

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        placeholder="Insira sua senha"
        {...register("password")}
      />
      {errors.password && <p>{errors.password?.message}</p>}
    </div>

    <ButtonSubmitPageLogin type="submit" >Entrar</ButtonSubmitPageLogin>

  </LoginForm>
    <p className="pText">Ainda não possui uma conta?</p>
    <button onClick={navigateLogin} className="btnRegister">
      Cadastre-se
    </button>

  </ContentAll>
  )
}
