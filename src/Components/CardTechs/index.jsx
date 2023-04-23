import React from 'react'
import { LiCard } from './style'

export const CardTechs = ({nameTitle, nameStatus, techs}) => {

  return (
      <LiCard onClick={techs}>
        <h2>{nameTitle}</h2>
        <p>{nameStatus}</p>
      </LiCard>
  )
}
