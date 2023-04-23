import React, { useContext } from "react";
import {
  DivAlignHeader,
  DivFlex,
  DivP,
} from "./style";
import { TechContext } from "../../Contexts/TechContext";
import { ModalShape } from "../Modals/ModalCreateTech";
import { ListCardTechs } from "../ListCardTechs";
import { AuthContext } from "../../Contexts/AuthContext";
import { ModalEditShape } from "../Modals/ModalEditTech"

export const TechsContent = () => {
  const { modalIsOpen, OpenModal, modalEditIsOpen} = useContext(TechContext);
  const {user} = useContext(AuthContext)

  return (
  <>
    {
      modalIsOpen ? 
        <ModalShape />
       : modalEditIsOpen ? <ModalEditShape /> : 
      <DivFlex>
        <DivAlignHeader>
          <h3>Linguagens</h3>
          <button onClick={OpenModal}>+</button>
        </DivAlignHeader>
        {
          user.techs.length === 0 ? (
        <DivP>
          <p className="pLength">
            Atualmente você não tem nenhuma linguagem adicionada :(
          </p>
        </DivP>
          ) : (
            <ListCardTechs />
          ) 
        }
      </DivFlex>
    }
  </>
  );
};
