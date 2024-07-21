"use client";  
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

// Components
const PosterDetailsSection = dynamic(
  () => import("components/blogpage/oneblog/PosterDetailsSection"),
  { ssr: false }
);
import { Banner } from "components/ui/Banners/Banner/Banner";
import { Section } from "components/ui/Sections/Section";
import NearshoreSection from "components/homepage/NearshoreSection";
import ContactSection from "components/ContactSection";
import PosterCardSkeleton from "components/ui/Cards/PosterCard/PosterCard.skeleton";

// API
import { fetchPostById } from "services";

const OneBlog = () => {
  const { slug } = useParams();
  const t = useTranslations("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const extractPost = async (id:string) => {
    setIsLoading(true);
    try {
      const response = await fetchPostById(id);
      if (!response.error) {
        setData(response);
      } else {
        console.error(response.error);
      }
    } catch (error) {
      console.error("Failed to fetch post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (typeof slug === 'string') {
      extractPost(slug);
    }
  }, [slug]);

  return (
    <Section>
      {/* Banner */}
      <Banner
        title="News & Blog Post"
        subtitle="Your gateway to innovation and growth"
        bgImage="lg:bg-banner_about_us bg-mobile_banner_about_us"
      />
      {/* One blog details section */}
      {isLoading ? (
        <div className="flex justify-center w-full h-full">
       <PosterCardSkeleton/>
       </div>
      ) : (
        <PosterDetailsSection post={data} />
      )}
      {/* Nearshore section */}
      <NearshoreSection />
      {/* Contact section */}
      <ContactSection />
    </Section>
  );
};

export default OneBlog;
