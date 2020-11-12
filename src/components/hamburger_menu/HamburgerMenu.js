import React from "react";
import { Link } from "gatsby";
import { slide as Menu } from "react-burger-menu";

class Burger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu right className="navbar-burger">
        <Link id="home" className="menu-item" to="/portfolio">
          Portfolio
        </Link>
      </Menu>
    );
  }
}

export default Burger;
