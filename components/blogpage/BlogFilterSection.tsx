"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

// components
import { OutlinedButton } from "components/ui/Buttons/OutlinedButton/OutlinedButton";
import { PrimaryButton } from "components/ui/Buttons/PrimaryButton/PrimaryButton";
import AutocompleteDropdown, {
  MultiAutocompleteDropdown,
} from "components/ui/DropDown/DropDownAutoComplete";
import DropdownSelect from "components/ui/DropDown/DropDownSelect";
import Modal from "components/ui/Modal/Modal";
import { FilterIcon } from "components/ui/icons/FilterIcon/FilterIcon";
import useFilterScroll from "../../hooks/useFilterScroll";
import { ReloadIcon } from "components/ui/icons/ReloadIcon/ReloadIcon";
import { Title } from "components/ui/Texts/Title/Title";
import { fetchJobOffers, fetchPosts } from "services";

// Shared
import {
  BlogFiltersInterface,
  blogFilterInterface,
} from "shared/interfaces/dropdowns.interface";

const BlogFilterSection: React.FC<BlogFiltersInterface> = ({
  tags,
  filter,
  setFilter,
  setData,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onChange = async (value: blogFilterInterface) => {
    setFilter(value);
    fetchPosts(1, 16, value.tags).then((data) => {
      if (data.error) {
        return console.error(data.error);
      }
      setData(data.data);
    });
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center gap-2 py-4 lg:items-start lg:pl-80">
        <MultiAutocompleteDropdown
          options={tags}
          name="tags"
          value={filter.tags}
          onChange={onChange}
          placeholder={"tags"}
          className="h-[40px] w-[300px] px-0  lg:h-[45px] lg:min-w-[409px] focus:ring-0 focus:border-primary-color-500"
        />
      </div>
    </>
  );
};
export default BlogFilterSection;
