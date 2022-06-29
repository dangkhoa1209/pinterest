import React from "react";
import {auth} from "../../../firebase/firebase";
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext();

const AuthProvider = ({children}) =>{ 
    const navigate = useNavigate();

    const [user, setUser] = React.useState({});

    React.useEffect(() => {
        const unsubscibed = auth.onAuthStateChanged((user) => {
            if(!user){
                
                navigate("/login");
            }else{
                console.log("user: ", user);
                //Kiểm tra new user thì thêm vào database
                // if(user.a)

                const {displayName, email, uid, photoURL} = user;
                    setUser({
                    displayName, email, uid, photoURL
                })
            }
        })

        return () => {
            unsubscibed();
        }
    }, [navigate]);
    
    return (
        <>
            <AuthContext.Provider value={{user}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthProvider;