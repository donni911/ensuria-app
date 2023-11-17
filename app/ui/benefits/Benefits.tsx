"use client";

import React from "react";
import WelcomeBlock from "./components/WelcomeBlock";
import GridBenefits from "./components/GridBenefits";

import { dataShortCards, dataLongCards } from "@/app/lib/data";
import { StyledWrapper } from "@/app/styles/app";
import { useGetCardsQuery } from "@/app/store/api";

const Benefits = () => {
  // const { data } = useGetCardsQuery();
  // console.log(data);

  return (
    <StyledWrapper>
      <GridBenefits cols={8} items={dataShortCards} size="sm" />
      <WelcomeBlock />
      <GridBenefits cols={10} rows={4} items={dataLongCards} size="lg" />
    </StyledWrapper>
  );
};

export default Benefits;
