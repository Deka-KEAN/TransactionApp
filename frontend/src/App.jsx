
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";
import { useState } from "react";
import { Send } from "./pages/Send";


function App() {
  const [authenticated,setAuthentication]=useState(false);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/send" element={<Send/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
