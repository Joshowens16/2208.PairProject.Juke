import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div>
        <div id='sidebar'>
          <img src='juke.svg' id='logo' />
          <section>
            <h4>
            <Link to="/">
              <a>ALBUMS</a>
            </Link>
            </h4>
          </section>
            </div>
        </div>
    );
};

export default SideBar;