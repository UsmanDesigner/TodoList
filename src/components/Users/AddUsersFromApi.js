import React, {useState ,useEffect}  from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
const AddUsersFromApi = (props)=>{
    const [enteredUserName,setEnteredUserName]= useState('');
    const [enteredAge,setEnteredAge]= useState('');
    const getUsersFromAPi =(event) =>{
        event.preventDefault();
       
        props.onAddUser(enteredUserName,enteredAge);
        setEnteredAge('');
        setEnteredUserName('');
    }

    
    return (
        <Card className={classes.input} >
        <form onSubmit={getUsersFromAPi}>
            <Button type="submit">Add User From APi</Button>
        </form>
        </Card>
    )

}

export default AddUsersFromApi;