import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-sm navBarNav">
            <div className="container-fluid navBarDiv">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button className="nav-link active">MY NOTE TAKING APP</button>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar