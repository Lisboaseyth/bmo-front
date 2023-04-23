import React, { useContext } from 'react'
import { AuthContext } from '../../../Contexts/AuthContext'

import { ButtonSubmitFormRegister } from './style'


export const ButtonSubmitPageRegister = () => {

  const {disable} = useContext(AuthContext)

  return (
    <ButtonSubmitFormRegister disabled={disable} type='submit'>Cadastrar</ButtonSubmitFormRegister>
  )
}
