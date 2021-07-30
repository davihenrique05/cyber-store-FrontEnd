import FormLogin from "../../components/formLogin";
import './login.css';

function LoginPage(props){

    return(

            <article className="main-container">
                <section>
                    <img src="./images/neuromancer-reference.jpg" alt="Imagem ilustrativa" />
                </section>
                <FormLogin value={'LOGIN'} logUser={props.login}/>
            </article>
    )
}

export default LoginPage;