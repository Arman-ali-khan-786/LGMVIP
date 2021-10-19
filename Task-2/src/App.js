import axios from "axios";
import { useState } from "react";
import './App.css';
import CreateCard from "./CreateCard";

function App() {
  const [ps, ns] = useState([{
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: ""
  }]);


   function GetUsers(event){
        event.preventDefault();
        axios("https://reqres.in/api/users?page=1").then((res) => {
          ns(res.data.data);
   }).catch((error) => {
     console.log(error)}
     );
 }

 return (
   <div>
      <div id = "header" > 
      <h1 id = "heading" > Lets<span>Grow</span>More </h1>
      <button onClick = {GetUsers} id = "getUsersDetails" >Get Users</button>
      </div>
    <div className = "UserCards" >
      {
        ps.map((c) => <CreateCard key = {c.id} email = {c.email} 
        first_name = {c.first_name} last_name = {c.last_name} avatar = {c.avatar} 
        />)
      }
    </div>
   </div>
 );
}



export default App;

