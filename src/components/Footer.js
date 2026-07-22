import restaurantfood from "./restauranfood.jpg"
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer class="footer">
      <section class="footer-inner">
      <img src={restaurantfood}  height="200px" width="100%" alt="" />
      <ul >
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/booking" >Reservations</Link></li>
        <li><Link to="/">Order Online</Link></li>
        <li><Link to="/">Login</Link></li>
      </ul>
      <ul>
        <li>Address</li>
        <li>Phone Number</li>
        <li>Email</li>
      </ul>
      <ul>
        <li>Address</li>
        <li>Phone Number</li>
        <li>Email</li>
      </ul>
      </section>
    </footer>
  )
}

export default Footer