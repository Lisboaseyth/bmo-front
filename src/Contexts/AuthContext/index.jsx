import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../Services";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const [disable, setDisable] = useState(false)
    const [userName, setUserName] = useState([])
    const [userCourse, setUserCourse] = useState([])

    async function loadingUser () {
      const getToken = localStorage.getItem('@bmo:token')

      if(!getToken){
        setLoading(false)
        return
      }

      try {
        const { data } = await api.get('/profile', {
          headers: {
            authorization: `Bearer ${getToken}`
          }
        })
        setUserName(data.name)
        setUserCourse(data.course_module)
        setUser(data)
        navigate(`dashboard/${data.name}`)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    useEffect(() => {

      loadingUser()

    },)


   async function login (data) {
     setDisable(true)
    try {
        const response = await api.post('/sessions', {...data})

        const nameUser = response.data.user.name
        const courseUser = response.data.user.course_module

        const {token, user: userResponse} = response.data

        localStorage.setItem('@bmo:token', token)
        setUser(userResponse)

        setUserName(nameUser)
        setUserCourse(courseUser)
        setUser(response.data.user)       

        toast.success(`Seja bem vindo ${response.data.user.name}`)
        navigate(`/dashboard/${response.data.user.name}`)

    } catch (error) {
      setDisable(false)
        if(error.response.status === 401){
            toast.error('Email ou senha incorretos')
        } else{
            toast.error('Ops, algo deu errado!')
        }
    } finally{
      setDisable(false)
    }
    
    }

    async function registerUser(data) {
      setDisable(true)
            
    const dataBase = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.selectForm,
    };
        try {
          const resp = await api.post("/users", dataBase);
          if (resp.status === 201) {
            toast.success("Usuário registrado com sucesso");
            setTimeout(() => {
              navigate("/");
            }, 3000);
          }
        } catch (error) {
          setDisable(false)
          console.log(error);
          if (error) {
            toast.error("Email já foi cadastrado");
          }
        } finally{
          setDisable(false)
        }
      }



    return(
    <AuthContext.Provider value={{login, registerUser, user, setUser, userName, userCourse, disable, loading, loadingUser}}>
        {children}
    </AuthContext.Provider>
    )
}