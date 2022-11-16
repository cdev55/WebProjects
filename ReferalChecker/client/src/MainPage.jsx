import React, { useState } from 'react';
import axios from 'axios';
import {Box, TextField, Typography,Button,styled} from '@mui/material';


const Container=styled(Box)`
width:400px;
margin:auto;

box-shadow:5px 5px 5px #878787;
border-radius:10px;

`
const Wrapper=styled(Box)`

padding:25px 50px;

display:flex;
overflow:auto;

flex-direction:column;
& > div, & > button, & > p{
    margin-top:20px;
}

`

const MainPage = () => {

    const [exist,setExist]=useState('false');
    const [input,setInput]=useState({
        name:'',
        username:'',
        email:'',
        referrername:''
    });

    const [value,setValue]=useState({
        email:'',
        
    });



    const toggleExist=()=>{
        exist=='false'? setExist('true'):setExist('false');
    }
    const handleChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const handleValue=(e)=>{
        setValue({...value,[e.target.name]:e.target.value})
    }

    const registerUser=async ()=>{
        const res=await axios.post('http://localhost:5000/',{
            name:input.name,
            username:input.username,
            email:input.email,
            referrername:input.referrername
           
        })
        .catch((error)=> console.log(error));

        const Data=await res;
        console.log(Data);
        return Data;
    };
  return (
    
    <form>
    <Container>
        {
        exist=='false' ?
        <Wrapper>
        <TextField variant='outlined' name='name' onChange={(e)=>handleChange(e)} placeholder='Enter Name'></TextField>
        <TextField variant='outlined' name='username' onChange={(e)=>handleChange(e)} placeholder='Enter Username'></TextField>
        <TextField variant='outlined' name='email' onChange={(e)=>handleChange(e)} placeholder='Enter Email'></TextField>
        <TextField variant='outlined' name='referrername' onChange={(e)=>handleChange(e)} placeholder="Enter Referrer's Name(optional)"></TextField>
        <Button variant='contained'onClick={()=>registerUser()} >Make Payment</Button>
        <Button onClick={()=>toggleExist()} >Check your referal Earnings</Button>
        <Typography>Payment successfull !!</Typography>
        </Wrapper> 
        :
        <Wrapper>
        <TextField variant='outlined' name='username' onChange={(e)=>handleChange(e)} placeholder='Enter Username'></TextField>
        
        <Button variant='contained'>Check Earnings</Button>
        <Button onClick={()=>toggleExist()}>Make payment </Button>
        <Typography>Your Earnings</Typography>
        </Wrapper>}
    </Container>
    </form>
  )
}

export default MainPage;