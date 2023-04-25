import { useContext } from "react"
import { AuthContext } from "../context/auth"
import { IAuthContext } from "../context/types"

export const useAuth = ():IAuthContext=> {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error("Não existe contexto de autenticação")
    }

    return context
}