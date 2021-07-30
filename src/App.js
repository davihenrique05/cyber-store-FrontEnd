import './standart.css';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import LoginPage from "./pages/login/login";
import { useState } from 'react';
import logar from "./apis/logUser";
import Home from './pages/home';
import Hero from './components/hero';

function App(){
    const [logged, setLogged] = useState(false);

    const loginUser = async () =>{
        const user = document.querySelector('#user').value;
        const pass = document.querySelector('#password').value;
        
        const resp = await logar(user,pass);
        setLogged(resp);
        console.log(logged);
    }

    return(
        <div className="main-container">
            
            <Router>
                {logged && <Redirect to="/index" />}
                {!logged && <Redirect to="/login" />}

                <Route path="/login">
                    <LoginPage login={loginUser}/>
                </Route>
                <Route path="/index" component={Home}>
                    <Hero/>
                </Route>
            </Router>
        </div>
    )
}

export default App;