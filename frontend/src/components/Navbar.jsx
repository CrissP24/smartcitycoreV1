import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const isAuth = localStorage.getItem('auth') === 'true'

  const handleLogout = () => {
    localStorage.setItem('auth', 'false')
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <span className="navbar-brand">Mi App</span>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Pública</Link>
          </li>
          {isAuth && (
            <li className="nav-item">
              <Link className="nav-link" to="/private">Privada</Link>
            </li>
          )}
        </ul>
        <ul className="navbar-nav">
          {!isAuth ? (
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          ) : (
            <li className="nav-item">
              <button onClick={handleLogout} className="btn btn-outline-light btn-sm">
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
