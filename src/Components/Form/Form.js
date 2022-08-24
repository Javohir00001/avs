import { useState } from "react"
import Button from "../../UI/Button/Button"

import "./Form.css"

export default function From(props) {
    const [checkName, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    
    const [checkEmail, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    
    const [check, setCheck] = useState(false);
    const [checkboxError, setCheckboxError] = useState(false);
 
    
    const nameChangeHandler = (event) => {
        setName(event.target.value)
        setNameError(false)
    }
    
    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
        setEmailError(false)
    }

    const checkboxChangeHandler = () => {
        setCheck(!check);
        setCheckboxError(false);
    }

    const formSubmit = (event) => {
        event.preventDefault();

        if (checkName === '') {
            setNameError(true)
        }
        if (checkEmail === '' || checkEmail.includes('@') === false) {
            setEmailError(true)
        }
        if (check === false) {
            setCheckboxError(true)
        }
        if ((nameError === false && checkName) && (emailError === false && checkEmail && checkEmail.includes('@')) && (checkboxError === false && check)) {
            props.userAdded(true);
        }

    }
    

    return (
        <div className="userInput">
            <h1 className="right__title right__title--mobile">
                AVS Video ReMaker <span className="mark">Giveaway</span>
            </h1>

            <div className="left__header">
                <h1>Get started for free!</h1>
                <p>Please, fill in the form and get a free license key for your PC</p>
            </div>
            <form onSubmit={formSubmit}>
                <div className="input__folder">
                    <label htmlFor="user_name">Name</label>
                    <input className={`${nameError ? 'input input__error' : 'input'}`} id="user_name" type="text" name="user_name" onChange={nameChangeHandler}/>
                    <span className="error__alert" style={{display: `${nameError ? 'block' : 'none'}`}}>Please enter your name</span>
                </div>
                
                <div className="input__folder">
                    <label htmlFor="user_eamil">Email address</label>
                    <input className={`${emailError ? 'input input__error' : 'input'}`} id="user_eamil" type="text" name="user_name" onChange={emailChangeHandler}/>
                    <span className="error__alert" style={{display: `${emailError ? 'block' : 'none'}`}}>Please enter a valid email address</span>
                </div>

                <div className="input__folder">
                    <label className="check__label">
                        <input className="visually-hidden" type="checkbox" onClick={checkboxChangeHandler}/>
                        <span></span>
                        <div>
                            By providing my personal data I agree to be informed about AVS4YOU software deals via email.
                            <span className="error__alert" style={{display: `${checkboxError ? 'block' : 'none'}`, border: 'none'}}>Please enter a valid email address</span>
                        </div>
                    </label>
                </div>

                <Button type="submit" style={{background: `${check ? '#FE9235' : '#FFAB62'}`}}>Get Free License</Button>
            </form>
        </div>
    )
}