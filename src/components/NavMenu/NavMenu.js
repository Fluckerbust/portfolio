import React, { Component } from 'react'
import './NavMenu.css'
import logo from '../../assets/logo.png'

export class NavMenu extends Component {
  render() {
    return (
      <div className='navContainer'>
          <header class="desktop">
        <nav>
            <ul class="nav-list">
              <li class="nav-item" >
                <div><img src={logo} className='logo'/>Jonathan Raynes Portfolio</div>
              </li>
              <li class="nav-item" id="navItem">
                <a href="#">Resume</a>
              </li>
              <li class="nav-item" id="navItem">
                <a href="#">Projects</a>
              </li>
              <li class="nav-item" id="navItem">
                <a href="#">Contact Me</a>
              </li>
              
            </ul>
          </nav>
      </header>
      <header class="mobile">
        <nav>
            <ul class="nav-list">
              <li class="nav-item">
              <div><img src="../../assets/logo.png" className='logo'/>Jonathan Raynes Portfolio</div>
              </li>
              <li class="nav-item">
                <a href="#">Sign Up</a>
              </li>
              <li class="nav-item">
                <a href="#">Work</a>
              </li>
              <li class="nav-item">
                <a href="#">Contact</a>
              </li>
              
            </ul>
          </nav>
      </header>
      </div>
    )
  }
}

export default NavMenu