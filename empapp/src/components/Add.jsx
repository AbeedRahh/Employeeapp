import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Navigate,useLocation, useNavigate } from 'react-router-dom'

const Add = (props) => {
  
    var [inputs,setinputs]=useState(({Name:"",Age:"",Dept:"",Sal:""}))
    var location=useLocation();
    var navigate=useNavigate()
    console.log("loc",location.state);
    const inputHandler=(e)=>{
      setinputs({...inputs,[e.target.name]:e.target.value})
      console.log(inputs)
    }
    
  
  const AddHandler=()=>{
    console.log("clicked")
   if(location.state!==null){
    axios.put("http://localhost:8765/edit/"+location.state.val._id,inputs)
    .then((res)=>{
    console.log(res)
    alert(res.data.message)
    navigate('/')
   })

    axios.post("http://localhost:8765/add",inputs)
    .then((res)=>{
      console.log(res)
      alert(res.data.message)
      navigate('/v')
    })
    .catch((err)=>{console.log(err)})
  }else{
    axios.post("http://localhost:8765/add",inputs)
    .then((res)=>{
      console.log(res);
      alert(res.data.message);
      navigate('/')

    })
    .catch((err)=>{
      console.log(err);
    });
  }
};
useEffect(()=>{
  if(location.state !=null)
  {
    setinputs({...inputs,
      Name:location.state.val.Name,
      Age:location.state.val.Age,
      Dept:location.state.val.Dept,
      Sal:location.state.val.Sal,
    });
  }
},[])
  return (
    <div style={{marginTop:"3%" ,textAlign:"center"}}>
      <TextField  
      label="Name" 
      variant="standard"
      onChange={inputHandler}
      name="Name"
      value={inputs.Name} 
      />
      <br />
      <br />
      <TextField  
      label="Age" 
      variant="standard" 
     onChange={inputHandler}
     name="Age"
     value={inputs.Age} 
     />
     <br />
     <br />
      <TextField  
      label="Department" 
      variant="standard" 
      onChange={inputHandler}
      name="Dept"
      value={inputs.Dept} 
      /><br />
      <br />
      <TextField  
      label="Salary" 
      variant="standard"
       onChange={inputHandler}
       name="Sal"
       value={inputs.Sal} 
       />
       <br />
       <br />
      <Button variant='outlined' color="secondary" onClick={AddHandler}>
        submit
        </Button>

    </div>
  );
};

export default Add
