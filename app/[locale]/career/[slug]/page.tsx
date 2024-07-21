"use client"
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Components
import { Banner } from "components/ui/Banners/Banner/Banner";
import { Section } from "components/ui/Sections/Section";
import NearshoreSection from "components/homepage/NearshoreSection";
import ContactSection from "components/ContactSection";
const OneCareerDetails = dynamic(  () =>  import("components/careerPage/onecareer/OneCareerDetails"),
{ ssr: false }
);
// API
import { fetchJobOfferById } from "services";


export default function OneCareer() {
  const {slug} = useParams();
  const [data, setData] = useState([]);
 
  const extractOffer = async (id:string) => {
    try {
      const response = await fetchJobOfferById(id);
      if (!response.error) {
        setData(response);
      } else {
        console.error(response.error);
      }
    } catch (error) {
      console.error("Failed to fetch offer:", error);
    } finally {
    }
  };
  useEffect(() => {
    if (typeof slug === 'string') {
      extractOffer(slug);
    }
  }, [slug]);
  return (
    <Section>
      {/* Banner */}
      <Banner
        title="Submit your resume to secure your dream job!"
        bgImage="lg:bg-banner_about_us bg-mobile_banner_about_us"
      />
      {/* One Career details section */}
      <OneCareerDetails offer={data}/>
      {/* Nearshore section */}
      <NearshoreSection />
      {/* Contact section */}
      <ContactSection />
    </Section>
  );
}
