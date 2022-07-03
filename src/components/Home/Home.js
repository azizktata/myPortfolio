import React from 'react'
import "./Home.css"
import Blue from "../../images/Blue.png"
import Green from "../../images/Green.png"
export default function Home() {
  return (
    <div className='home-main'>
        <div className='personal-info'>
            <p className='hi'>Hi all. I am</p>
            <h3 className='Myname'>Aziz Ktata</h3>
            <p className='job'> {'>'} Software developer</p>
            <p className="gitlink"> <span className='const'>const </span> <span className='github'>githubLink = </span> <a className='link' href='https://github.com/azizktata' rel='noreferrer' target="_blank" style={{textDecoration:"none"}}>"https://github.com/azizktata"</a></p>
        </div>
        <div className='layers'>
            
            <img  className='green-img' src={Green} alt="green" />
            <img className='blue-img' src={Blue} alt="blue" />
        </div>

    </div>
  )
}
