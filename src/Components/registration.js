import { Link } from "react-router-dom";
import "./components.css";

export default function Registration({ type }) {
    return <>
        <div className="dialog">
            <div className="regForm">
                <div className="warning">
                    this is a warning message
                </div>
                {type === "registration" && <form className="registration">
                    <span>please provide a unique username</span>
                    <input type="text" className="field" name="userName" required placeholder="Username" />
                    <input type="email" className="field" name="email" required placeholder="Email" />
                    <input type="password" className="field" name="password" required placeholder="Password" />
                    <input type="password" className="field" name="confPassword" required placeholder="Confirm Password" />
                    <input type="submit" className="submit" value="Register" />
                </form>
                }
                {type === "login" && <form className="loggingIn">
                    <input type="email" className="field" name="email" required placeholder="Email" />
                    <input type="password" className="field" name="password" required placeholder="Password" />
                    <input type="submit" className="submit" value="Login" />
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