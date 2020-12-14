import React from "react";
import { Link } from "gatsby";
import { slide as Menu } from "react-burger-menu";
import "./HamburgerMenu.scss";

export default class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  showSettings(event) {
    event.preventDefault();
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  render() {
    return (
      <Menu
        right
        className="navbar-burger"
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <div>
          <Link
            id="home"
            className="menu-item"
            to="/"
            onClick={() => {
              this.closeMenu();
              this.props.toggleButton();
            }}
          >
            Home
          </Link>
          <Link
            id="about"
            className="menu-item"
            to="/#what-we-do"
            onClick={() => {
              this.closeMenu();
              this.props.toggleButton();
            }}
          >
            About
          </Link>
          <Link
            className="menu-item"
            to="/#services"
            onClick={() => {
              this.closeMenu();
              this.props.toggleButton();
            }}
          >
            Services
          </Link>
        </div>
        <div>
          <Link
            className="menu-item"
            to="/#process"
            onClick={() => {
              this.closeMenu();
              this.props.toggleButton();
            }}
          >
            Process
          </Link>
          <Link
            className="menu-item"
            to="/#clients"
            onClick={() => {
              this.closeMenu();
              this.props.toggleButton();
            }}
          >
            Testimonies
          </Link>
          <Link className="menu-item" to="/portfolio">
            Work
          </Link>
        </div>
        {/* <Link id="portfolio" className="menu-item" to="/Blog">
          Blog
        </Link> */}
        <div>
          <Link
            className="menu-item"
            to="/#contact"
            onClick={() => {
              this.closeMenu();
              this.props.toggleButton();
            }}
          >
            Contact
          </Link>
        </div>
      </Menu>
    );
  }
}
