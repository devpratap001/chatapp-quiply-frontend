import { useDeferredValue, useEffect, useState } from "react";
import ProfileCard from "./profileCard"; 
import data from "../fakeData";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const [searchedContact, setSearchedContact]= useState("");
    const matchContact= useDeferredValue(searchedContact)
    const [contactList, setcontactList]= useState([])

    useEffect(() => {
        setcontactList(data)
    }, [])

    useEffect(() => {
        if (matchContact !== ""){
            const query= new RegExp("^" + matchContact, "i");
            setcontactList(() => {
                const list= data.filter(elem => query.test(elem.name));
                console.log(list);
                return list
            })
        } else {
            setcontactList(data)
        }
    }, [matchContact])

    function handleSearchContact(e) {
        setSearchedContact(e.target.value)
    }

    return <>
    <div className="mypage">
        <div className="adminCard">
            <img src="/images/profilePicture.png" alt="profilePic" width="100px" />
            <div className="adminData">
                Devil
                <i className="fa-solid fa-user" />
                <Link to="/"><i className="fa-solid fa-right-from-bracket" /></Link>
            </div>
        </div>
        <div className="contactSearch">
            <input type="search" value={matchContact} placeholder= "Search Contacts" className="contactSearchBox" onChange={handleSearchContact} />
        </div>
        <hr className="seperator" />
        <div className="contactlist hidescroll">
            { contactList.map((element, index) => {
                return <ProfileCard key={index} Name={element.name} />
            })}
        </div>
    </div>
    </>
}