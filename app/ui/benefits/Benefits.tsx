"use client";

import React from "react";
import styled from "styled-components";
import WelcomeBlock from "./components/WelcomeBlock";
import GridBenefits from "./components/GridBenefits";

import { dataShortCards, dataLongCards } from "@/app/lib/data";

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
      <GridBenefits cols={8} items={dataShortCards} />
      <WelcomeBlock />
      <GridBenefits cols={10} rows={4} items={dataLongCards} size="lg" />
    </StyledWrapper>
  );
};

export default Benefits;
