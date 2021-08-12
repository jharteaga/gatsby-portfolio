import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [mobileMenuActive, setMobileMenuActive] = React.useState(false);

  const toggleMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  const data = useStaticQuery(graphql`
    query getMainMenu {
      wpMenu(name: { eq: "Main menu" }) {
        name
        menuItems {
          nodes {
            label
            url
            id
          }
        }
      }
      allWpMediaItem(filter: { title: { eq: "site-logo" } }) {
        nodes {
          mediaItemUrl
        }
      }
    }
  `);

  const mainMenu = data.wpMenu.menuItems.nodes;
  const logoUrl = data.allWpMediaItem.nodes[0].mediaItemUrl;

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src={logoUrl} alt="Jose Arteaga Logo" />
        </div>
        <nav className="menu-container">
          <ul id="menu-main-menu" className="main-menu">
            {mainMenu.map((item) => (
              <li key={item.id} className="menu-item">
                <Link to={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__hamburger">
          <FontAwesomeIcon icon={faBars} size="2x" onClick={toggleMenu} />
        </div>
      </header>
      <MobileMenu mainMenu={mainMenu} active={mobileMenuActive} />
    </>
  );
};

export default Header;
