import { Link } from "react-scroll"
import './NavBar.module.css'

export const NavBar = () => {
    return (
        <nav>
            <div className="logo">NAME</div>
            <ul>
                <li>
                    <Link to="home">Home</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="services">Services</Link>
                </li>
                <li>
                    <Link to="contact" className="contact-btn">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}