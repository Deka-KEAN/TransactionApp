
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";
import { useState } from "react";
import { Send } from "./pages/Send";


function App() {
  const [authenticated,setAuthentication]=useState(false);
  return (
    <div className="w-screen">
      <h1 className="left-0 top-0 p-2 font-extrabold">TxnPay</h1>
      <div className="h-fit flex items-center justify-center">
        
        <Router>
          <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/send" element={<Send/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
