import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Participants = () => {
  const [participantsData, setParticipantsData] = useState([]);
  const URL="http://localhost:3500"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/Participants`)
       
          
          setParticipantsData(response.data);
        
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='participants-container'>
      <table className='participants-table'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Dept</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          {participantsData.map((participant, index) => (
            <tr key={participant._id} className={index % 2 === 0 ? 'even' : 'odd'}>
              <td>{index + 1}</td>
              <td>{participant.username}</td>
              <td>{participant.email}</td>
              <td>{participant.contact}</td>
              <td>{participant.Dept}</td>
              <td>{participant.title}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Participants;
