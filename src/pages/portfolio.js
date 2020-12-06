import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SimpleReactLightbox from "simple-react-lightbox";
import PortfolioImageGrid from "../components/PortfolioImageGrid/PortfolioImageGrid";
import SEO from "../components/seo/Seo";
import Layout from "../components/layout/Layout";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "../styles/portfolio.scss";

const Portfolio = () => {
  return (
    <Layout>
      <SEO title="Our Work" />
      <div className="portfolio">
        <Container className="hero-section transparent-hero container flexed">
          <Row>
            <Col className="content-container column centered-text">
              <h1 className="teal-text">Work</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="categories">
                <AnchorLink href="#apps">App UI/UX</AnchorLink>
                <AnchorLink href="#logos">Identity</AnchorLink>
                <AnchorLink href="#icons">Iconography</AnchorLink>
                <AnchorLink href="#website">Website</AnchorLink>
              </div>
            </Col>
          </Row>
        </Container>
        <SimpleReactLightbox>
          <PortfolioImageGrid />
        </SimpleReactLightbox>
      </div>
    </Layout>
  );
};

export default Portfolio;
