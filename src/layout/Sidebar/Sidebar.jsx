import { useState } from 'react';
import { personsImgs } from '../../utils/images';
import { navigationLinks } from '../../data/data';
import "./Sidebar.css";
import { Navigate, useNavigate, Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);

  return (
    <div className={ `sidebar3` }>
      <div className="user-info3">
          <div className="info-img3 img-fit-cover">
              <img src={ personsImgs.person_one } alt="profile image" />
          </div>
          <span className="info-name3">USER</span>
      </div>

      <nav className="navigation3">
          <ul className="nav-list3">
            {
              navigationLinks.map((navigationLink) => (
                <li className="nav-item3" key = { navigationLink.id }>
                  <Link to={navigationLink.link}>
                    <a href="#" className={ `nav-link3 ${ navigationLink.id === activeLinkIdx ? 'active' : null }` }>
                        <img src={ navigationLink.image } className="nav-link3-icon" alt = { navigationLink.title } />
                        <span className="nav-link3-text">{ navigationLink.title }</span>
                    </a>
                  </Link>
                </li>
              ))
            }
          </ul>
      </nav>
    </div>
  )
}

export default Sidebar
