import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <div id="Nav" className="HorizontalContainer">
        <div id="Menu">
          <div className="Icon">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => {
                this.setState({ show: !this.state.show });
              }}
            />
          </div>

          {this.state.show ? null : (
            <div className="Dropdown">
              <ul>
                <br />
                <li>
                  <Link to="/autumn">
                    <h2>Autumn</h2>
                  </Link>
                </li>
                <li>
                  <Link to="/spring">
                    <h2>Spring</h2>
                  </Link>
                </li>
                <li>
                  <h2>Plant Stores</h2>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="Logo">
          <Link to="/">
            <h1>Bay Area Gardens</h1>
          </Link>
        </div>
      </div>
    );
  }
}
export default Nav;
