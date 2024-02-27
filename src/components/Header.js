import React from 'react'
import { Link } from 'react-router-dom'
import { FaBitcoin } from "react-icons/fa";

const Header = () => { 
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
        <Link className="navbar-brand nav-link" to="/">Mugester <FaBitcoin color='orange' size={"25"} /></Link>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
                <li className="nav-item">
                <Link className="nav-link" to="/brockers">Brockers</Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link" to="/coins">Coins</Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutme">About-me</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header
