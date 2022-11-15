import {NavLink} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg px-4">
      <div className="navbar-brand">
        Table app
      </div>
      <ul className="navbar-nav px-4">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/post-creator" className="nav-link">Post creator</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
      </ul>
    </nav>
  )
}