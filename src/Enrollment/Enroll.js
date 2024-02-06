import React from 'react';
import { useParams } from 'react-router-dom';
import SingleEvent from '../SingleEvent/SingleEvent';
import EnrollForm from '../EnrollForm/EnrollForm';

const Enroll = () => {
  const { taskId, title } = useParams();
  //console.log(title);

  return (
    <div className='Enrollment'>
      <EnrollForm taskId={taskId} title={title} />
      <SingleEvent />
    </div>
  );
};

export default Enroll;
