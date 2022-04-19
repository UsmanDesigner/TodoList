import React, {useState ,useEffect} from "react";
import AddUser from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";
import AddUsersFromApi from "./components/Users/AddUsersFromApi";
import UsersListForAPI from "./components/Users/UsersListForApi";

function App() {
  const [newUsersList,setnewUsersList]=useState([]);
  const [users,setUsers]=useState([]);
  const addUserHandler=(getName,getAge)=>{
    setnewUsersList((prevList) => {
      return [...prevList ,{ name: getName, age: getAge ,id:Math.random().toString() }]
    });
  };
  const getUsersfromApi =async()=>{
    const response =await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          key : 1,
          name: 'usman',
          age: '8',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    console.log(response);
    setUsers([await response.json()]); 
    console.log(users)
}
useEffect(() => {
 getUsersfromApi();
},[])

  return (
    <div>
     <AddUser onAddUser={addUserHandler} />
     <AddUsersFromApi onAddUser={getUsersfromApi} />
     <UsersList users={newUsersList} />
     <UsersListForAPI users={users} />  
    </div>
  );
}
export default App;
