import React, { useContext} from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types'
const init = ()=>{
    return JSON.parse(localStorage.getItem('user')) || {logged:false};
}
export const LoginScreen = ({history}) => {
    
    const {dispatch} = useContext(AuthContext);

    const handleLogin = ()=>{
        //
        
        const lastPath = localStorage.getItem('lastPath') || '/';
        dispatch({
            type:types.login,
            payload:{
                name:'Jose',
                logged: true
            }
        });
        history.replace(lastPath);
    }
    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={
                    handleLogin 
                }
            >
                Login
            </button>
        </div>
    )
}
