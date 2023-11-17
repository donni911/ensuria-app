"use client";

import React from "react";
import WelcomeBlock from "./components/WelcomeBlock";
import GridBenefits from "./components/GridBenefits";

// import { dataShortCards, dataLongCards } from "@/app/lib/data";
import { StyledWrapper } from "@/app/styles/app";
import { useGetCardsQuery } from "@/app/store/api";

const Benefits = () => {
  const { data, isFetching } = useGetCardsQuery();

  return (
    <StyledWrapper>
      {!isFetching && data?.dataShortCards && (
        <GridBenefits cols={8} items={data?.dataShortCards} size="sm" />
      )}
      <WelcomeBlock />
      {!isFetching && data?.dataLongCards && (
        <GridBenefits
          cols={10}
          rows={4}
          items={data?.dataLongCards}
          size="lg"
        />
      )}
    </StyledWrapper>
  );
};

export default Benefits;
