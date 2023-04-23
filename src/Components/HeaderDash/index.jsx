import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { HeaderDashPage } from './style'
import imgLogo from '../../Assets/RGB_logo_white_blue.png'

export const HeaderDash = () => {

    const navigate = useNavigate()

    const btnExit = () => {
        toast.success('Logout realizado com sucesso')
        navigate('/login')
        localStorage.clear()
    }

  return (
    <HeaderDashPage>
        <img className='logoBmo' src={imgLogo} alt="logo" />
        <button onClick={btnExit} className='btnLogout'>Sair</button>
    </HeaderDashPage>
  )
}
