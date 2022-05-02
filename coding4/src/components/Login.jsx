import {useState} from "react";
import axios from "axios";
export const Login = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const getData = async(n,p)=>{
    const data = await axios.get("http://localhost:8080/users");

    // console.log(data.data);
  }

  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={(e)=>{setName(e.target.value)}}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={(e)=>{setPass(e.target.value)}}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={()=>{getData(name,pass)}}>Login</button>
    </div>
  );
};
