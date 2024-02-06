/* import React, { useEffect, useState } from 'react'

const Department = () => {
    const [department,setDepartment]=useState('')
    useEffect(()=>{
        const fetchTasks=async ()=>{
            const res=await axios.get(`/Event?dept=${selectedDept}`)
            setDepartment()
        }
    })
  return (
    <div className='dept'>
      <select value={selectedDept} >
          <option value='cse'>CSE</option>
          <option value='ece'>ECE</option>
          <option value='mech'>Mech</option>
          <option value='civil'>Civil</option>
        </select>
      </div>
  )
}

export default Department
 */