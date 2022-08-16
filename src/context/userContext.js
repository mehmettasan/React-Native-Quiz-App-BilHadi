import React, { createContext, useEffect, useState } from 'react';
import auth from "@react-native-firebase/auth"
import { firebase } from '@react-native-firebase/database';

const UserContext = createContext({})

const UserProvider=({children})=>{
    const [user,setUser]=useState(null)
    const reference = firebase.app().database("https://bilhadi-ccccd-default-rtdb.europe-west1.firebasedatabase.app/")

    

    useEffect(()=>{
        const currentuser=auth().currentUser
        setUser(currentuser)
    },[])

    return(
        <UserContext.Provider value={{user,setUser,reference}}>
            {children}
        </UserContext.Provider>
    )

}

export {UserContext,UserProvider}