import React, { useState } from 'react';
import pic from '../img/background-1205651.jpg';
import {Link} from 'react-router-dom'
const Tasks = ({task}) => {
  const [event,setEvent]=useState('')
  const [eventname,setEventname]=useState('')
  const PF="http://localhost:3500/images/"
  return (
    <div className="TaskContainer">
      <div className='Task'>
        {task.photo &&
        <img src={PF+task.photo} alt="Events" className='TaskImage' />}
        <div className='EventInfo'>
          <span className='EventTitle'>
            {task.title}
          </span>
          <hr />
          <p className='EventDesc'>{task.desc}</p>
          <span className='Eventdate'>{new Date(task.createdAt).toDateString()}</span>
         
        </div>
        <button className='EnrollButton' 
        ><Link className='link' to={`/SingleEvent/${task._id}/${encodeURIComponent(task.title)}`}>Enroll</Link>
        </button>
      </div>
    </div>
  );
};

export default Tasks;
