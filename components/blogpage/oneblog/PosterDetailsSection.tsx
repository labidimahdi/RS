"use client";
import React from "react";

// components
import OneBlogDetails from "./OneBlogDetails";

// Data
import { PosterDetailsSectionProps } from "shared";

const PosterDetailsSection: React.FC<PosterDetailsSectionProps> = ({ post }) => {
  return (

    <div className={`flex w-full mt-6 items-center justify-center py-6`}>    
        {post && (
          <OneBlogDetails  hovered data={{ ...post, covers_type: "hr" }} />
        )}

    </div>
  );
};

export default PosterDetailsSection;
