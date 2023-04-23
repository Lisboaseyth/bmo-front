import React, { useContext } from 'react'
import { AuthContext } from '../../../Contexts/AuthContext'

import { ButtonSubmitForm } from './style'


export const ButtonSubmitPageLogin = ({children}) => {

  const {disable} = useContext(AuthContext)

  return (
    <ButtonSubmitForm type='submit' disabled={disable}>{children}</ButtonSubmitForm>
  )
}
