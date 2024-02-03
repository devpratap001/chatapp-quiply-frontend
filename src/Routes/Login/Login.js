import Registration from "../../Components/registration";
import { useDispatch } from "react-redux";
import {setIsLoading} from "../../Redux/Slices/loadingSlice";
import {setIsError} from "../../Redux/Slices/errorSlice";
import {setLoginData} from "../../Redux/Slices/loginSlice";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login () {
    const dispatch= useDispatch()
    const navigate= useNavigate();

    useLayoutEffect(()=> {
        async function isAuthenticated () {
            try {
                const response= await fetch("http://localhost:5000/chatapp/checkAuthenticated", {mode: "cors", credentials: "include"})
                const authResponse= await response.json();
                if (! authResponse.error){
                    navigate("/chatapp")
                }
            } catch (error) {
                console.error(error)
            }
        }
        isAuthenticated();
    })

    async function handleLogin (data) {
        try {
            dispatch(setIsLoading());
            const response= await fetch ("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Access-Control-Allow-Credentials":true
                },
                body: data,
                credentials: "include"
            });
            const loginResponse= await response.json();
            if (loginResponse.error) {
                dispatch(setIsLoading());
                dispatch(setIsError())
                dispatch(setLoginData(loginResponse));
                return loginResponse
            } else {
                dispatch(setIsLoading())
                dispatch(setLoginData(loginResponse))
                return loginResponse
            }
        } catch (error) {
            console.error(error)
        }
    }

    return <div className="login">
        <Registration type="login" submitFunction={handleLogin} />
    </div>
}