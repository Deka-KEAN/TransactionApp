
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom"

function App() {

  return (
    <Router>
      <Routes>
        <Route to="/signup" />
        <Route to="/signin"/>
        <Route to="/dashboard"/>   
      </Routes>
    </Router>
  )
}

export default App
