import { createContext , useState } from "react";

export const AuthContext = createContext()


export function AuthContextProvider({children}){

    const [user, setUser] = useState({})
    const [imageLogo, setImageLogo] = useState('')

    return (
        <AuthContext.Provider value={{user, setUser, imageLogo ,setImageLogo }}>
            {children}
        </AuthContext.Provider>
    )
}