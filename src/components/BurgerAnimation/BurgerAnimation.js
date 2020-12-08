import React, { useState, useCallback } from "react";
import { HamburgerSlider } from "react-animated-burgers";
import "./BurgerAnimation.scss";

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const setClass = state => {
    if (state && document.querySelector(".opening")) {
      console.log("hi");
      document.querySelector(".opening").classList.add("open");
    } else if (document.querySelector(".opening")) {
      console.log("bye");
      document.querySelector(".opening").classList.remove("open");
    }
  };

  const toggleButton = useCallback(() => {
    document.getElementById("burger-btn").click();
    setIsActive(prevState => !prevState);
  }, []);

  console.log(isActive);
  setClass(isActive);

  return (
    <HamburgerSlider
      className="opening"
      buttonColor="#FFBC67"
      barColor="white"
      {...{ isActive, toggleButton }}
    />
  );
};

export default App;
