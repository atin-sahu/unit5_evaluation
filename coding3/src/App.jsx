import { Route, Routes } from "react-router-dom"
import { Admin } from "./components/Admin"
import { Home } from "./components/Home"
import { Login } from "./components/Login"
import { Navbar } from "./components/Navbar"
import { EmployeeList } from "./components/EmployeeList"
import { EmployeeDetails } from "./components/EmployeeDetails"


function App() {

  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/employees" element={<EmployeeList></EmployeeList>}></Route>
       <Route path="/admin" element={<Admin></Admin>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/logout" element={<Login></Login>}></Route>
       <Route path="employees/:id" element={<EmployeeDetails></EmployeeDetails>}></Route>
     </Routes>
    </div>
  )
}

export default App
