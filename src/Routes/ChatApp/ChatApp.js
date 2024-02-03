import Dashboard from "../../Components/Dashboard";
import AllUsers from "../../Components/AllUsers";
import "./chatApp.css";
import { Outlet } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ChatApp() {
    const navigate= useNavigate()

    useLayoutEffect(()=> {
        async function isAuthenticated () {
            try {
                const response= await fetch("http://localhost:5000/chatapp/checkAuthenticated", {mode: "cors", credentials: "include"})
                const authResponse= await response.json();
                console.log(authResponse);
                if (authResponse.error === true){
                    navigate("/login")
                } 
            } catch (error) {
                console.error(error)
            }
        }
        isAuthenticated();
    })

    return <>
    <Dashboard />
    <div className="chatbox" >
        <Outlet />
    </div>
    <AllUsers />
    </>
}