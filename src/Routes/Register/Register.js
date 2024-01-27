import Registration from "../../Components/registration";
import { useDispatch } from "react-redux";
import {setIsLoading} from "../../Redux/Slices/loadingSlice";
import {setIsError} from "../../Redux/Slices/errorSlice";
import {setRegisterData} from "../../Redux/Slices/registerSlice";

export default function Register () {
    const dispatch= useDispatch();

    async function handleRegistration (data) {
        try {
            dispatch(setIsLoading());
            const response= await fetch ("http://localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: data
            });
            const registerResponse= await response.json();
            if (registerResponse.error){
                dispatch(setIsLoading());
                dispatch(setIsError())
                dispatch(setRegisterData(registerResponse));
                return registerResponse
            } else {
                dispatch(setIsLoading());
                dispatch(setRegisterData(registerResponse));
                return registerResponse
            }
        } catch (error) {
            console.error(error)
        }
    }

    return <div className="register">
        <Registration type="registration" submitFunction={handleRegistration} />
    </div>
}