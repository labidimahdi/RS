import React from "react";
// components
import { OfferCard } from "components/ui/Cards/OfferCard/OfferCard";
import { Text } from "components/ui/Texts/Text/Text";
import { Title } from "components/ui/Texts/Title/Title";

const ListSection: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center px-10 lg:py-4">
      <div className="hidden h-full w-full lg:flex lg:flex-col lg:items-center lg:justify-center">
        <Title className="pt-10 text-center lg:pt-5">
          Submit your resume to secure your dream job!
        </Title>
        <Text className=" font-medium text-black-color-900" size="medium">
          Search for career opportunities in our category.
        </Text>
      </div>
      <div className="grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4">
        {data.map((jobOffer: any, i: number) => (
          <OfferCard
          key={jobOffer.id}
          OfferLink={{
            pathname: "/career/[slug]",
            params:jobOffer.id,}
          }
            address={jobOffer.location}
            details={jobOffer.keywords}
            publishedOn={jobOffer.show_date}
            reference={jobOffer.reference}
            title={jobOffer.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ListSection;
