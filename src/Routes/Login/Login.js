import Registration from "../../Components/registration";
import { useDispatch } from "react-redux";
import {setIsLoading} from "../../Redux/Slices/loadingSlice";
import {setIsError} from "../../Redux/Slices/errorSlice";
import {setLoginData} from "../../Redux/Slices/loginSlice";

export default function Login () {
    const dispatch= useDispatch()

    async function handleLogin (data) {
        try {
            dispatch(setIsLoading());
            const response= await fetch ("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: data
            });
            const loginResponse= await response.json();
            console.log(loginResponse)
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