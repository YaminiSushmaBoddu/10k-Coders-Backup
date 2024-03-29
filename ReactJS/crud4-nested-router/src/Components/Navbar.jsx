import React from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">
          Navbar
        </a> */}
        <Link className="navbar-brand" to={'/'}>Home</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
           <Link to={'Create'} className="nav-link">Create User</Link>
          </div>
        </div>
      </div>
    </nav>
        </div>
    );
}

export default Navbar;
