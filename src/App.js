import './App.css';
import Topbar from './Topbar/Topbar';
import Header from './Header/Header';
import Events from './TechEvents/Events'
import Accommodation from './Accommodation/Accommodation';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login'
import Register from './Register/Register';
import Enroll from './Enrollment/Enroll'
import SingleEvent from './SingleEvent/SingleEvent';
import { useContext } from 'react';
import { Context } from './Context/Context'
import Participants from './Participants/Participants'

function App() {
  const { user } = useContext(Context);

  return (
    <>
      <Topbar />

      <Routes>
        <Route exact path="/" element={user ? <Header /> : <Login />} />
        <Route path="/Tasks" element={user ? <Events /> : <Header />} />
        <Route path="/Accommodation" element={user ? <Accommodation /> : <Header />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        {/* Update the path attribute to include both id and title parameters */}
        <Route path="/SingleEvent/:id/:title" element={user ? <Enroll /> : <Header />} />
        <Route path="/Participants" element={user ? <Participants /> : <Header />} />
      </Routes>
    </>
  );
}

export default App;
