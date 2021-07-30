import './standart.css';
import LoginPage from "./pages/login/login";
import { useEffect, useState } from 'react';
import { logar, validateToken } from "./apis/logUser";
import App from './App';

function Authenticate() {
    const [logged, setLogged] = useState(false);
    const [tokenValidated, setTokenValidated] = useState(false);

    const loginUser = async () => {
        const user = document.querySelector('#user').value;
        const pass = document.querySelector('#password').value;

        const resp = await logar(user, pass);

        setTokenValidated(true);
        setLogged(resp);
    }

    useEffect(() => {
        const validate = async () => {
            const token = sessionStorage.getItem('cyber/token');

            if (token) {
                const isValid = await validateToken(token);
                setTokenValidated(isValid);
                setLogged(isValid);
            }
        }
        validate()
    }, [logged]);

    return (
        <div className="main-container">
            {!logged && <LoginPage login={loginUser} />}
            {logged && tokenValidated && <App />}
        </div>
    )
}

export default Authenticate;