import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './css/navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Chiheb Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;