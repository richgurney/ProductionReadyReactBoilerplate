import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <nav>
          <div className="nav-wrapper">
            <div className="col s12">
              <a href="#" className="brand-logo">Boilerplate - React, Redux, React Router, Webpack</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link
                    to={`/pages/page1`}
                  >
                    Page 1
                  </Link>
                </li>
                <li>
                  <Link to={'/pages/page2'}>
                    Page 2
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default Header;
