import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
  const URL="http://localhost:3500"
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roles, setRoles] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
  
    try {
      const res = await axios.post(`${URL}/auth/Register`, {
        username,
        email,
        password,
        roles,
      });
      //console.log(res); // Log the response data
      res.data && window.location.replace("/Login")
    } catch (error) {
      console.error('Error registering:', error);
      setError(true); // Set error state to display error message
    }
  };  

  const handleRoleChange = (e) => {
    setRoles(e.target.value);
  };

  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <form className='registerForm' onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
          type='text'
          className='registerInput'
          placeholder='Enter Name'
          onChange={e=>setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type='text'
          className='registerInput'
          placeholder='Enter Your Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type='password'
          className='registerInput'
          placeholder='Enter Your Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor='role'>Select Role:</label>
        <select id='role' name='role' onChange={handleRoleChange} value={roles}>
          <option value=''>Select...</option>
          <option value='student'>Student</option>
          <option value='secretary'>Secretary</option>
        </select>
        <button className='registersButton' type='submit'>
          Register
        </button>
      </form>
      <button className='loginsButton'>
        <Link className='link' to='/Login'>
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: 'lightred', fontSize: '22px', marginTop: '10px' }}>
          Something Went Wrong!!!!!!!!!!
        </span>
      )}
    </div>
  );
};

export default Register;
