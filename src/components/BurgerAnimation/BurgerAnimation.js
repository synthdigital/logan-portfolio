import React, { useState, useCallback } from "react";
import { HamburgerSlider } from "react-animated-burgers";
import "./BurgerAnimation.scss";

const App = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = useCallback(() => {
    setIsActive(prevState => !prevState);
    document.getElementById("burger-btn").click();
  }, []);

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
