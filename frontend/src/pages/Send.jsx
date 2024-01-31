import { useSearchParams } from "react-router-dom";
import logo from "../assets/react.svg";
import axios from 'axios';
import { useState } from "react";
export function Send(){
    const [searchParams] = useSearchParams();
    const userId = searchParams.get('id');
    const name=searchParams.get('name');
    const [amount,setAmount]=useState("");
    return (
        <div className="text-black w-1/2 pt-10 text-center rounded-md">
            <div className="bg-white p-5">
                <h1 className="font-bold">Send Money</h1>                
                <div className="text-left w-96 pt-10 inline-block">
                    <div className="flex mt-10 mb-5 items-center">
                        <img src={logo} alt="User_Photo" className="w-14 me-4"/>
                        <h2 className="text-2xl font-bold">{name}</h2>
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-m font-medium text-gray-900 dark:text-black">Amount in INR</label>
                        <input type="number" onChange={(e)=>{setAmount(e.target.value)}} className="w-full rounded-md border border-black-900 border-input bg-white px-3 py-2"></input>
                    </div>
                    <div className="text-center pb-2">
                        <button type="button" onClick={()=>{
                                axios.post("http://localhost:3000/api/v1/account/transfer",{
                                    "userId":userId,
                                    amount
                                },{
                                    headers:{
                                        Authorization: "Bearer " + localStorage.getItem("response-token")
                                    }
                                })
                            }}
                         className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Initiate Transfer</button>
                    </div>
                </div>
            </div>
        </div>
    );
}