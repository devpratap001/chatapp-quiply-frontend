import { Link, useNavigate} from "react-router-dom";
import "./components.css";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export default function Registration({ type, submitFunction }) {
    var registerForm= useRef(null);
    var loginForm= useRef(null);
    var warning= useRef(null);
    const Navigate= useNavigate()
    const warningMessage= useSelector(state => {
        const returnData= type ==="registration"? state.register : state.login ;
        return returnData
    })
    const loading= useSelector(state => {
        return state.loading.isLoading
    })

    useEffect(() => {
        if (warningMessage.error === true){
            warning.current.style.visibility= "visible";
            const errorKey= warningMessage.errorkey? warningMessage.errorkey: "" ;
            warning.current.innerHTML= errorKey + " " + warningMessage.message;
        }else {
            warning.current.style.visibility= "hidden";
        }
    })

    async function handleRegistrationSubmit () {
        const formdata= new FormData(registerForm.current);
        const data= new URLSearchParams(formdata)
        const userProfile= await submitFunction(data);
        if (userProfile.isVerified === false){
            Navigate("/login")
            alert("Verification link has been sent to your email.");
        }
    }

    async function handleLoginSubmit () {
        const formdata= new FormData(loginForm.current);
        const data= new URLSearchParams(formdata)
        const userProfile= await submitFunction(data);
        if (userProfile.error === false){
            Navigate("/chatapp")
        }
    }

    return <>
        <div className="dialog">
            <div className="regForm">
                <div ref={warning} className="warning">
                </div>
                {type === "registration" && <form ref={registerForm} onSubmit={function (e){
                        e.preventDefault()
                        handleRegistrationSubmit()
                        }} className="registration">
                    <span>please provide a unique username</span>
                    <input type="text" className="field" name="userName" required placeholder="Username" />
                    <input type="email" className="field" name="email" required placeholder="Email" />
                    <input type="password" className="field" name="password" required placeholder="Password" />
                    <input type="submit" className="submit" value={loading ? "loading...": "Register"} />
                </form>
                }
                {type === "login" && <form ref={loginForm} onSubmit={function (e){
                        e.preventDefault()
                        handleLoginSubmit()
                        }}  className="loggingIn">
                    <input type="email" className="field" name="email" required placeholder="Email" />
                    <input type="password" className="field" name="password" required placeholder="Password" />
                    <input type="submit" className="submit" value={loading ? "loading...": "Login"} />
                </form>
                }
            </div>
            <div className="image">
                <img src={type === "registration" ? "./images/registration.png" : "./images/login.png"} alt={type} width="450px" />
                <p>{type === "registration" ? "Already" : "Don't"} have an account? <Link to={type === "registration"?"/login":"/register"}>Sign {type === "registration" ? "in" : "up"}</Link></p>
            </div>
        </div>
    </>
}