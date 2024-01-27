
import { BrowserRouter, Route, Routes }from "react-router-dom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Send from "./Components/Send";
import Dashboard from "./Components/Dashboard";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/send" element={<Send/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
