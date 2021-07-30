import './input.css'
function FormInput(props){

    return(
        <>
            <div className="input-container">
                <label htmlFor={props.name}> {props.labelText} </label>
                <input type={props.type} name={props.name} id={props.name} required={props.required}/>
            </div>
        </>
    )
}

export default FormInput;