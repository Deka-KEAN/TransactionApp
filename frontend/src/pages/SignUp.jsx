import { Link, useNavigate } from "react-router-dom";
import { SignIn } from "./SignIn";
import { useState } from "react";

import axios from "axios";
export function SignUp(){
    const navigate=useNavigate();
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");

    return (
        <div className="h-fit p-4 w-[400px]">
            <h1 className="text-center p-1 font-bold">Sign Up</h1>
            <p className="p-2 text-xl text-center opacity-40 font-medium">Enter your information to create an account</p>
            <form className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="John" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"></input>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                    <input onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="Doe" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"></input>
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="johndoe@example.com" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"></input>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"></input>
                </div>
                <div>Already have an account click <Link to="/signin" element={<SignIn/>}>here.</Link></div>
                <div className="text-center p-4">
                    <button onClick={async (e)=>{
                            e.preventDefault();
                            const response= await axios.post(`http://localhost:3000/api/v1/user/signup`,{
                                firstName,
                                lastName,
                                username,
                                password
                            });
                            
                            console.log(response);
                            localStorage.setItem("response-token",response.data.token);
                            console.log(response.data.token);
                            navigate("/signin");
                        }}
                        type="submit" class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Register new account
                    </button>
                </div>
            </form>
        </div>
    );
}