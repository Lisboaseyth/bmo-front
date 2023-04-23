import React from 'react'
import { DivPageLanding, MainPage } from './style'
import { HeaderPage } from '../../Components/Header'
import Model from '../../Assets/model.png'
import { ContactUs } from '../../Components/ContactUs'

export const LandingPage = () => {
  return (
    <DivPageLanding>
        <HeaderPage />
        <MainPage>
                <img className='imgModel' src={Model} alt="modelo bmo" />
                <h1>
                    O melhor da <strong>tecnologia</strong> para sua empresa
                </h1>
        </MainPage>
        <ContactUs idCustom="contact" />
        <footer>Developed by BMO Softwares - @bmo - (88) 99349-8506</footer>
    </DivPageLanding>
  )
}
