"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// components
import { Banner } from "components/ui/Banners/Banner/Banner";
import { Section } from "components/ui/Sections/Section";
import ContactSection from "components/ContactSection";
import NearshoreSection from "components/homepage/NearshoreSection";
import ListSection from "components/careerPage/ListSection";
import FilterSectionSkeleton from "components/careerPage/FilterSection.skeleton";
import ListSectionSkeleton from "components/careerPage/ListSection.skeleton";
const FilterSection = dynamic(
  () => import("components/careerPage/FilterSection"),
  {
    ssr: false,
  },
);

// shared
import { filterInterface } from "shared/interfaces/dropdowns.interface";

// api
import { fetchJobOffers, fetchFilters } from "services";
import Pagination from "components/ui/Pagination/Pagination";

const Career = () => {
  const [filter, setFilter] = useState<filterInterface>({
    reference: "",
    contract_type: null,
    work_time: null,
  });
  const [references, setReferences] = useState([]);
  const [workTimes, setWorkTimes] = useState([]);
  const [contractTypes, setContractTypes] = useState([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const extractFilters = async () => {
    setIsLoading(true);
    const filtersResponse = await fetchFilters();
    if (!filtersResponse.error) {
      setReferences(filtersResponse.references);
      setWorkTimes(filtersResponse.workTimes);
      setContractTypes(filtersResponse.contractTypes);
    }
    setIsLoading(false);
  };

  const extractJobOffers = async (page: number) => {
    const jobOfferResponse = await fetchJobOffers(page, pageSize, filter);
    if (!jobOfferResponse.error) {
      setData(jobOfferResponse.data);
      setTotalPages(jobOfferResponse.meta.lastPage);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    extractFilters();
    extractJobOffers(page);
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (newPage !== page) {
      setPage(newPage);
    }
  };

  return (
    <Section>
      {/* Banner */}
      <Banner
        title="Submit your resume to secure your dream job!"
        bgImage="lg:bg-banner_career bg-mobile_banner_career"
      />
      {isLoading ? (
        <>
          <FilterSectionSkeleton />
          <ListSectionSkeleton />
        </>
      ) : (
        <>
          <FilterSection
            references={references}
            work_times={workTimes}
            contract_types={contractTypes}
            filter={filter}
            setFilter={setFilter}
            setData={setData}
          />
          {/* List section */}
          <ListSection data={data} />
          <Pagination
            currentPage={page}
            lastPage={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}

      {/* Nearshore section */}
      <NearshoreSection />
      {/* Contact section */}
      <ContactSection />
    </Section>
  );
};

export default Career;
