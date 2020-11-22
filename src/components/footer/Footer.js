import React from "react";
import { Row, Col } from "react-bootstrap";
import Loader from "../loader/Loader";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="fixed">
      <Row>
        <Col className="spaced-out">
          <h3 className="margin-top-15">
            Like what you see?
            <br /> Let's talk.
          </h3>

          <p className="hide-on-mobile">
            Not a form fan? Shoot us an email.
            <a
              href="mailto:howdy@synthdigital.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              howdy@synthdigital.com
            </a>
          </p>
        </Col>
        <Col>
          <div className="form-container">
            <form
              id="contact-form"
              className="contact-form"
              method="POST"
              name="contact-form"
              action="/#thanks"
              onSubmit={e => {
                e.preventDefault();
                const submitButton = document.getElementById("sbmt-form-btn");
                const loader = document.querySelector(".loader");
                const formName = document.getElementById("contact-form");

                loader.style.display = "block";
                submitButton.style.display = "none";

                fetch(formName.getAttribute("action"), {
                  method: "POST",
                  body: new FormData(document.getElementById("contact-form")),
                })
                  .then(res => {
                    if (res.status === 200) {
                      document.querySelector("#contact-form").style.display =
                        "none";
                      document.querySelector(
                        ".footer-thank-you"
                      ).style.display = "block";
                    } else {
                      loader.style.display = "none";
                      document.getElementById("error-msg").style.display =
                        "block";
                      submitButton.style.display = "block";
                    }
                  })
                  .catch(error => {
                    loader.style.display = "none";
                    document.getElementById("error-msg").style.display =
                      "block";
                    submitButton.style.display = "block";
                  });
              }}
              netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" id="bot" />

              <div className="form-content">
                <div className="two-inputs">
                  <div className="name">
                    <label htmlFor="name">
                      Name
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="send-value"
                        placeholder="Your name"
                        required
                      />
                    </label>
                  </div>
                  <div className="project">
                    <label htmlFor="project">
                      Project
                      <input
                        type="text"
                        name="project"
                        id="project"
                        className="send-value"
                        placeholder="Your project"
                        required
                      />
                    </label>
                  </div>
                </div>
                <div className="email">
                  <label htmlFor="email">
                    E-mail
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="send-value"
                      placeholder="Your e-mail"
                      required
                    />
                  </label>
                </div>
                <div className="How can we help you?">
                  <label htmlFor="msg">
                    How can we help you?
                    <textarea
                      type="text"
                      name="msg"
                      id="msg"
                      className="send-value"
                      placeholder="Tell us about your product and your nearest plans on engagement."
                      required
                    />
                  </label>
                </div>
                <div className="sbmt-btn">
                  <Loader />
                  <p id="error-msg">
                    Looks like there was a problem submitting your form. Please
                    ensure ALL form fields are filled out and try again.
                  </p>
                  <button
                    type="submit"
                    className="btn teal-btn margin-top-30"
                    id="sbmt-form-btn"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
            <div className="footer-thank-you">
              <h5>Thank you for contacting us. We'll be in touch shortly!</h5>
            </div>
          </div>
        </Col>
        <Col className="spaced-out show-mobile">
          <div className="margin-top-50">
            <p>
              Not a form fan? Shoot us an email.
              <a
                href="mailto:howdy@synthdigital.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                howdy@synthdigital.com
              </a>
            </p>
          </div>
        </Col>
      </Row>

      <Row className="socket">
        {/* -- DO NOT USE GATSBY'S Link HERE --*/}
        {/* Changing the a tags to privacy policy, sitemap, or footer to gatsby's Link component breaks the header transparency fix   */}

        <p>
          {" "}
          <a href="/privacy-policy">Privacy Policy</a>
        </p>
        <p>© 2020 - SynthDigital</p>
      </Row>
    </footer>
  );
};

export default Footer;
