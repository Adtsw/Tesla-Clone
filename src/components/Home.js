import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Solar and Power Wall"
        description="Power Everything"
        backgroundImg="solar-panel.jpg"
        leftBtn="Learn More"
      />
      <Section
        title="Accessories"
        backgroundImg="accessories.jpg"
        leftBtn="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
