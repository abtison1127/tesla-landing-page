import React from 'react'
import ProjectsButton from './ProjectsButton.js'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './FirstItem.css'
import Item from './Item.js';



const FirstItem = ({ title, desc, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons, first}) => {
    return (
        <div className='item' style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className='item__container'>
                <div className='item__text'>
                    <p>{title}</p>
                    <div className='item__textDesc'>
                        <p>{desc}</p>
                    </div>
                </div>
                <div className='item__lowerThird'> Projects
                    {/* <ProjectsButton imp='primary' text='See Projects' onClick='scroll' /> */}
                    <div className='item__expand' justify-content='center'>
                        <ExpandMoreIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstItem