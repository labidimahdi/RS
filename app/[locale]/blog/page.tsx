"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// components
const PosterCardSection = dynamic(
  () => import("components/blogpage/PosterCardSection"),
  {
    ssr: false,
  },
);
import { Banner } from "components/ui/Banners/Banner/Banner";
import { Section } from "components/ui/Sections/Section";
import Pagination from "components/ui/Pagination/Pagination";
import PosterCardSkeleton from "components/ui/Cards/PosterCard/PosterCard.skeleton";

// api
import { fetchPosts } from "services";
import AutocompleteDropdown, {
  MultiAutocompleteDropdown,
} from "components/ui/DropDown/DropDownAutoComplete";
import { fetchTags } from "services/tag.service";
import BlogFilterSection from "components/blogpage/BlogFilterSection";

const BlogPage = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(1);
  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [filter, setFilter] = useState<{ tags: string[] }>({
    tags: [],
  });

  const extractTags = async () => {
    setIsLoading(true);
    const tagsResponse = await fetchTags();
    if (!tagsResponse.error) {
      setTags(tagsResponse);
    } else {
      console.error("An error occurred in get tags");
    }
  };

  const extractPosts = async (page: number) => {
    const response = await fetchPosts(page, 8, tags);
    if (!response.error) {
      setData(response.data);
      setTotalPages(response.meta.lastPage);
    } else {
      console.error(response.error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    extractTags();
    extractPosts(page);
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (newPage !== page) {
      setPage(newPage);
    }
  };

  const onChange = (value: { tag: string }) => {
    setFilter((prev: any) => ({ ...prev, ...value }));
  };

  return (
    <Section>
      {/* Banner */}
      <Banner
        title="News & Blog Post"
        subtitle="Your gateway to innovation and growth"
        bgImage="lg:bg-banner_blog bg-mobile_banner_blog"
      />

      {isLoading ? (
        <div className={`flex items-center justify-center py-6`}>
          <div
            className={`mx-6 flex flex-col justify-center gap-5 lg:mx-20 lg:w-5/6 lg:flex-row lg:flex-wrap`}
          >
            {Array.from({ length: 8 }).map((_post, index) => (
              <PosterCardSkeleton key={index} />
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Posts filter */}
          <BlogFilterSection
            tags={tags}
            filter={filter}
            setFilter={setFilter}
            setData={setData}
          />
          {/* Posts */}
          <PosterCardSection posts={data} />
          <Pagination
            currentPage={page}
            lastPage={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </Section>
  );
};

export default BlogPage;
