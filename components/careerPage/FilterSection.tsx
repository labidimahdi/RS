"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

// components
import { OutlinedButton } from "components/ui/Buttons/OutlinedButton/OutlinedButton";
import { PrimaryButton } from "components/ui/Buttons/PrimaryButton/PrimaryButton";
import AutocompleteDropdown from "components/ui/DropDown/DropDownAutoComplete";
import DropdownSelect from "components/ui/DropDown/DropDownSelect";
import Modal from "components/ui/Modal/Modal";
import { FilterIcon } from "components/ui/icons/FilterIcon/FilterIcon";
import useFilterScroll from "../../hooks/useFilterScroll";
import { ReloadIcon } from "components/ui/icons/ReloadIcon/ReloadIcon";
import { Title } from "components/ui/Texts/Title/Title";
import { fetchJobOffers } from "services";

// Shared
import {
  CareerFiltersInterface,
  filterInterface,
} from "shared/interfaces/dropdowns.interface";

const FilterSection: React.FC<CareerFiltersInterface> = ({
  references,
  work_times,
  contract_types,
  filter,
  setFilter,
  setData,
}) => {
  const t = useTranslations("careerPage");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onChange = (value: filterInterface) => {
    setFilter((prev: any) => ({ ...prev, ...value }));
  };
  const handleSubmit = async () => {
    fetchJobOffers(1, 16, filter).then((data) => {
      if (data.error) {
        return console.error(data.error);
      }
      setData(data.data);
    });
    setIsOpen(false);
  };

  const handleReset = async () => {
    try {
      const data = await fetchJobOffers(1, 16, {
        reference: "",
        contract_type: null,
        work_time: null,
      });
      if (data.error) {
        console.error(data.error);
      } else {
        setFilter({ reference: "", contract_type: null, work_time: null });
        setData(data.data);
        setIsOpen(false);
      }
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };

  const isAbsolute = useFilterScroll();

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Filter"}>
        <div className="flex flex-col flex-wrap items-center justify-center gap-4">
          <div className="flex flex-col flex-wrap items-center justify-center gap-2 py-4 lg:px-20">
            <AutocompleteDropdown
              options={references}
              name="reference"
              value={filter.reference}
              onChange={onChange}
              placeholder={t("refFilter")}
              className="h-[29px] min-w-[230px] px-0 "
            />
            <DropdownSelect
              placeholder={t("contractFilter")}
              value={filter.contract_type}
              name="contract_type"
              options={contract_types}
              onChange={onChange}
              outlined={false}
            />
            <DropdownSelect
              placeholder={t("workTimeFilter")}
              value={filter.work_time}
              name="work_time"
              options={work_times}
              onChange={onChange}
              outlined={false}
            />
          </div>
          <div className="flex gap-3 pb-5">
            <OutlinedButton
              onClick={() => handleReset()}
              text={t("resetFilter")}
              className="min-h-[33px] min-w-[138px] flex-1 border-white-color px-3 text-[11px] font-bold uppercase leading-[16.5px] hover:bg-white-color hover:text-black-color-900"
              icon={
                <ReloadIcon
                  width={14}
                  height={14}
                  fillColor="group-hover:fill-black-color-900"
                />
              }
              iconIsRight={true}
            />
            <PrimaryButton
              className="min-h-[33px] min-w-[119px] flex-1 rounded-[8px] border-white-color px-3 text-[11px] font-bold uppercase leading-[16.5px] hover:bg-white-color hover:text-black-color-900"
              text={t("submitFilter")}
              onClick={() => handleSubmit()}
            />
          </div>
        </div>
      </Modal>
      <div
        className={`${isAbsolute ? "sticky top-16 z-30 bg-white-color py-6 shadow-[1px_4px_10px_0px_#00000040] lg:py-4" : "relative py-6"} flex w-full items-center justify-end gap-6 px-5 lg:justify-center `}
      >
        <AutocompleteDropdown
          options={references}
          name="reference"
          value={filter.reference}
          onChange={onChange}
          placeholder={t("refFilter")}
          className="hidden lg:block focus:ring-0 focus:border-primary-color-500"
        />
        <Title className="absolute left-12 block text-primary-color-500 lg:hidden">
          FILTERS
        </Title>
        <FilterIcon
          onClick={() => setIsOpen((prev) => !prev)}
          height={34}
          width={34}
          className="absolute right-12 block lg:hidden"
        />

        <DropdownSelect
          placeholder={t("contractFilter")}
          value={filter.contract_type}
          name="contract_type"
          options={contract_types}
          onChange={onChange}
          className="hidden lg:block"
        />
        <DropdownSelect
          placeholder={t("workTimeFilter")}
          value={filter.work_time}
          name="work_time"
          options={work_times}
          onChange={onChange}
          className="hidden lg:block"
        />
        <OutlinedButton
          onClick={() => handleReset()}
          text={t("resetFilter")}
          className="group hidden min-w-[173px] flex-1 border-white-color px-3 hover:bg-white-color hover:text-black-color-900 lg:block lg:flex-none"
          icon={
            <ReloadIcon
              width={14}
              height={14}
              fillColor="group-hover:fill-black-color-900"
            />
          }
          iconIsRight={true}
        />
        <PrimaryButton
          className="w-min-[150px] h-min-[33px] hidden flex-1 rounded-[8px] uppercase lg:block lg:flex-none"
          text={t("submitFilter")}
          onClick={() => handleSubmit()}
        />
      </div>
    </>
  );
};
export default FilterSection;
