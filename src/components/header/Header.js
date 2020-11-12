import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Link } from "gatsby";
import CookieConsent from "react-cookie-consent";

import Burger from "../hamburger_menu/HamburgerMenu";

const Header = ({ siteTitle, opaque, headerVersion }) => {
  useEffect(() => {
    window.addEventListener("scroll", function() {
      if (!opaque) {
        if (window.scrollY === 0) {
          document.querySelector("header").classList.remove("end-transparency");
        } else {
          document.querySelector("header").classList.add("end-transparency");
        }
      }
    });
    const script = document.createElement("script");
    script.src = "/static/honey-form-integration.js";
    script.async = true;
    document.body.appendChild(script);
  });

  return (
    <header
      className={`fixed ${opaque ? "end-transparency" : ""}`}
      style={{
        fontFamily: "Poppins",
        textTransform: "uppercase",
      }}
    >
      <CookieConsent
        cookieName="myAwesomeCookieName2"
        style={{ background: "#fff", justifyContent: "Center" }}
        buttonStyle={{
          color: "#fff",
          fontSize: "13px",
          background: "#ff3975",
          borderRadius: "20px",
          padding: "10px 20px",
        }}
        contentStyle={{
          color: "#4a4a4a",
          textTransform: "none",
          flex: "initial",
          fontSize: "13px",
        }}
        expires={150}
        acceptOnScroll={true}
        acceptOnScrollPercentage={10}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <link rel="stylesheet" href="https://use.typekit.net/wzs4klt.css" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
      />

      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      ></script>
      <nav className="mainHeader navbar" role="navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              className="logo first-logo"
              src={require("../../svgs/logo.svg")}
              alt="Synth Digital Logo white"
            />
            <img
              className="logo second-logo"
              src={require("../../svgs/group-12.svg")}
              alt="Synth Digital Favicon"
            />
          </Link>
          <Burger />
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {/* <Link to="/marketing-warmup" className="button first">
                  Portfolio
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;