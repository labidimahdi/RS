"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// components
import { PrimaryButton } from "components/ui/Buttons/PrimaryButton/PrimaryButton";
import { Section } from "components/ui/Sections/Section";
import { Text } from "components/ui/Texts/Text/Text";
import { Title } from "components/ui/Texts/Title/Title";
import { CloseIcon } from "components/ui/icons/CloseIcon/CloseIcon";
import DropdownForm from "components/ui/DropDown/DropDownForm";
import InputForm from "components/ui/Inputs/InputForm";
// shared
import type { FormData } from "shared/interfaces/dropdowns.interface";
import {
  ModalSectionInterface,
  ValidationErrors,
} from "shared/interfaces/dropdowns.interface";
enum Gender {
  Homme = "Homme",
  Femme = "Femme",
}
const ModalSection: React.FC<ModalSectionInterface> = ({ offer_id,onFormValidated }) => {
  const url = `${process.env.NEXT_PUBLIC_DIGITAL_BACKEND}/job-candidacy`;
  const [responseMessage, setResponseMessage] = useState<string>("");

  {
    /* Drop Down */
  }
  const [gender, setGender] = useState<any>("");
  const [experience, setExperience] = useState<string>("");

  const [formData, setFormData] = useState<FormData>({
    job_offer_id: "",
    gender: Gender.Homme,
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
    sub_address: "",
    postal_code: "",
    city: "",
    driving_license: null,
    personal_vehicle: null,
    curriculum_vitae: null,
    cover_letter: null,
    experience: "",
    note: "",
  });
  //handle submit validation
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: ValidationErrors = {};
    if (!gender) newErrors.gender = "field required*";
    if (!formData.first_name) newErrors.first_name = "field required*";
    if (!formData.last_name) newErrors.last_name = "field required*";
    if (!formData.email) {
      newErrors.email = "field required*";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "email invalid*";
    }
    if (!formData.phone_number) {
      newErrors.phone_number = "field required*";
    } else if (!/^\+\d{1,3}\d{7,14}$/.test(formData.phone_number)) {
      newErrors.phone_number = "phone number must include a country code*";
    }
    if (!formData.address) newErrors.address = "field required*";
    if (!formData.postal_code) newErrors.postal_code = "field required*";
    if (!formData.city) newErrors.city = "field required*";
    if (!experience) newErrors.experience = "field required*";
    if (!formData.curriculum_vitae)
      newErrors.curriculum_vitae = "field required*";
    setErrors(newErrors);
     return Object.keys(newErrors).length === 0;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  //handle Gender change
  const handleGenderChange = (value: { gender: Gender }) => {
    setGender(value.gender);
    setFormData((prevData) => ({
      ...prevData,
      gender: value.gender,
    }));
  };
  //handle Experience change
  const handleExperienceChange = (value: { experience: string }) => {
    setExperience(value.experience);
    setFormData((prevData) => ({
      ...prevData,
      experience: value.experience,
    }));
  };
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      job_offer_id: offer_id || "",
    }));
  }, [offer_id]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const form = new FormData();
      form.append('job_offer_id', formData.job_offer_id);
      form.append('gender', formData.gender);
      form.append('first_name', formData.first_name);
      form.append('last_name', formData.last_name);
      form.append('email', formData.email);
      form.append('phone_number', formData.phone_number);
      form.append('address', formData.address);
      form.append('sub_address', formData.sub_address);
      form.append('postal_code', formData.postal_code);
      form.append('city', formData.city);
      form.append('driving_license', formData.driving_license);
      form.append('personal_vehicle', formData.personal_vehicle);
      form.append('cover_letter', formData.cover_letter);
      form.append('experience', formData.experience);
      form.append('note', formData.note);
      form.append('curriculum_vitae', formData.curriculum_vitae);    
      try {
       
        const response = await fetch(url, {
          method: "POST",
          body: form,
        });

        if (response.status === 201) {
          const data = await response.json();
          setResponseMessage("Candidacy sent successfully");
          onFormValidated();
        } else {
          const errorData = await response.json();
          setResponseMessage(`Error: ${errorData.message}`);
          toast.error(`Error: ${errorData.message}`);
        }
      } catch (error) {
        setResponseMessage(`Error: ${(error as Error).message}`);
        toast.error(`Error: ${(error as Error).message}`);
      }
    }
  };
  // handle Drag and Drop
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [filesplus, setFilesplus] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setFiles([file]);

      setFormData((prevData) => ({ ...prevData, curriculum_vitae: file }));
      e.dataTransfer.clearData();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles([file]);
      setFormData((prevData) => ({ ...prevData, curriculum_vitae: file }));
    }
  };
  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setFormData((prevData) => ({ ...prevData, curriculum_vitae: null }));
  };
  {
    /* add files handler*/
  }
  const handleDropplus = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const fileplus = e.dataTransfer.files[0];
      setFilesplus([fileplus]);
      setFormData((prevData) => ({ ...prevData, cover_letter: fileplus }));
      e.dataTransfer.clearData();
    }
  };

  const handleFileplusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileplus = e.target.files[0];
      setFilesplus([fileplus]);
      setFormData((prevData) => ({ ...prevData, cover_letter: fileplus }));
    }
  };
  const handleRemoveFileplus = (index: number) => {
    setFilesplus((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setFormData((prevData) => ({ ...prevData, cover_letter: null }));
  };

  return (
    <Section className="flex justify-center">
      <form onSubmit={handleSubmit} noValidate>
        <div className="mx-auto w-full flex-col justify-center rounded-[15px] lg:w-2/3">
          <Title className="my-4 flex justify-center pt-4">APPLY</Title>
          <div className="flex justify-center">
            <div className="mx-auto flex-col justify-center px-6 lg:px-20">
              <label className="px-auto mx-auto w-fit flex-col justify-center">
                <Text className="my-2 text-[13px] font-bold lg:text-[15px]">
                  You Are
                </Text>
                <DropdownForm
                  name="gender"
                  options={[
                    { id: 1, value: "Homme", label: "Male" },
                    { id: 2, value: "Femme", label: "Female" },
                  ]}
                  value={gender}
                  className="my-2 w-full rounded-[10px] text-gray-900 lg:w-80"
                  onChange={handleGenderChange}
                  placeholder="Gender*"
                />
                {errors.gender && (
                  <Text className="mb-4 text-red-500">{errors.gender}</Text>
                )}
              </label>
              <label className="gap-4 lg:flex">
                <div>
                  <InputForm
                    name="first_name"
                    required
                    placeholder="First Name*"
                    value={formData.first_name}
                    onChange={handleChange}
                    type="text"
                    className="mb-2 lg:w-80"
                  />
                  {errors.first_name && (
                    <Text className="mb-4 text-red-500">
                      {errors.first_name}
                    </Text>
                  )}
                </div>
                <div>
                  <InputForm
                    name="last_name"
                    required
                    placeholder="Last Name*"
                    value={formData.last_name}
                    onChange={handleChange}
                    type="text"
                    className="mb-2 lg:w-80"
                  />
                  {errors.last_name && (
                    <Text className="mb-4 text-red-500">
                      {errors.last_name}
                    </Text>
                  )}
                </div>
              </label>
              <div className="">
                <Text className="my-2 text-[13px] font-bold lg:text-[15px]">
                  Contact
                </Text>
                <label className="justify-start gap-4 lg:flex">
                  <div className="relative my-2 mb-10 h-10 w-full rounded-[10px] lg:w-80">
                    <InputForm
                      name="email"
                      required
                      placeholder="Email*"
                      type="email"
                      className="mb-2 lg:w-80"
                      value={formData.email}
                      onChange={handleChange}
                      icon
                      iconIsRight
                      ImageSrc="/assets/FooterAssets/Email.svg"
                    />
                    {errors.email && (
                      <Text className="mb-6 text-red-500">{errors.email}</Text>
                    )}
                  </div>
                  <div className="relative my-2 mb-10 h-10 w-full rounded-[10px] lg:w-80">
                    <InputForm
                      name="phone_number"
                      required
                      placeholder="Phone*"
                      type="tel"
                      className="mb-2 lg:w-80"
                      value={formData.phone_number}
                      onChange={handleChange}
                      icon
                      iconIsRight
                      ImageSrc="/assets/FooterAssets/phone.svg"
                    />
                    {errors.phone_number && (
                      <Text className="mb-6 text-red-500">
                        {errors.phone_number}
                      </Text>
                    )}
                  </div>
                </label>
              </div>
              <Text className="my-2 text-[13px] font-bold lg:text-[15px]">
                Address
              </Text>
              <label className="justify-start gap-4 lg:flex">
                <div>
                  <InputForm
                    name="address"
                    required
                    placeholder="Address*"
                    value={formData.address}
                    onChange={handleChange}
                    type="text"
                    className="mb-2 lg:w-80"
                  />
                  {errors.address && (
                    <Text className="mb-4 text-red-500">{errors.address}</Text>
                  )}
                </div>
                <InputForm
                  name="sub_address"
                  placeholder="SubAddress"
                  value={formData.sub_address}
                  onChange={handleChange}
                  type="text"
                  className="lg:w-80"
                />
              </label>
              <label className="justify-start gap-4 lg:flex">
                <div>
                  <InputForm
                    name="postal_code"
                    required
                    placeholder="Postal code*"
                    value={formData.postal_code}
                    onChange={handleChange}
                    type="text"
                    className="mb-2 lg:w-80"
                  />
                  {errors.postal_code && (
                    <Text className="mb-4 text-red-500">
                      {errors.postal_code}
                    </Text>
                  )}
                </div>
                <div>
                  <InputForm
                    name="city"
                    required
                    placeholder="City*"
                    value={formData.city}
                    onChange={handleChange}
                    type="text"
                    className="mb-2 lg:w-80"
                  />
                  {errors.city && (
                    <Text className="mb-4 text-red-500">{errors.city}</Text>
                  )}
                </div>
              </label>
              <Text className="my-2 text-[13px] font-bold lg:text-[15px]">
                Means of transport
              </Text>
              <div className="gap-20 pt-2 lg:flex">
                <div>
                  <label className="text-[13px] lg:text-[15px]">
                    Do you have a "B" driving license?*
                    <div className="flex items-center lg:pb-0">
                      <InputForm
                        id="yes"
                        name="driving_license"
                        value="yes"
                        onChange={handleChange}
                        type="radio"
                        className="my-2 mr-1 h-2 w-2 bg-white p-[6px] text-primary-color-500 outline outline-2 outline-black checked:bg-primary-color-500 checked:outline-primary-color-500"
                      />
                      <label htmlFor="yes" className="inline-flex pl-2 pr-8">
                        YES
                      </label>
                      <InputForm
                        id="no"
                        name="driving_license"
                        value="No"
                        onChange={handleChange}
                        type="radio"
                        className="my-2 mr-1 h-2 w-2 bg-white p-[6px] text-primary-color-500 outline outline-2 outline-black checked:bg-primary-color-500 checked:outline-primary-color-500"
                      />
                      <label htmlFor="no" className="inline-flex pl-2 pr-8">
                        No
                      </label>
                    </div>
                  </label>
                  {errors.driving_license && (
                    <Text className="mb-4 text-red-500">
                      {errors.driving_license}
                    </Text>
                  )}
                </div>
                <div>
                  <label className="text-[13px] lg:text-[15px]">
                    Do you have a personnel car?*
                    <div className="flex items-center">
                      <InputForm
                        id="Yes"
                        name="personal_vehicle"
                        onChange={handleChange}
                        type="radio"
                        value="yes"
                        className="my-2 mr-1 h-2 w-2 bg-white p-[6px] text-primary-color-500 outline outline-2 outline-black checked:bg-primary-color-500 checked:outline-primary-color-500"
                      />
                      <label htmlFor="Yes" className="inline-flex pl-2 pr-8">
                        YES
                      </label>
                      <InputForm
                        id="No"
                        name="personal_vehicle"
                        onChange={handleChange}
                        type="radio"
                        value="no"
                        className="my-2 mr-1 h-2 w-2 bg-white p-[6px] text-primary-color-500 outline outline-2 outline-black checked:bg-primary-color-500 checked:outline-primary-color-500"
                      />
                      <label htmlFor="No" className="inline-flex pl-2 pr-8">
                        No
                      </label>
                    </div>
                  </label>
                  {errors.personal_vehicle && (
                    <Text className="mb-4 text-red-500">
                      {errors.personal_vehicle}
                    </Text>
                  )}
                </div>
              </div>
              <div className="w-ful relative mx-auto flex-col ">
                <Text className="my-2 text-[13px] font-bold lg:text-[15px]">
                  Experience
                </Text>
                <div className="flex ">
                  <DropdownForm
                    name="experience"
                    options={[
                      { id: 1, value: "Junior", label: "Junior" },
                      { id: 2, value: "Medium", label: "Medium" },
                      { id: 3, value: "Senior", label: "Senior" },
                    ]}
                    value={experience}
                    className="my-2 mb-2 w-full rounded-[10px] text-gray-400 lg:w-80"
                    onChange={handleExperienceChange}
                    placeholder="Experience*"
                  />
                </div>
                {errors.experience && (
                  <Text className="mb-4 text-red-500">{errors.experience}</Text>
                )}
              </div>
              <Text className="my-2 text-[13px] font-bold lg:text-[15px]">
                Import your resume (optional)
              </Text>
              <div>
                <label
                  className="flex justify-start gap-4"
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <div
                    className={`relative my-2 h-10 w-full cursor-pointer rounded-[10px] ${
                      isDragging
                        ? "bg-gray-300"
                        : "bg-primary-color-500 bg-opacity-5"
                    }`}
                  >
                    <input
                      ref={inputRef}
                      name="curriculum_vitae"
                      type="file"
                      multiple
                      className="mb-6 flex h-10 w-full cursor-pointer rounded-[10px] pl-12 opacity-0 outline-none"
                      onChange={handleFileChange}
                    />
                    <div className="absolute left-0 top-0 flex h-full w-full items-center">
                      <Image
                        src="/assets/Icons/drag.svg"
                        alt="logo"
                        width={18}
                        height={18}
                        className="absolute left-4 top-3 scale-110"
                      />
                      <span className="pl-12 text-[13px] text-gray-400 lg:text-[15px]">
                        Drag and drop files to attach them,
                      </span>
                      <span className="hidden pl-1 text-[13px] text-cyan-500 lg:flex lg:text-[15px]">
                        {" "}
                        or browse them.
                      </span>
                    </div>
                  </div>
                </label>
                {errors.curriculum_vitae && (
                  <Text className="mb-4 text-red-500">
                    {errors.curriculum_vitae}
                  </Text>
                )}
                {files.length > 0 && (
                  <div className="my-4">
                    <h2 className="mb-2">Selected Files:</h2>
                    <ul>
                      {Array.from(files).map((file, index) => (
                        <li key={index} className="mb-1">
                          <div className="my-2 flex h-10 w-full items-center rounded-[10px] bg-primary-color-500 bg-opacity-5 pl-4 text-primary-color-500">
                            <div className="relative flex w-4/5 rounded-2xl border-2 border-primary-color-500 bg-white pl-10  lg:w-2/5">
                              <Image
                                src="/assets/Icons/file.svg"
                                alt="logo"
                                width={18}
                                height={18}
                                className="absolute left-3 top-1 "
                              />
                              {file.name}
                              <button onClick={() => handleRemoveFile(index)}>
                                <CloseIcon
                                  height={18}
                                  width={18}
                                  className="absolute right-2 top-1 cursor-pointer fill-primary-color-500"
                                  onClick={() => handleRemoveFile(index)}
                                />
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <Text className="my-2 text-[13px] font-bold lg:text-[15px]">
                Add a cover letter (optional)
              </Text>
              <div>
                <label
                  className="flex justify-start gap-4"
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={handleDropplus}
                >
                  <div
                    className={`relative my-2 h-10 w-full cursor-pointer rounded-[10px] ${
                      isDragging
                        ? "bg-gray-300"
                        : "bg-primary-color-500 bg-opacity-5"
                    }`}
                  >
                    <input
                      ref={inputRef}
                      type="file"
                      name="cover_letter"
                      multiple
                      className="mb-6 flex h-10 w-full cursor-pointer rounded-[10px] pl-12 opacity-0 outline-none"
                      onChange={handleFileplusChange}
                    />
                    <div className="absolute left-0 top-0 flex h-full w-full items-center">
                      <Image
                        src="/assets/Icons/drag.svg"
                        alt="logo"
                        width={18}
                        height={18}
                        className="absolute left-4 top-3 scale-110"
                      />
                      <span className="pl-12 text-[13px] text-gray-400 lg:text-[15px]">
                        Drag and drop files to attach them,
                      </span>
                      <span className="hidden pl-1 text-[13px] text-cyan-500 lg:flex lg:text-[15px]">
                        {" "}
                        or browse them.
                      </span>
                    </div>
                  </div>
                </label>
                {filesplus.length > 0 && (
                  <div className="my-4">
                    <h2 className="mb-2">Selected Files:</h2>
                    <ul>
                      {Array.from(filesplus).map((file, i) => (
                        <li key={i} className="mb-1">
                          <div className="my-2 flex h-10 w-full items-center rounded-[10px] bg-primary-color-500 bg-opacity-5 pl-4 text-primary-color-500">
                            <div className="relative flex w-4/5 rounded-2xl border-2 border-primary-color-500 bg-white pl-10 lg:w-2/5 ">
                              <Image
                                src="/assets/Icons/file.svg"
                                alt="logo"
                                width={18}
                                height={18}
                                className="absolute left-3 top-1 "
                              />
                              {file.name}
                              <button onClick={() => handleRemoveFileplus(i)}>
                                <CloseIcon
                                  height={18}
                                  width={18}
                                  className="absolute right-2 top-1 cursor-pointer fill-primary-color-500"
                                  onClick={() => handleRemoveFileplus(i)}
                                />
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <Text className="my-2 text-[13px] font-bold lg:text-[15px]">
                Would you like to add any information? (optional)
              </Text>
              <label className="flex justify-start gap-4">
                <textarea
                  name="note"
                  placeholder="500 caractères maximum"
                  className="my-2 mb-6 flex h-60 w-full rounded-[10px] border-none bg-primary-color-500 bg-opacity-5 p-2 outline-none focus:ring-0"
                  onChange={handleChange}
                  value={formData.note}
                ></textarea>
              </label>
              <div className="flex justify-center pb-4 text-center">
                <Text className="inline-block justify-center">
                  By clicking on "Send my application", you agree to
                  <span className="inline-block pl-1 text-primary-color-500">
                    {" "}
                    our Privacy Policy.
                  </span>
                </Text>
              </div>
              <div className="mb-8 flex justify-center py-4">
                <PrimaryButton
                  type="submit"
                  text="send my application"
                  className="uppercase"
                />
              </div>
              <ToastContainer position="bottom-right" />
            </div>
          </div>
        </div>
      </form>
    </Section>
  );
};

export default ModalSection;
