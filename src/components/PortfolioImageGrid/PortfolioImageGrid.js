import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";
import { lazyload } from "react-lazyload";

import "./PortfolioImageGrid.scss";

const PortfolioImageGrid = ({ active }) => {
  const [currentlyDisplaying, setCurrentlyDisplaying] = useState(active);

  useEffect(() => {
    setCurrentlyDisplaying(active);
    changeShownImages(active);
  });

  const changeShownImages = active => {
    const appImages = document.querySelectorAll(".apps-container img");
    const appContainer = document.querySelector(".apps-container");
    const appTitle = document.getElementById("apps");

    const logoImages = document.querySelectorAll(".logos img");
    const logoContainer = document.querySelector(".logos");
    const logosTitle = document.getElementById("logos");

    const iconImages = document.querySelectorAll(".icons-section img");
    const iconsContainer = document.querySelector(".icons-section");
    const iconsTitle = document.getElementById("icons");

    const websiteImages = document.querySelectorAll(".website-container img");
    const websiteContainer = document.querySelector(".website-container");
    const websiteTitle = document.getElementById("website");

    const allImages = document.querySelectorAll(".portfolio-grid img");
    const allContainers = document.querySelectorAll(".img-container");
    const allTitles = document.querySelectorAll(".category-title");
    hideAll();
    setTimeout(() => {
      if (active === "all") {
        allImages.forEach(img => {
          img.classList.remove("hidden");
        });
        allContainers.forEach(title => {
          title.classList.remove("hidden");
        });
        allTitles.forEach(title => {
          title.classList.remove("hidden");
        });
      } else if (active === "apps") {
        appImages.forEach(img => {
          img.classList.remove("hidden");
        });
        appContainer.classList.remove("hidden");
        appTitle.classList.remove("hidden");
      } else if (active === "logos") {
        logoImages.forEach(img => {
          img.classList.remove("hidden");
        });
        logoContainer.classList.remove("hidden");
        logosTitle.classList.remove("hidden");
      } else if (active === "icons") {
        iconImages.forEach(img => {
          img.classList.remove("hidden");
        });
        iconsContainer.classList.remove("hidden");
        iconsTitle.classList.remove("hidden");
      } else if (active === "websites") {
        websiteImages.forEach(img => {
          img.classList.remove("hidden");
        });
        websiteContainer.classList.remove("hidden");
        websiteTitle.classList.remove("hidden");
      }
    }, 500);
  };

  const hideAll = () => {
    const allImages = document.querySelectorAll(".portfolio-grid img");
    const allContainers = document.querySelectorAll(".img-container");
    const allTitles = document.querySelectorAll(".category-title");

    allImages.forEach(img => {
      img.classList.add("hidden");
    });
    allContainers.forEach(container => {
      container.classList.add("hidden");
    });
    allTitles.forEach(title => {
      title.classList.add("hidden");
    });
  };

  const options = {
    settings: {
      disableWheelControls: true,
    },
    thumbnails: {
      showThumbnails: false,
    },
  };

  return (
    <Container className="portfolio-grid">
      <SRLWrapper options={options}>
      <h5 className="margin-top-50" id="website" className="category-title">
          Websites
        </h5>
        <div className="website-container img-container">
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/Buzzlogix.png")}
              alt="Buzzlogix Home Page"
              className="website"
            />
            <img
              src={require("../../images/portfolio-images/DBTofTexas.png")}
              alt="DBT of Texas Home"
              className="website"
            />
            <img
              src={require("../../images/portfolio-images/DDSynergy.png")}
              alt="D&D Synergy"
              className="website"
            />
          </lazyload>
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/EquinEdge_1.png")}
              alt="Equinedge Home"
              className="website"
            />
            <img
              src={require("../../images/portfolio-images/NQuotient.png")}
              alt="NQuotient Home"
              className="website"
            />
            <img
              src={require("../../images/portfolio-images/PatientVoice_1.png")}
              alt="Hospital Integrations Inc Home"
              className="website"
            />
          </lazyload>
        </div>
        <h5 id="apps" className="category-title">
          Apps UI/UX
        </h5>
        <div className="apps-container img-container">
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/EquinEdge-Screen Shot 2020-11-24 at 4.37.13 PM.png")}
              alt="Equinedge App Stats"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/EquinEdge-Screen Shot 2020-11-24 at 4.41.41 PM.png")}
              alt="Equinedge Top Horses View"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/EquinEdge-Screen Shot 2020-11-24 at 4.47.15 PM.png")}
              alt="Equinedge Breaking News"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/TuVida-Screen Shot 2020-11-30 at 6.00.08 PM.png")}
              alt="TuVida Select Tags View"
              className="app"
            />
          </lazyload>
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/TuVida-Screen Shot 2020-11-30 at 6.36.34 PM.png")}
              alt="TuVida Profile View"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/TuVida-Screen Shot 2020-11-30 at 8.22.07 PM.png")}
              alt="TuVida Preview"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/TuVida-Screen Shot 2020-11-30 at 8.23.59 PM.png")}
              alt="TuVida"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/TuVida-Screen Shot 2020-11-30 at 8.26.26 PM.png")}
              alt="TuVida My Feed View"
              className="app"
            />
          </lazyload>
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/TuVida-Screen Shot 2020-11-30 at 8.32.03 PM.png")}
              alt="TuVida Choose A Temas"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/TuVida-Screen Shot 2020-11-30 at 8.43.25 PM.png")}
              alt="TuVida Answers View"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/TuVida-Screen Shot 2020-11-30 at 8.45.14 PM.png")}
              alt="TuVida Profile Blue"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/TuVida-Screen Shot 2020-11-30 at 8.47.24 PM.png")}
              alt="TuVida Profile Red"
              className="app"
            />
          </lazyload>
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/TV-Profile.jpg")}
              alt="TuVida TV Profile"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/TV-Survey.jpg")}
              alt="TV Survey"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/HospitalIntegration-Screen Shot 2020-11-25 at 3.06.55 PM.png")}
              alt="Hospital Integration Patient Detail View"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/HospitalIntegration-Screen Shot 2020-11-25 at 3.09.34 PM.png")}
              alt="Hospital Integration Tasks View"
              className="app"
            />
          </lazyload>
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/HospitalIntegration-Screen Shot 2020-11-25 at 3.17.07 PM.png")}
              alt="Hospital Integration Compliance"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/CallahanRoach-Screen Shot 2020-11-30 at 10.21.32 PM.png")}
              alt="App View"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/CallahanRoach-Screen Shot 2020-11-30 at 10.51.32 PM.png")}
              alt="Login View"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/CallahanRoach-Screen Shot 2020-11-30 at 10.52.47 PM.png")}
              alt="Info View"
              className="app"
            />
          </lazyload>
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/CallahanRoach-Screen Shot 2020-11-30 at 10.53.50 PM.png")}
              alt="Parts View"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/Braveheart1.png")}
              alt="Braveheart Company Description"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/Braveheart2.png")}
              alt="Braveheart Charts"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/Braveheart3.png")}
              alt="Braveheart Reports"
              className="app"
            />
          </lazyload>
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/CallahanRoach-Screen Shot 2020-11-30 at 9.45.09 PM.png")}
              alt="Callahan Roach Pricing"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/CallahanRoach-Screen Shot 2020-11-30 at 10.11.16 PM.png")}
              alt="CallahanRoach1"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/CallahanRoach-Screen Shot 2020-11-30 at 10.20.22 PM.png")}
              alt="CallahanRoach"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/Braveheart4.png")}
              alt="Braveheart Share Price"
              className="app"
            />
          </lazyload>
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/CallahanRoach-Screen Shot 2020-11-30 at 10.20.37 PM.png")}
              alt="Admin Portal"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/EquinEdge-Screen Shot 2020-11-23 at 3.18.36 PM.png")}
              alt="Equinedge Stats View"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/EquinEdge-Screen Shot 2020-11-24 at 4.08.38 PM.png")}
              alt="Equinedge Dashboard"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/HospitalIntegration-Screen Shot 2020-11-30 at 5.21.23 PM.png")}
              alt="Hospital Integration Help View"
              className="app"
            />
          </lazyload>
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/HospitalIntegration-Screen Shot 2020-11-30 at 5.21.40 PM.png")}
              alt="Hospital Integration Patient Info"
              className="app"
            />

            <img
              src={require("../../images/portfolio-images/HospitalIntegration-Screen Shot 2020-11-30 at 5.39.28 PM.png")}
              alt="Hospital Integration Satisfaction"
              className="app"
            />

            <img
              src={require("../../images/portfolio-images/HospitalIntegration-Screen Shot 2020-11-30 at 5.47.29 PM.png")}
              alt="Hospital Integration Patients"
              className="app"
            />

            <img
              src={require("../../images/portfolio-images/Quo-Screen Shot 2020-11-30 at 5.48.34 PM.png")}
              alt="QUO Home"
              className="app"
            />
          </lazyload>
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/Quo-Screen Shot 2020-11-30 at 5.49.14 PM.png")}
              alt="QUO Data View"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/Quo-Screen Shot 2020-12-01 at 12.07.46 AM.png")}
              alt="QUO Dashboard"
              className="app"
            />
            <img
              src={require("../../images/portfolio-images/UniversalMetals-Screen Shot 2020-11-24 at 5.26.53 PM.png")}
              alt="UM Price Quote"
              className="app "
            />
            <img
              src={require("../../images/portfolio-images/UniversalMetals-Screen Shot 2020-11-24 at 5.37.01 PM.png")}
              alt="UM Search History"
              className="app"
            />
          </lazyload>

          <lazyload offset={100}></lazyload>
        </div>
        <h5 className="margin-top-50" id="logos" className="category-title">
          Identity
        </h5>
        <div className="logos img-container">
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/VerifiedClean.png")}
              alt="Verified Clean"
              className="logo"
            />
            <img
              src={require("../../images/portfolio-images/SmartPrice.png")}
              alt="Contractor's Smart Price Logo"
              className="logo"
            />
            <img
              src={require("../../images/portfolio-images/PatientVoice.png")}
              alt="Patient Voice Logo"
              className="logo"
            />
          </lazyload>
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/PriceDelta.png")}
              alt="Price Delta logo"
              className="logo"
            />

            <img
              src={require("../../images/portfolio-images/ObiaNaturals.png")}
              alt="OBIA Naturals logo"
              className="logo"
            />

            <img
              src={require("../../images/portfolio-images/MarquisStudent.png")}
              alt="Marquis Student Living Logo"
              className="logo"
            />
          </lazyload>
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/EquinEdge.png")}
              alt="Equinedge Logo"
              className="logo"
            />

            <img
              src={require("../../images/portfolio-images/EZlytix.png")}
              alt="Ezlytix Logo"
              className="logo"
            />

            <img
              src={require("../../images/portfolio-images/GoBone.png")}
              alt="Go Bone Logo"
              className="logo"
            />
          </lazyload>
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/GrampiansPure.png")}
              alt="Grampians Logo"
              className="logo"
            />
            <img
              src={require("../../images/portfolio-images/DBT of Texas.png")}
              alt="DBT of Texas"
              className="logo"
            />
            <img
              src={require("../../images/portfolio-images/AlohaFresh.png")}
              alt="Aloha Fresh Logo"
              className="logo"
            />{" "}
          </lazyload>
        </div>
        <h5 className="margin-top-50" id="icons" className="category-title">
          Iconography
        </h5>
        <div className="icons-section img-container">
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/DBTIcons.png")}
              alt="DBT Icons"
              className="icons"
            />
            <img
              src={require("../../images/portfolio-images/HealthcarePins.png")}
              alt="Healthcare Pins"
              className="icons"
            />
          </lazyload>
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/HospitalIcons.png")}
              alt="Hospital Icons"
              className="icons"
            />

            <img
              src={require("../../images/portfolio-images/MiscIcons.png")}
              alt="Misc Icons"
              className="icons"
            />
          </lazyload>
          <lazyload offset={100}>
            <img
              src={require("../../images/portfolio-images/MiscIcons2.png")}
              alt="Misc Icons"
              className="icons"
            />
          </lazyload>
        </div>
      </SRLWrapper>
    </Container>
  );
};

export default PortfolioImageGrid;
