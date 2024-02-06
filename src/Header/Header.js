import React from 'react'
import pic from '../img/background-1205651.jpg'
const Header = () => {
  return (
    <div className='header'>  
        <div className="headerTitles">
            <span className='headerTitleSm'>Techriya 2@24</span>
            <span className='headerTitleLg'>Feb 2-3 </span>
        </div>
        <img src={pic} alt="Background" className='headerImg' /> 
        <div className="footer">
            Footer
        </div>      
    </div>
    
  )
}

export default Header
