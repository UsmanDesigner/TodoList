import React, {useState ,useEffect}  from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
const AddUser = (props)=>{
    const [enteredUserName,setEnteredUserName]= useState('');
    const [enteredAge,setEnteredAge]= useState('');
    const addUserHandler =(event) =>{
        event.preventDefault();
        if(enteredUserName.trim().length ===0 || enteredAge.trim().length ===0){
            return;
        }
        if(+enteredAge < 1){ 
            return;
        }
        props.onAddUser(enteredUserName,enteredAge);
        setEnteredAge('');
        setEnteredUserName('');
    }
    const usernameChangeHandler =(event)=>{
        setEnteredUserName(event.target.value)
    }
    const userageChangeHandler =(event)=>{
        setEnteredAge(event.target.value)
    }
    
    return (
        <Card className={classes.input} >
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUserName} onChange={usernameChangeHandler} />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={userageChangeHandler} />
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    )

}

export default AddUser;