import { useDeferredValue, useEffect, useState, useLayoutEffect } from "react";
import ProfileCard from "./profileCard"; 

export default function AllUsers({user}) {
    const [searchedUser, setSearchedUser]= useState("");
    const matchUser= useDeferredValue(searchedUser)
    const [userList, setuserList]= useState([]);
    const [realUserList, setRealUserList]= useState([]);

    useLayoutEffect(() => {
        async function loadContacts(){
            try {
                const response= await fetch("http://localhost:5000/chatapp/allusers/" + user._id);
                const responseData= await response.json();
                if (! responseData.error){
                    setRealUserList(responseData)
                }
            } catch (error) {
                console.error(error)
            }
        };
        loadContacts();
    }, [user])

    useEffect(() => {
        setuserList(realUserList)
    },[realUserList])

    useEffect(() => {
        if (matchUser !== ""){
            const query= new RegExp("^" + matchUser, "i");
            setuserList(() => {
                const list= realUserList.filter(elem => query.test(elem.name));
                return list
            })
        } else {
            setuserList(realUserList)
        }
    }, [matchUser, realUserList])

    function handleSearchUser(e) {
        setSearchedUser(e.target.value)
    }

    return <>
    <div className="allchats">
        <div className="contactSearch">
            <input type="search" value={matchUser} placeholder= "Search Users" className="contactSearchBox" onChange={handleSearchUser} />
        </div>
        <hr className="seperator" />
        <div className="userlist hidescroll">
            { userList.map((element, index) => {
                return <ProfileCard key={index} name={element.userName} id={element._id} />
            })}
        </div>
    </div>
    </>
}