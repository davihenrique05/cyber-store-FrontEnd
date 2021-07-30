import FormInput from "../formInput";
import './form.css';

function FormLogin(props) {
    return(
            <section className="container" >
                <div className="image-container">
                    <img src="/images/CYBERLOGO_2.png" alt="Logo atalho para a home"/>
                </div>
                <div className="login-container">
                    <div className="form">

                        <FormInput 
                            name="user" 
                            labelText="Username" 
                            type="text"
                            required={true}   
                        />

                        <FormInput 
                            name="password" 
                            labelText="Password" 
                            type="password"
                            required={true}   
                        />

                        <div className="submit-container">
                            <input type="submit" name="submit" id="submit" value={props.value} onClick={props.logUser}/>
                        </div>
                    </div>
                </div>
            </section>

    )
}

export default FormLogin;