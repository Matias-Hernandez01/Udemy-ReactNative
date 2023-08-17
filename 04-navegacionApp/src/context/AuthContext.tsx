import React, { createContext, useReducer } from "react"
import { authReducer } from "./AuthReducer";

//Definir cómo luce o que información tendré aquí.


export interface AuthState{
  isLoggedIn:boolean,
  userName?: string,
  favoriteIcon?: string,
}

//Estado inicial  => como quiero que sea cuando la app se lanza.

export const authInitialState: AuthState = {
  isLoggedIn: false,
} 

//Lo usaremos para decirle a React cómo luce y qué expone el context
export interface AuthContextProps{
  authState: AuthState,
  signIn: ()=> void,
}

//Crear el contexto

export const AuthContext = createContext({} as AuthContextProps)

//Componente proveedor del estado

export const AuthProvider = ({children}: any)=>{

  const [authState, dispatch] = useReducer(authReducer, authInitialState);  

  const signIn = ()=>{
    dispatch({type: "signIn"})
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}