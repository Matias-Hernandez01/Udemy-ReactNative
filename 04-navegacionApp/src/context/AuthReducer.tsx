import { AuthState } from "./AuthContext";

type authAction = {
  type: 'signIn'
}



export const authReducer = (state: AuthState, action: authAction) :AuthState  =>{
  
  switch (action.type) {
    case "signIn":
      return{
        ...state,
        isLoggedIn: true,
        userName:"Not-username-set" 
      }
  
    default:
      return state;
  }


}