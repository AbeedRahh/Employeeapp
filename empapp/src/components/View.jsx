import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate,useLocation } from 'react-router-dom';

const View = () => {
  var [emp,setEmp]=useState([]);
  var navigate=useNavigate();
  useEffect(()=>{
    axios.get("http://localhost:8765/view")
    .then((res)=>{
      console.log(res)
      setEmp(res.data)
    })
    .catch((error)=>{
      console.log("error")
    })
  },[])
  
  const delvalue=(id)=>{
    console.log(id);
    axios.delete('http://localhost:8765/remove/'+id)
    .then((res)=>{
      alert(res.data.message);
      window.location.reload();

    })
    .catch((error)=>{
      alert("couldnot delete data");

    })
    
  }
  const upvalue=(val)=>{
    console.log('update clicked');
    navigate('/',{state:{val}});
    // axios.patch("http://localhost:8080/update/"+id)
    // .then((res)=>{alert(res.data.message)
    //   window.location.reload()
    // }).catch((error)=>{error})

  };

  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
               <TableRow  >
                    <TableCell>Name </TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Salary</TableCell>
                    
                    
                </TableRow>
            </TableHead>
        
        <TableBody>
          {emp.map((val,i)=>{
            return (
              <TableRow key ={i} >
                <TableCell>{val.Name}</TableCell>
                <TableCell>{val.Age}</TableCell>
                <TableCell>{val.Dept}</TableCell>
                <TableCell>{val.Sal}</TableCell>  
                <TableCell>
                  <Button variant='contained' onClick={()=>{delvalue(val._id)}} >Delete</Button>&nbsp;
                  <Button variant='contained'  onClick={()=>{upvalue(val)}}>Update</Button>&nbsp;
                </TableCell>
            </TableRow>
            )
          })}
            </TableBody></Table>
      </TableContainer>
    

    </div>
  )
}

export default View
