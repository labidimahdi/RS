import { useParams } from "next/navigation";
import DOMPurify from "dompurify";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// components
import { Section } from "components/ui/Sections/Section";
import { Title } from "components/ui/Texts/Title/Title";
import { Text } from "components/ui/Texts/Text/Text";
import { PrimaryButton } from "components/ui/Buttons/PrimaryButton/PrimaryButton";
import ModalSection from "./ModalSection";
import { CloseIcon } from "components/ui/icons/CloseIcon/CloseIcon";
// shared
import { OneCareerDetailsProps } from "shared";

const OneCareerDetails: React.FC<OneCareerDetailsProps> = ({ offer }) => {
  const params = useParams();
  const { slug } = params;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleFormValidated = () => {
    toast.success("Candidacy sent successfully");
    setIsModalOpen(false);
  };
  const handleOverlayClick = (e: any) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };
  const description = DOMPurify.sanitize(offer.description);
  const responsiilitie = DOMPurify.sanitize(offer.your_day_responsabilities);
  return (
    <Section>
      <ToastContainer position="bottom-right" />
      <div className="mx-auto w-full flex-col px-6 lg:px-14">
        <Title>title: {offer.title}</Title>
        <Text className="text-justify">Location: {offer.location}</Text>
        <Text className="text-justify">Sector: {offer.sector}</Text>
        <Text className="text-justify">
          SALARY: According to candidate's profile
        </Text>
        <PrimaryButton
          text="Apply for the job"
          className="my-4 mb-8"
          onClick={handleButtonClick}
        />
        <Text className="my-4 text-justify">
          With 11713 employees and 408 establishments, the AVEC Group ranks
          among the top 10 French groups involved in healthcare, whether in the
          city, in hospitals, at home or in retirement homes. With its 900
          doctors, the Group is the leading global healthcare player in many
          regions. The mission of the AVEC Group is "to help as many people as
          possible to live in good health for as long as possible", its raison
          d'être. It is deploying an innovative e-health platform and is
          pioneering a new model enabling access to care and prevention for as
          many people as possible.
        </Text>
        <div className="group relative mt-4">
          <Title>Job Description</Title>
          <div className="h-1 w-[80px] bg-primary-color-500/50 ">
            <span className=" bottom- absolute left-0 h-1 w-0 bg-primary-color-500 transition-all  group-hover:w-[80px]"></span>
          </div>
        </div>
        <div className="group relative mt-4">
          <Text className="my-4 text-justify">{description}</Text>
          <Title>Your day to day responsibilities</Title>
          <div className="h-1 w-[80px] bg-primary-color-500/50 ">
            <span className=" bottom- absolute left-0 h-1 w-0 bg-primary-color-500 transition-all  group-hover:w-[80px]"></span>
          </div>
        </div>
        <div className="group relative mt-4">
          <Text className="my-4 text-justify">
            {responsiilitie}
          </Text>
          <Title>requirements</Title>
          <div className="h-1 w-[80px] bg-primary-color-500/50 ">
            <span className=" bottom- absolute left-0 h-1 w-0 bg-primary-color-500 transition-all  group-hover:w-[80px]"></span>
          </div>
          {offer.requirements && offer.requirements.length > 0 ? (
            <ul>
              {offer.requirements.map((requirement: string, index: number) => (
                <li key={index}>
                  <Text className="mt-4 text-justify">{requirement}</Text>
                </li>
              ))}
            </ul>
          ) : (
            <Text>No requirements</Text>
          )}
          <Text className="mb-4 text-justify">skills: </Text>
        </div>
        <div className="group relative mt-4">
          <Title>Your education level</Title>
          <div className="h-1 w-[80px] bg-primary-color-500/50 ">
            <span className=" bottom- absolute left-0 h-1 w-0 bg-primary-color-500 transition-all  group-hover:w-[80px]"></span>
          </div>
          <Text className="mt-4 text-justify">
            Skills required : {offer.education_level}
          </Text>
          <Text className="mb-4 text-justify">
            Access to all AVEC Group <br /> job offers Group health insurance
            <br />
            Smartphone
          </Text>
        </div>
        <div className="group relative mt-4">
          <Title>Contract information</Title>
          <div className="h-1 w-[80px] bg-primary-color-500/50 ">
            <span className=" bottom- absolute left-0 h-1 w-0 bg-primary-color-500 transition-all  group-hover:w-[80px]"></span>
          </div>

          <Text className="mt-4">Work time: {offer.work_time}</Text>
          <Text>Contract type : {offer.contract_type}</Text>
          <Text>Start date: {offer.start_date}</Text>
          <Text className="mb-4">
            Salary : {offer.min_salary}
            {offer.max_salary ? ` - ${offer.max_salary}` : ""}
          </Text>
        </div>
        <div className="group relative mt-4">
          <Title>Further information</Title>
          <div className="h-1 w-[80px] bg-primary-color-500/50 ">
            <span className=" bottom- absolute left-0 h-1 w-0 bg-primary-color-500 transition-all  group-hover:w-[80px]"></span>
          </div>
          <Text className="mt-4">Reference : {offer.reference} </Text>
          <Text>Published on {offer.show_date}</Text>
          <Text className="mb-4">Contact: {offer.contact_email}</Text>
        </div>
        <div className="mt-8 flex max-w-screen-sm  items-start gap-2 lg:flex-row lg:gap-2">
          {offer.keywords && offer.keywords.length > 0 ? (
          offer.keywords.map((keywords: string, index: any) => (
            <div
              key={index}
              className={`flex h-[14px] w-fit items-center justify-center rounded-[24px] border-2 border-solid border-black p-2 text-center lg:h-[23px] lg:w-fit  `}
            >
              <Text className="text-[7px] font-bold lg:text-[10px]">
                {keywords}
              </Text>
            </div>
          ))):("")
        }
        </div>
        
        {isModalOpen && (
          <div
            className="fixed left-0 top-0 z-50 h-screen w-full bg-black bg-opacity-40 "
            onClick={handleOverlayClick}
          >

            <div className="mx-2 mt-16 flex h-4/6 justify-center overflow-auto rounded-[15px] bg-white px-6 shadow-2xl lg:mx-40 lg:h-5/6 lg:px-14">
              <div onClick={handleCloseModal} className="cursor-pointer">
                <CloseIcon
                  height={20}
                  width={20}
                  className="fixed right-4 z-40 mt-2 fill-primary-color-500 lg:right-48 lg:h-8  lg:w-8"
                />
              </div>
              <ModalSection
                offer_id={slug}
                onFormValidated={handleFormValidated}
              />
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default OneCareerDetails;
