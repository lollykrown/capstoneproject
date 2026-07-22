import { useState } from 'react'
import logo from './logo.svg'
import { NavLink } from 'react-router-dom';

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? ' #495e57' : '#000',
  textDecoration: isActive ? 'underline' : 'none',
  fontWeight: isActive ? 'bold' : 'normal',
});

const Nav = () => {
  const [show, setShow] = useState(false)
  return (
    <nav>
      <section>
      <a href="/">
      <img src={logo} alt="little lemon logo"/>
      </a>
      <ul class="large-screens">
        <li><NavLink to="/" style={navLinkStyles}>Home</NavLink></li>
        <li><NavLink to="/">About</NavLink></li>
        <li><NavLink to="/">Menu</NavLink></li>
        <li><NavLink to="/booking" style={navLinkStyles}>Reservations</NavLink></li>
        <li><NavLink to="/">Order Online</NavLink></li>
        <li><NavLink to="/">Login</NavLink></li>
      </ul>
      <button class="menu" onClick={()=>setShow(!show)}>
        <img src="./icon _hamburger.svg" alt="harmbuger menu icon" />
      </button>
      </section>
      {show &&<ul class="mobile">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Menu</a></li>
        <li><a href="/">Reservations</a></li>
        <li><a href="/">Order Online</a></li>
        <li><a href="/">Login</a></li>
      </ul>}
    </nav>
  )
}

export default Nav