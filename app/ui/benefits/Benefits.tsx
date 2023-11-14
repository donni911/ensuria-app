"use client";

import React from "react";
import styled from "styled-components";
import WelcomeBlock from "./components/WelcomeBlock";
import GridBenefits from "./components/GridBenefits";

const StyledWrapper = styled.section`
  display: block;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 0.903vw;
  box-sizing: border-box;
`;

const Benefits = () => {
  return (
    <StyledWrapper>
      <GridBenefits />
      <WelcomeBlock />
    </StyledWrapper>
  );
};

export default Benefits;
