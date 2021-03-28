import React from 'react'
import './ProjectsButton.css'

const ProjectsButton = ({ imp, text, link }) => {
    return (
        <div className={`button ${imp == 'secondary' ? 'button__white' : ''}`}>
            <a href={link}>
                {text}
            </a>
        </div>
    )
}

export default ProjectsButton
