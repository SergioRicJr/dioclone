import { createContext, useState } from "react";
import { IAuthContext, IAuthContextProviderProps, ILoginData } from "./types";
import { IUser } from "../types/user";
import { useNavigate } from "react-router";
import { api } from "../services/api";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthContextProvider = ({children}: IAuthContextProviderProps)=> {
    const [user, setUser] = useState<IUser>({} as IUser)

    const navigate = useNavigate()
    
    const handleLogin = async (loginData: ILoginData)=> {
        try {
            const {data} = await api.get(`users?email=${loginData.email}&password=${loginData.password}`)
            if (data.length ===1) {
              console.log("encotrado")
              setUser(data[0])
              console.log(data)
              console.log(data[0])
              navigate("/feed")
            } else {
              console.log("Email ou senha inválidos")
            }
            console.log(loginData)
          } catch(error) {
            console.log(error)
            alert("Houve um erro, tente novamente")
           }
    }

    const handleSignOut = ()=> {
        setUser({} as IUser)
    }

    return (
        <AuthContext.Provider value={{user, handleLogin, handleSignOut}}>
            {children}
        </AuthContext.Provider>
    )
    
}