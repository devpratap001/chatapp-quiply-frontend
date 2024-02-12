import Dashboard from "../../Components/Dashboard";
import AllUsers from "../../Components/AllUsers";
import "./chatApp.css";
import { Outlet } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChatApp() {
    const navigate= useNavigate()
    const [user, setUser]= useState({});

    useLayoutEffect(()=> {
        async function isAuthenticated () {
            try {
                const response= await fetch("http://localhost:5000/chatapp/checkAuthenticated", {mode: "cors", credentials: "include"})
                const authResponse= await response.json();
                setUser(authResponse.profile)
                if (authResponse.error === true){
                    navigate("/login")
                } 
            } catch (error) {
                console.error(error)
            }
        }
        isAuthenticated();
    }, [navigate])

    return <>
    <Dashboard user= {user} />
    <div className="chatbox" >
        <Outlet context={{...user}} />
    </div>
    <AllUsers user= {user} />
    </>
}