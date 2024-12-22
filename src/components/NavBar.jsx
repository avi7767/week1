import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  // Define your product categories dynamically
  const categories = [
    { name: 'Mobiles', path: 'mobiles' },
    { name: 'Laptops & Tablets', path: 'laptops & tablets' },
    { name: 'Televisions', path: 'televisions' },
    { name: 'Home Appliances', path: 'home-appliances' },
    { name: 'Kitchen Appliances', path: 'kitchen-appliances' },
    { name: 'Audio & Video', path: 'audio-video' },
    { name: 'Personal Care', path: 'personal-care' }
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      {/* Dynamically create links for each category */}
      {categories.map((category) => (
        <Link key={category.path} to={`/${category.path}`} className="nav-link">
          {category.name}
        </Link>
      ))}
      <Link to="/cart" className="nav-link">Cart</Link>
    </nav>
  );
};

export default NavBar;
