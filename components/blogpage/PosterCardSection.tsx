"use client";
import React from "react";

// components
import PosterCard from "components/ui/Cards/PosterCard/PosterCard";

// Data
import { PosterCardSectionProps } from "shared";

const PosterCardSection: React.FC<PosterCardSectionProps> = ({ posts }) => {
  return (
    <div className={`flex items-center justify-center py-6`}>
      <div
        className={`flex flex-col place-items-center items-start gap-5 lg:w-fit lg:mx-20 xl:mx-28 mx-6 lg:grid lg:grid-cols-2`}
      >
        {posts.map((card, index) => (
          <PosterCard key={index} data={{ ...card, covers_type: "hr" }} />
        ))}
      </div>
    </div>
  );
};

export default PosterCardSection;
