import React from 'react'
import resume from '../assets/Resume.pdf'
import '../styles/Resume.css';
function Resume() {
  return (
    <div className='home'>

        <h2>Resume</h2>
        <p>Focused, eager to learn, and motivated to prove my skill set. Wide range of experience in<br/>
             building applications, creating websites, and working on improving user experience.<br/> 
             Experienced with the latest cutting-edge development tools and procedures. Bringing a <br/>
             motivated attitude and a variety of powerful skills. Committed to utilizing my skills <br/>
             to further the mission of a company.  </p>

        <p><a href={resume} target="_blank" rel="noreferrer" className='link'>Click here</a> to access my resume.</p>
    </div>
  )
}

export default Resume
