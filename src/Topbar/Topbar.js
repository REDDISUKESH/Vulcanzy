import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { Context } from '../Context/Context';

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  //console.log(user.roles)
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className='top'>
      <div className='topLeft'>
        <FontAwesomeIcon className='topIcons' icon={faFacebook} />
        <FontAwesomeIcon className='topIcons' icon={faTwitter} />
        <FontAwesomeIcon className='topIcons' icon={faInstagram} />
        <FontAwesomeIcon className='topIcons' icon={faLinkedin} />
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topItem'>
            <Link className='link' to='/'>HOME</Link>
          </li>
          <li className='topItem'>
            <Link className='link' to='/Tasks'>EVENTS</Link>
          </li>
          {user && user.roles && user.roles.length > 0 && user.roles[0] === 'secretary' && (
            <>
            <li className='topItem'>
              <Link className='link' to='/Accommodation'>POST</Link>
            </li>
            <li className='topItem'>
            <Link className='link' to='/Participants'>Participants</Link>
          </li>
          </>
          
          )}

          
          {user ? (
            <li className='topItem' onClick={handleLogout}>
              LOGOUT
            </li>
          ) : null}
        </ul>
      </div>
      <div className='topRight'>
        <ul className='topList'>
          {!user ? (
            <>
              <li className='topItem'>
                <Link className='link' to='/Login'>LOGIN</Link>
              </li>
              <li className='topItem'>
                <Link className='link' to='/Register'>REGISTER</Link>
              </li>
            </>
          ) : user.username}
        </ul>
      </div>
    </div>
  );
};

export default Topbar;