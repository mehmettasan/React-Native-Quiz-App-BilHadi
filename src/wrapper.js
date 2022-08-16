import React from 'react';
import Router from './Router';
import { UserProvider } from './context/userContext';

const Wrapper=()=>{
    return(
        <UserProvider>
            <Router />
        </UserProvider>
    )
}

export default Wrapper;