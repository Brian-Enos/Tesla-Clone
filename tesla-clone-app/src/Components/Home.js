import React from 'react' ;
import styled from "styled-components";
import Section from "./Section";

import ModelS from "../../src/Images/model-s.jpg";

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
     />

     <Section />

     <Section 
     />


    </div>
  )
}

export default Home
