import './standart.css';
import LoginPage from "./pages/login/login";
import { useState } from 'react';
import logar from "./apis/logUser";
import App from './App';

function Authenticate(){
    const token = sessionStorage.getItem('cyber/token');

    const [logged, setLogged] = useState(token? true :false);
    
    const loginUser = async () =>{
        const user = document.querySelector('#user').value;
        const pass = document.querySelector('#password').value;
        
        const resp = await logar(user,pass);
        setLogged(resp);
        console.log(logged);
    }
    

    return(
        <div className="main-container">      
            {!logged && <LoginPage login={loginUser} />}
            {logged && <App />}
        </div>
    )
}

export default Authenticate;