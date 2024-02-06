import React, { useContext, useEffect, useState } from 'react';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../Context/Context';

const SingleEvent = () => {
  const { user } = useContext(Context);
  const URL = "http://localhost:3500";
  const PF = "http://localhost:3500/images/";
  const location = useLocation();
  const [singleEvent, setSingleEvent] = useState('');
  const path = location.pathname.split("/")[2];
  const [secretary, setSecretary] = useState('');
  const [desc, setDesc] = useState('');
  const [eventname, setEventName] = useState('');
  const [Dept,setDept]=useState('')
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getTask = async () => {
      const res = await axios.get(`${URL}/Event/${path}`);
      setSingleEvent(res.data);
      setSecretary(res.username);
      setDesc(res.desc);
      setEventName(res.title);
      setDept(res.Dept)
    };
    getTask();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${URL}/Event/${singleEvent._id}`,{data:{username:user.username}});
      window.location.replace('/Tasks');
    } catch (err) {
      console.log(err);
    }
  };
  //console.log(user.username)
  //console.log(singleEvent.username===user.username)

  const handleUpdate = async () => {
    try {
      await axios.put(`${URL}/Event/${singleEvent._id}`, {
        username: user.username,
        title: eventname,
        desc: desc,
        Dept:Dept,
      });
      window.location.reload();
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div className='singleEvent'>
      <div className="singleEventWrap">
        {singleEvent.photo && <img src={PF + singleEvent.photo} alt="" className='singleEventImg' />}
        {updateMode ? (
          <input type="text" className='singleEventTitle' value={eventname} autoFocus onChange={(e) => setEventName(e.target.value)} />
        ) : (
          <h1 className='singleEventTitle'>
            {singleEvent.title}
            {user && singleEvent.username === user.username && (
              <div className="singlePostEdit">
                <FontAwesomeIcon className='singlePostIcon' icon={faEdit} onClick={() => setUpdateMode(true)} />
                <FontAwesomeIcon className='singlePostIcon' icon={faTrash} onClick={handleDelete} />
              </div>
            )}
          </h1>
        )}
        <div className="singleEventInfo">
  <div className="singleEventDetails">
    <span className='singleEventHead'><h4>Secretary:</h4> <b>{singleEvent.username}</b></span>
    <span className='singleEventHead'><h4>Department:</h4> <b>{singleEvent.Dept}</b></span>
  </div>
  <div className="singleEventDate">
    <span className='singleEventDateText'>{new Date(singleEvent.createdAt).toDateString()}</span>
  </div>
</div>

        {updateMode ? (
          <textarea autoFocus className='sinlePostDescInput' value={desc} onChange={(e) => setDesc(e.target.value)} />
        ) : (
          <p className='singleEventDesc'>{singleEvent.desc}</p>
        )}
        {updateMode && (<button className='singlePostButton' onClick={handleUpdate}>Update</button>)}
      </div>
    </div>
  );
};

export default SingleEvent;
