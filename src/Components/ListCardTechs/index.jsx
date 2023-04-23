import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import { TechContext } from '../../Contexts/TechContext'
import { CardTechs } from '../CardTechs'
import { UlList } from './style'

export const ListCardTechs = () => {

    const {user} = useContext(AuthContext)
    const { OpenModalEdit } = useContext(TechContext)

  return (
    <>
    <UlList>
        {
            user.techs.map((item, index) => (
               <CardTechs key={index} nameStatus={item.status} nameTitle={item.title} techs={() => OpenModalEdit(item)} id={item.id}/>
            ))
        }
    </UlList>
    </>
  )
}
