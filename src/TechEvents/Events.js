import React, { useState, useEffect } from 'react';
import Tasks from '../Tasks/Tasks';
import axios from 'axios';

const Events = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDept, setSelectedDept] = useState(''); // Default: All departments
  const URL="http://localhost:3500"
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // Conditionally include the department parameter only when a department is selected
        const url = selectedDept ? `${URL}/Event?Dept=${selectedDept}` : `${URL}/Event`;
        const res = await axios.get(url);
        setTasks(res.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [selectedDept]);

  const handleDeptChange = (event) => {
    setSelectedDept(event.target.value.toLowerCase()); // Convert to lowercase
  };

  return (
    <>
      <div className='dept'>
        <select value={selectedDept} onChange={handleDeptChange}>
          <option value=''>All Departments</option>
          <option value='CSE'>CSE</option>
          <option value='ECE'>ECE</option>
          <option value='MECH'>MECH</option>
          <option value='CIVIL'>CIVIL</option>
        </select>
      </div>
      <div className='Events'>
        {tasks.map((p) => (
          <Tasks key={p.id} task={p} />
        ))}
      </div>
    </>
  );
};

export default Events;
