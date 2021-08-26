import React from 'react';
import { Link } from 'gatsby';

const MobileMenu = ({ mainMenu, active }) => {
  return (
    <aside className={`mobile-menu ${active ? 'active' : ''}`}>
      <nav className="menu-container">
        <ul className="main-menu">
          {mainMenu.map((item) => (
            <li key={item.id} className="menu-item">
              <Link to={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default MobileMenu;
