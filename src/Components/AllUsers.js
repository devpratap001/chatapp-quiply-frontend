import { useDeferredValue, useEffect, useState } from "react";
import ProfileCard from "./profileCard"; 
import data from "../fakeData";

export default function AllUsers() {
    const [searchedUser, setSearchedUser]= useState("");
    const matchUser= useDeferredValue(searchedUser)
    const [userList, setuserList]= useState([])

    useEffect(() => {
        setuserList(data)
    }, [])

    useEffect(() => {
        if (matchUser !== ""){
            const query= new RegExp("^" + matchUser, "i");
            setuserList(() => {
                const list= data.filter(elem => query.test(elem.name));
                console.log(list);
                return list
            })
        } else {
            setuserList(data)
        }
    }, [matchUser])

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
                return <ProfileCard key={index} Name={element.name} />
            })}
        </div>
    </div>
    </>
}