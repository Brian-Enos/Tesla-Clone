import React from 'react';
import Section from "./Section";

import ModelS from "../../src/Images/model-s.jpg";
import ModelY from "../../src/Images/model-y.jpg";
import Model3 from "../../src/Images/model-3.jpg";
import ModelX from "../../src/Images/model-x.jpg";

function Home() {
  return (
    <div className="Container">
      <Section
        title="Model S"
        description='Order Online for Touchless Delivery'
        backgroundImage={ModelS}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />

      <Section
        title="Model Y"
        description='Order Online for Touchless Delivery'
        backgroundImage={ModelY}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />

      <Section
        title="Model 3"
        description='Order Online for Touchless Delivery'
        backgroundImage={Model3}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />

      <Section
        title="Model X"
        description='Order Online for Touchless Delivery'
        backgroundImage={ModelX}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
    </div>
  );
}

export default Home;
