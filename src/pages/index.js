import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Waypoint } from "react-waypoint";
import Collapsible from "react-collapsible";
import Slider from "react-slick";

import SEO from "../components/seo/Seo";
import Layout from "../components/layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndexPage = () => {
  useEffect(() => {});

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout>
      <SEO title="Home" />
      <div className="home-page">
        <Container className="hero-section transparent-hero container flexed">
          <Row>
            <Col className="content-container column centered-text">
              <h1 className="teal-text">Howdy.</h1>
              <p className="white-text subtext">
                We’re a UI/UX strategy and design agency in Dallas, Tx. <br />{" "}
                We create kickass digital products across all platforms.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="tagline">
                Strategy<span className="pink-text">.</span> Synthesis
                <span className="teal-text">.</span> Design
                <span className="green-text">.</span>
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="our-focus">
          <Row>
            <Col className="centered-text">
              <h5 className="margin-top-100">OUR FOCUS</h5>
            </Col>
          </Row>
          <Row className="margin-top-125 flexed">
            <Col className="left">
              <h2>
                Digital experiences
                <br /> designed for humans
              </h2>
              <p>
                From startup websites to expansive, complex consumer and
                enterprise apps, our digital product design bedrock is
                behavioral science. Through comprehensive strategic assessment,
                generative research and human-centric design, we create products
                people enjoy using.
              </p>
            </Col>

            <Col className="right">
              <img
                src={require("../images/screen-shot-2020-10-08-at-4-16-35-pm.png")}
                srcSet={`${require("../images/screen-shot-2020-10-08-at-4-16-35-pm.png")} 300w, ${require("../images/screen-shot-2020-10-08-at-4-16-35-pm@2x.png")} 768w, ${require("../images/screen-shot-2020-10-08-at-4-16-35-pm@3x.png")} 1280w`}
                className="phone-img"
                alt="mobile-app"
              />
            </Col>
          </Row>
          <Waypoint
            onEnter={() => {
              document.querySelector(".phone-img").classList.add("animate");
            }}
          />
          <Row className="margin-top-50">
            <Col className="right-align left">
              <img
                src={require("../images/screen-shot-2020-10-09-at-12-32-02-pm.png")}
                srcSet={`${require("../images/screen-shot-2020-10-09-at-12-32-02-pm.png")} 300w, ${require("../images/screen-shot-2020-10-09-at-12-32-02-pm.png")} 768w, ${require("../images/screen-shot-2020-10-09-at-12-32-02-pm@3x.png")} 1280w`}
                className="dog-logo"
                alt="dog logo"
              />
            </Col>

            <Col className="margin-top-140 right">
              <h2>
                Branding that engages
                <br /> and empowers
              </h2>
              <p>
                We evolve existing brands, empower established brands, and
                create new brands. We accomplish this through compelling visual
                design and storytelling that expresses the unique spirit of your
                brand, enriching the lives of both businesses and consumers.
              </p>
            </Col>
          </Row>
          <Waypoint
            onEnter={() => {
              document.querySelector(".dog-logo").classList.add("animate");
            }}
          />
          <Row className="margin-top-110">
            <Col className="left">
              {" "}
              <img
                src={require("../images/screen-shot-2020-10-22-at-3-45-29-pm.png")}
                srcSet={`${require("../images/screen-shot-2020-10-22-at-3-45-29-pm.png")} 300w, ${require("../images/screen-shot-2020-10-22-at-3-45-29-pm@2x.png")} 768w, ${require("../images/screen-shot-2020-10-22-at-3-45-29-pm@3x.png")} 1280w`}
                className="website-design margin-bottom-mobile-0"
                alt="website design"
              />
            </Col>
            <Col className="margin-top-160 right">
              {" "}
              <img
                src={require("../images/group-2.png")}
                srcSet={`${require("../images/group-2.png")} 300w, ${require("../images/group-2@2x.png")} 768w, ${require("../images/group-2@3x.png")} 1280w`}
                className="custom-icon hide-on-mobile"
                alt="custom icon"
              />
            </Col>
          </Row>
          <Waypoint
            onEnter={() => {
              document
                .querySelector(".website-design")
                .classList.add("animate");
            }}
          />
          <Waypoint
            onEnter={() => {
              document.querySelector(".custom-icon").classList.add("animate");
            }}
          />
          <Row className="margin-top-160 margin-top-mobile-0 margin-bottom-200">
            <Col className="left">
              <h2>
                Enterprise experience
                <br /> at consumer-grade
              </h2>
              <p>
                We transform legacy enterprise apps into consumer-grade
                experiences, increasing efficiency, productivity and morale. The
                implementation of elegant and effective human-centric design is
                at the forefront of our design ethos, for both consumer and
                enterprise applications.
              </p>
            </Col>

            <Col className="right">
              <img
                src={require("../images/screen-shot-2020-10-22-at-3-50-01-pm.png")}
                srcSet={`${require("../images/screen-shot-2020-10-22-at-3-50-01-pm.png")} 300w, ${require("../images/screen-shot-2020-10-22-at-3-50-01-pm@2x.png")} 768w, ${require("../images/screen-shot-2020-10-22-at-3-50-01-pm@3x.png")} 1280w`}
                className="dashboard margin-top-75 hide-on-mobile"
                alt="Dashboard"
              />
            </Col>
          </Row>
          <Waypoint
            onEnter={() => {
              document.querySelector(".dashboard").classList.add("animate");
            }}
          />
        </Container>
        <Container className="core-services">
          <Row className="margin-top-60">
            <Col className="centered-text">
              <h5 className="uppercase">Core Services</h5>
            </Col>
          </Row>
          <Row className="margin-top-75 margin-bottom-125 flex-col-mobile">
            <Col className="service">
              <h3>Strategy</h3>
              <ul>
                <li>UI/UX Auditing</li>
                <li>Research</li>
                <li>Brand & Product Strategy</li>
                <li>UX Consulting</li>
                <li>Testing</li>
              </ul>
            </Col>
            <Col className="service">
              <h3>Design</h3>
              <ul>
                <li>Mobile Apps</li>
                <li>Websites</li>
                <li>Branding</li>
                <li>UI/UX Design</li>
                <li>Prototyping & Testing</li>
              </ul>
            </Col>
            <Col className="service">
              <h3>Development</h3>
              <ul>
                <li>Rapid prototyping</li>
                <li>HTML/CSS/JS</li>
                <li>React/Angular</li>
                <li>iOS/Android native apps</li>
                <li>Backend Integrations</li>
              </ul>
            </Col>
            <Col className="service">
              <h3>Content</h3>
              <ul>
                <li>Copywriting</li>
                <li>Iconography</li>
                <li>Video</li>
                <li>Animation</li>
                <li>Infographics</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Container className="our-process">
          <Row className="margin-top-60 margin-bottom-100">
            <Col>
              <h5 className="uppercase margin-bottom-50">our process</h5>

              <p>
                While every project is unique, and our models adaptive and
                collaborative, every digital product design partnership goes
                through these three core phases:
              </p>

              <div className="step-one">
                <Collapsible trigger="I. Research & Discovery">
                  <p>
                    At the outset of the project we consolidate all available
                    documentation and we schedule UX workshops with key
                    stakeholders and relevant teams to explore different ideas
                    and plans. From here UX designers will engage with current
                    or potential customers if possible to understand their
                    desires, expectations, affinities, problems and pain points,
                    as well as employ various techniques of market research,
                    both qualitative and quantitative.
                  </p>

                  <p>
                    At times, brands are reluctant towards conducting prior
                    research as it demands time and resources, but the failure
                    to do so will assuredly cost in the long run. Without
                    appropriate research the true scope of customer needs cannot
                    be assessed and determined. Research and discovery is the
                    very foundation and impetus with which UI/UX design
                    decisions are driven. Instead of relying on intuitions and
                    gambles, it’s best to take a practical approach, and walk
                    the extra mile to serve both the brand and customer better.
                  </p>
                </Collapsible>
                <Collapsible trigger="II. Digital Strategy & Concepting">
                  <p>
                    With the research and discovery results we synthesize a
                    robust digital strategy, which in turn pilots the entire
                    design process. The digital strategy begins by exploring
                    different concepts and fine tuning key variables that will
                    define a strong strategic vertical. From here, we begin
                    concepting core elements such as information architecture
                    and overall UI direction. We finish off this phase by
                    presenting stakeholders with our concept for validation and
                    approval.
                  </p>
                </Collapsible>
                <Collapsible trigger="III. UI/UX Design">
                  <p>
                    We kickoff this phase by hitting the ground running with our
                    freshly minted digital strategy and design concept. Various
                    activities are performed including wireframing, user flow
                    mapping, UI design, and prototyping. We utilize a
                    streamlined process of tools such as Zeplin to hand off our
                    assets to developers. A comprehensive brand style guide,
                    which includes component libraries, guidelines and user
                    maps, is also developed at this stage.
                  </p>
                </Collapsible>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="testimonies">
          <Row className="centered-text margin-top-50">
            <Col>
              <h5 className="margin-bottom-50">CLIENTS</h5>
            </Col>
          </Row>
          <div className="margin-bottom-100">
            <Slider {...settings}>
              <div>
                <div className="testimoni">
                  <p>
                    “Working with Logan was very easy. He immediately understood
                    our business requirements, translated them into specs, and
                    got the work done quickly. I would definitely work with him
                    again!”
                  </p>
                  <cite>
                    Roger Van Duinen, Co-Founder
                    <br /> Varo Money
                  </cite>
                </div>
              </div>
              <div>
                <div className="testimoni">
                  <p>
                    “I’ve worked with multiple designers but none like Logan.
                    His work exceeds expectations.”
                  </p>
                  <cite>
                    Jeffrey Scott Smith, Founder,
                    <br /> Hospital Integration Inc.
                  </cite>
                </div>
              </div>
              <div>
                <div className="testimoni">
                  <p>
                    “Logan is a designer with a motivation to solve complex
                    challenges. He came to the table as a thought partner rather
                    than just a doer that blindly follows orders. He brought not
                    just excellent multi-platform UX design, but all-around
                    great ideas.”
                  </p>
                  <cite>
                    Scott McKeever, Founder & CEO,
                    <br /> EquinEdge
                  </cite>
                </div>
              </div>
            </Slider>
          </div>
        </Container>
        <Container className="logos-section">
          <Row className="align-vertical">
            <Col>
              <img
                src={require("../svgs/varo-bank-logo-1.svg")}
                alt="Varo Logo"
                className="logo one"
              />
            </Col>
            <Col>
              <img
                src={require("../svgs/group-17.svg")}
                alt="Equinedge Logo"
                className="logo two"
              />
            </Col>
            <Col>
              <img
                src={require("../svgs/group-5.svg")}
                alt="CR Logo"
                className="logo three"
              />
            </Col>
            <Col>
              <img
                src={require("../svgs/group.svg")}
                alt="Hospital Integration Logo"
                className="logo four"
              />
            </Col>
            <Col>
              <img
                src={require("../svgs/group-225.svg")}
                alt="UM Logo"
                className="logo five"
              />
            </Col>
            <Col>
              <img
                src={require("../svgs/group-7.svg")}
                alt="TU Logo"
                className="logo six"
              />
            </Col>
            <Waypoint
              onEnter={() => {
                document
                  .querySelector(".logos-section")
                  .classList.add("animate");
              }}
            />
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default IndexPage;
