import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { personsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import "./Sidebar.css";

const Sidebar = () => {
  const [activeLinkIdx, setActiveLinkIdx] = useState(0); // Initialize with 0 for the "Home" link

  const handleLinkClick = (index) => {
    setActiveLinkIdx(index);
  };

  return (
    <div className={`sidebar`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_one} alt="profile image" />
        </div>
        <span className="info-name">USER</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink, index) => (
            <li className="nav-item" key={navigationLink.id}>
              <Link
                to={navigationLink.path}
                className={`nav-link ${index === activeLinkIdx ? 'active' : ''}`}
                onClick={() => handleLinkClick(index)}
              >
                <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                <span className="nav-link-text">{navigationLink.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
