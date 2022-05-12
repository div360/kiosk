import React from 'react'
import logo from "./images/mitLogo.png"
import userPic from "./images/user.png"
import './UserDetails2.css'

function UserDetails2() {
  return (
    <div>
    <nav className="navbar navbar-light py-0">
        <div className="container py-0" padding>
            <a className="navbar-brand p-0" href="#">
            <img className="my-0 p-0"src={logo} alt="" width="auto" height="58"/>
            <p className="d-inline h6 ml-3" ><strong>MIT World Peace University</strong> | Pune</p>
            </a>
        </div>
    </nav>
    </div>
  )
}

export default UserDetails2
