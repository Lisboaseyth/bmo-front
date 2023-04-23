import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { TechContext } from "../../../Contexts/TechContext";
import {
  DivBtn,
  FormModalEdit,
  DivHeaderEdit,
  DivItensEdit,
  DivModalInputsEdit,
  ModalBodyEdit,
  BtnModalSubmitEdit,
  BtnModalDelete,
} from "./style";

export const ModalEditShape = () => {
  const {
    closeModalEdit,
    deleteTech,
    techs,
    editTech,
    techEditLoad,
    techDeleteLoad,
    techsTitle
  } = useContext(TechContext);

  const schema = yup.object().shape({
    status: yup.string().required("Nível obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <ModalBodyEdit>
        <FormModalEdit onSubmit={handleSubmit(editTech)}>
          <DivHeaderEdit>
            <h3>Liguagem Detalhes</h3>
            <button onClick={closeModalEdit}>X</button>
          </DivHeaderEdit>

          <DivItensEdit>
            <DivModalInputsEdit>
              <label htmlFor="">Nome do projeto</label>
              <input
                disabled={true}
                value={techsTitle}
              />
              {errors.title && <p>{errors.title?.message}</p>}
            </DivModalInputsEdit>

            <DivModalInputsEdit>
              <label htmlFor="">Status</label>
              <select name="status" id="status" {...register("status")}>
                <option value="">Escolha uma opção</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              {errors.status && <p>{errors.status?.message}</p>}
            </DivModalInputsEdit>

            <DivBtn>
              <BtnModalSubmitEdit disabled={techEditLoad}  type='submit'>
                Salvar alterações
              </BtnModalSubmitEdit>
              <BtnModalDelete
                disabled={techDeleteLoad}
                onClick={() => deleteTech(techs)}
              >
                Excluir
              </BtnModalDelete>
            </DivBtn>
          </DivItensEdit>
        </FormModalEdit>
      </ModalBodyEdit>
    </>
  );
};
