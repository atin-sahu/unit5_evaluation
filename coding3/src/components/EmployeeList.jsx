import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

export const EmployeeList = () => {

  const [emp,setEmp] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/employee")
    .then((data) =>{
      console.log(data.data)
      setEmp(data.data);
    })
  },[])

    return (
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}
        {emp.map((e)=>{
          return (
            <Link to={`employees/:${e.id}`}>
              <div className="employee_card">
                <img href={e.image} className="employee_image" />
                <span className="employee_name">{e.employee_name}</span>
                <span className="employee_title">{e.title}</span>
              </div>
            </Link>
          )
        })}
        
      </div>
    );
  };