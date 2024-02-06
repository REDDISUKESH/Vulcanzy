import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const EnrollForm = ({taskId,title}) => {
    const URL="http://localhost:3500"
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [contact,setContact]=useState('')
    const [Dept,setDept]=useState('')
  const handleSubmit = async () => {
    try {
        const response=await axios.post(`${URL}/participants/Participants`,{username,email,contact,Dept,title,})
        response.data && window.location.replace("/Participants")
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='EnrollForm'>
      <h1>Enrollment Form</h1>
      <div className="EnrollmentForm">
        <label htmlFor="username">Name</label>
        <input type="text" name="username" placeholder='Enter Name' autoFocus={true} onChange={(e)=>setUsername(e.target.value)} />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder='Enter Email' autoFocus={true} onChange={(e)=>setEmail(e.target.value)} />

        <label htmlFor="contact">Contact</label>
        <input type="text" name="contact" placeholder='Enter Number' autoFocus={true} onChange={(e)=>setContact(e.target.value)} />

        <label htmlFor="Dept">Department</label>
        <input type="text" name="Dept" placeholder='Department' autoFocus={true} onChange={(e)=>setDept(e.target.value)} />

        <button className="EnrollSubmit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default EnrollForm;
