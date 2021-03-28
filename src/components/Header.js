import React from 'react'
import './Header.css'
import ReactLogo from '../assets/react.svg'
import Resume from '../assets/Resume.pdf'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src={ReactLogo} alt='React Logo' />
            </div>
            <div className='header__center'>
                <p>AMBROSS TISON</p>
                
            </div>

            <div className='header__right'>
                <a href={Resume} target='blank'>Resume</a>
                <a href='https://github.com/abtison1127' target='blank'>GitHub</a>
                
                

            </div>
        </div>
    )
}

export default Header
