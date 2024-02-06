import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../Context/Context';
import { useNavigate } from 'react-router-dom';

const Accommodation = () => {
  const Url = "http://localhost:3500";
  const [eventname, setEventname] = useState('');
  const [secretary, setSecretary] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const [Dept,setDept]=useState('')
  const { user } = useContext(Context);
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newevent = {
      title:eventname,
      username:secretary,
      desc,
      Dept,
    };
  
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newevent.photo = filename;
  
      try {
        const res = await axios.post(`${Url}/upload`, data);
        console.log(res.data);
      } catch (err) {
        console.error("Error uploading file:", err);
      }
    }
  
    try {
      //console.log(newevent);
      const res = await axios.post(`${Url}/Event`, JSON.stringify(newevent), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res.data);
      window.location.replace(`/SingleEvent/${res.data._id}`);
    } catch (err) {
      console.error("Error posting event:", err);
    }
  };
  

  return (
    <div className='write'>
      {file && <img src={URL.createObjectURL(file)} alt="" className='writeImg' />}
      <form className='writeForm' onSubmit={handleSubmit}>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
          <input type="text" placeholder='EventName' className='writeInput' autoFocus={true} onChange={e => setEventname(e.target.value)} />
          <input type="text" placeholder='SecretaryName' className='writeInput' autoFocus={true} onChange={e => setSecretary(e.target.value)} />
          <input type="text" placeholder='Dept' className='writeInput' autoFocus={true} onChange={e => setDept(e.target.value)} />
        </div>
        <div className="writeFileGroup">
          <textarea className="writeInput writeText" cols="30" rows="10" placeholder='About Event' onChange={e => setDesc(e.target.value)}></textarea>
        </div>
        <button className="writeSubmit" type="submit">Post</button>
      </form>
    </div>
  );
}

export default Accommodation;
