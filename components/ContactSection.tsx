"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//  Components
import { ArrowUpIcon } from "./ui/icons";
import { PrimaryButton } from "./ui/Buttons/PrimaryButton/PrimaryButton";
import { SubTitle } from "./ui/Texts/SubTitle/SubTitle";
import { Text } from "./ui/Texts/Text/Text";
import { Section } from "./ui/Sections/Section";
// shared
import { ContactFormData } from "shared";

const ContactSection: React.FC = () => {
  const t = useTranslations("ContactSection");
  const [formData, setFormData] = useState<ContactFormData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const url = `${process.env.NEXT_PUBLIC_DIGITAL_BACKEND}/contacts`;
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [responseMessage, setResponseMessage] = useState<string>("");
  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.first_name) newErrors.first_name = t("required");
    if (!formData.last_name) newErrors.last_name = t("required");
    if (!formData.email) {
      newErrors.email = t("required");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("emailinvalid");
    }
    if (!formData.phone) {
      newErrors.phone = t("required");
    } else if (!/^\+\d{1,3}\d{7,14}$/.test(formData.phone)) {
      newErrors.phone = t("country");
    }
    if (!formData.message) newErrors.message = t("required");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.status === 201) {
          const data = await response.json();
          setResponseMessage("Message sent successfully");
          toast.success("Message sent successfully");
          // Reset form data
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            message: "",
          });
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
  return (
    <Section className="py-2 " bgImage="bg-wave_mobile sm:bg-wave">
      <div className="relative">
        <div className="flex-col-2 mb-20 flex justify-center">
          <div className="hidden h-full w-full justify-center pt-20 lg:flex">
            <Image
              src="/assets/Submit.svg"
              alt="Submit"
              width="544"
              height="429"
            />
          </div>
          <div className="h-full w-full flex-col justify-center px-4 pt-4 mt-4 lg:translate-y-14 lg:px-4">
            <form onSubmit={handleSubmit} noValidate>
              <SubTitle className="flex justify-center py-1 lg:text-2xl">
                {t("contactSubTitle")}
              </SubTitle>
              <Text
                className="flex justify-center pb-1 text-center"
                size="meduim"
              >
                {t("contactText1")}
              </Text>
              <Text
                className="flex items-center justify-center pb-4"
                size="meduim"
              >
                {t("contactText3")}
              </Text>
              <div className="sm:px-32 lg:px-12 xl:px-28 2xl:px-32 px-6">
              <div className="flex w-full justify-center gap-2 py-2">
                <div className="flex w-1/2 justify-end">
                  <div className="flex w-full flex-col">
                    <input
                      name="first_name"
                      className="h-[33px] w-full rounded-[15px] border-none pl-2 outline-none focus:ring-0 lg:h-[50px]"
                      placeholder={t("placeholderName")}
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                    />
                    {errors.first_name && (
                      <div className="pl-2 pt-1 text-sm text-red-500">
                        {errors.first_name}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex w-1/2 justify-start">
                  <div className="flex w-full flex-col">
                    <input
                      name="last_name"
                      className="h-[33px]  w-full rounded-[15px] border-none pl-2 outline-none  focus:ring-0 lg:h-[50px]"
                      placeholder={t("placeholderLastName")}
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                    />
                    {errors.last_name && (
                      <Text className="pl-2 pt-1 text-sm text-red-500">
                        {errors.last_name}
                      </Text>
                    )}
                  </div>
                </div>
              </div>
              
                <div>
                <div className="flex justify-center py-2">
                  <input
                    name="email"
                    className="h-[33px] w-full rounded-[15px] border-none pl-2 outline-none  focus:ring-0 lg:h-[50px]"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                {errors.email && <Text className="text-red-500 text-sm pl-2">{errors.email}</Text>}
                </div>
                <div className="flex justify-center py-2">
                  <input
                  name="phone"
                    className="h-[33px] w-full rounded-[15px] border-none pl-2 outline-none  focus:ring-0 lg:h-[50px]"
                    placeholder={t("placeholderPhone")}
                    value={formData.phone}
                  onChange={handleChange}
                  required
                  />
                </div>
                  {errors.phone && <Text className="text-red-500 text-sm pl-2">{errors.phone}</Text>}
                <div className="flex justify-center py-2">
                  <textarea
                  name="message"
                    className="h-[86px] w-full rounded-[15px] border-none pl-2 pt-2 text-start outline-none  focus:ring-0 lg:h-[131px]"
                    placeholder="Message:"
                    value={formData.message}
                  onChange={handleChange}
                  />
                </div>
                {errors.message && <div className="text-red-500 text-sm pl-2">{errors.message}</div>}
                <div className="flex justify-center pt-4">
                  <PrimaryButton
                    icon={
                      <ArrowUpIcon
                        width={15}
                        height={15}
                        fillColor="fill-white-color"
                        className="rotate-180 lg:h-5 lg:w-5"
                      />
                    }
                    iconIsRight={true}
                    text={t("submit")}
                    rounded="rounded-full"
                    className="lg:text-xl"
                  />
                </div>
                <ToastContainer position="bottom-right" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
