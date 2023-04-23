import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { BtnModalSubmit, DivHeader, DivModalInputs, FormModal, ModalBody, DivItens } from './style'
import * as yup from 'yup'
import { TechContext } from '../../../Contexts/TechContext';

export const ModalShape = () => {

    const { closeModal, submitTechs, techNewLoad } = useContext(TechContext);

    const schema = yup.object().shape({
        title: yup.string().required("Nome obrigatório"),
        status: yup.string().required("Nível obrigatório"),
      });
    
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });

  return (
    <>
        <ModalBody>
                <FormModal onSubmit={handleSubmit(submitTechs)}>
                    <DivHeader>
                        <h3>Cadastrar linguagem</h3>
                        <button onClick={closeModal}>X</button>
                    </DivHeader>

                    <DivItens>
                        <DivModalInputs>
                            <label htmlFor="">Nome</label>
                            <input
                                type="text"
                                placeholder="Nome da linguagem"
                                {...register("title")}
                            />
                            {errors.title && <p>{errors.title?.message}</p>}
                        </DivModalInputs>

                        <DivModalInputs>
                            <label htmlFor="">Selecionar status</label>
                            <select name="status" id="status" {...register("status")}>
                                <option value="">Escolha uma opção</option>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </select>
                            {errors.status && <p>{errors.status?.message}</p>}
                        </DivModalInputs>
                    <BtnModalSubmit disabled={techNewLoad} type="submit">
                    Cadastrar Linguagem
                    </BtnModalSubmit>
                    </DivItens>

                </FormModal>
        </ModalBody>
    </>
  )
}
