import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services";
import { AuthContext } from "../AuthContext";

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {

  
  const {user, setUser, loadingUser} = useContext(AuthContext)
  
  const [techs, setTechs] = useState(null)

  const [techsTitle, setTechsTitle] = useState(null)

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [modalEditIsOpen, setModalEditIsOpen] = useState(false)

  const [techNewLoad, setTechNewLoad] = useState(false)

  const [techEditLoad, setTechEditLoad] = useState(false)

  const [techDeleteLoad, setTechDeleteLoad] = useState(false)

      const OpenModal = async () => {
        setModalIsOpen(true)
      }
  
      const closeModal = async () => {
        setModalIsOpen(false)
      }

      const OpenModalEdit = async (item) => {
        setTechs(item.id)
        setTechsTitle(item.title)
        setModalEditIsOpen(true)
      }
  
      const closeModalEdit = async () => {
        setModalEditIsOpen(false)
      }

      async function submitTechs (data) {

          const dataBase = {
            'status': data.status,
            'title': data.title
          }

          const token = localStorage.getItem('@bmo:token')
          try {
            setTechNewLoad(true)
           const response = await api.post("/users/techs", dataBase, {
              headers:{
                Authorization: `Bearer ${token}`
              }
            })
                const newListTech = [...user.techs, response.data]
                const newDataUser = {...user, techs: newListTech}

                setUser(newDataUser)
                toast.success('Tecnologia adicionada')
                setModalIsOpen(false)
            } catch (errors) {
                console.error(errors)
                toast.error('Ops, algo deu errado! :(')
            } finally {
              setTechNewLoad(false)
            }
        }

        async function editTech (data) {
          const token = localStorage.getItem("@bmo:token");

          try {
            setTechEditLoad(true)
            await api.put(`users/techs/${techs}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

              toast.success("Tech atualizada com sucesso!");
              await loadingUser()
              setTechs(null);
              setModalEditIsOpen(false)
            } catch (error) {
              toast.error('Ops algo deu errado');
              console.log(techs)
          } finally {
            setTechEditLoad(false)
          }
        }

        async function deleteTech(id){
            const token= localStorage.getItem("@bmo:token")
            try {
              setTechDeleteLoad(true)
              await api.delete(`/users/techs/${id}`, {
                headers:{
                  Authorization: `Bearer ${token}`
                }
              })
              const newTechList = user.techs.filter((item) => item.id !== id)
              const newDataUser = {...user, techs: newTechList}
              setUser(newDataUser)
              closeModalEdit()
              toast.success("Tecnologia removida com sucesso")
              } catch (error) {
                setTechDeleteLoad(false)
                toast.error("Ops, algo deu errado. :(")
                console.error(error)
              } finally {
                setTechDeleteLoad(false)
            }
        }

    return(
        <TechContext.Provider value={{techs, setTechs, modalIsOpen, setModalIsOpen, OpenModal, closeModal, submitTechs, deleteTech, modalEditIsOpen, setModalEditIsOpen, closeModalEdit, OpenModalEdit, editTech, techEditLoad, techNewLoad, setTechNewLoad, setTechEditLoad, techDeleteLoad, setTechDeleteLoad, techsTitle}}>
            {children}
        </TechContext.Provider>
    )
}