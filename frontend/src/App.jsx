
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";
import { Send } from "./pages/Send";
import { SignUp } from "./pages/SignUp";

function App() {
  return (
    <div className="w-screen">
      <h1 className="left-0 top-0 p-4 font-extrabold">TxnPay</h1>
      <div className="h-fit flex items-center justify-center">
        
        <Router>
          <Routes>
            <Route path="/*" element={<SignUp/>}/>
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
