

import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/react.svg";
import { Send } from "./Send";
import { useEffect, useState } from "react";
import axios from "axios";

function UserList({user}){
    // console.log("props",user);
    const navigate=useNavigate();
    return (
        <div className="flex width-screen m-3 items-center relative">
            <img src={logo} alt="User_Photo" className="w-14 me-4"/>
            {user ?  <h2 className="text-2xl">{user.firstName} {user.lastName}</h2> : ""}
            <div className="absolute right-0">                
                <button type="button" onClick={()=>{
                    navigate("/send?id="+user._id+"&name="+user.username);
                }} className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-m px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200">
                    Send Money
                </button>
            </div>
        </div>
    );
}

export function Dashboard(){
    const [users,setUsers]=useState([]);
    const [balance,setBalance]=useState("7000");
    const [filter,setFilter]=useState("");

    // debouncing is need here as the get request is going multiple times so inorder to handle it
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
            .then(res => {
                setUsers(res.data.user);
            });
    }, [filter]);
    console.log(users);
    return (
        <div>
            <div className="fixed right-0 top-0 flex p-4 items-center">
                <p className="font-bold text-3xl p-2">Welcome, User</p>
                <img src={logo} alt="User_Photo" className="w-14"/>
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-blue-700 w-screen"></hr>
            <div className="p-4">
                <p className="text-xl font-bold pb-10">Your Current Balance : ${balance}</p>
                <h3 className="text-2xl font-bold pb-5">Users</h3>
                <div className="mb-10">
                    <input type="text" onChange={(e)=>setFilter(e.target.value)} placeholder="Search User" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"></input>
                </div>
                {users.map((user) => <UserList user={user}/>)}
            </div>

        </div>
    );
}