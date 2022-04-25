import { useContext } from "react"

export const AuthContext = useContext();
export const AuthContextProvider = ()=>{

    const [isAuth,setIsAuth] = (false);

    return (
        <AuthContext.Provider>
        
    </AuthContext.Provider>
    )

}