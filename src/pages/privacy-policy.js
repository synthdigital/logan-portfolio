import React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/seo/Seo";
import { Container } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Layout opaqueHeader="true">
      <SEO title="Privary Policy" />
      <div className="privacy-policy-page">
        <Container className="container">
          <h1> Privacy Policy Boilerplate Will Go Here </h1>
        </Container>
      </div>
    </Layout>
  );
};

export default AboutUs;
