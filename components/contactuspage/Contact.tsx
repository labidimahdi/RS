"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// components
import { Section } from "components/ui/Sections/Section";
import { SubTitle } from "components/ui/Texts/SubTitle/SubTitle";
import { Text } from "components/ui/Texts/Text/Text";
import { PrimaryButton } from "components/ui/Buttons/PrimaryButton/PrimaryButton";
import { ArrowUpIcon } from "components/ui/icons";
import { CardContainer } from "components/ui/Cards/CardContainer/CardContainer";
// shared
import { ContactFormData } from "shared";

const ContactUsSection: React.FC = () => {
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
    if (!formData.first_name) newErrors.first_name = "field required*";
    if (!formData.last_name) newErrors.last_name = "field required*";
    if (!formData.email) {
      newErrors.email = "field required*";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "email invalid*";
    }
    if (!formData.phone) { newErrors.phone = "field required*";
    } else if (!/^\+\d{1,3}\d{7,14}$/.test(formData.phone)) {
    newErrors.phone = "phone number must include a country code*";
  }
  if (!formData.message) newErrors.message = "field required*";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <Section className="lg:pt-10">
      <CardContainer
        imageSrc="/assets/Submit.svg"
        className="mx-6 rounded-3xl bg-purple-gray-500 px-6 pb-10 pt-4 lg:mx-20 lg:px-20"
      >
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <SubTitle className="flex justify-center py-1 lg:pt-12 lg:text-2xl">
              {t("contactSubTitle")}
            </SubTitle>
            <Text className="flex justify-center pb-1 text-center" size="medium">
              {t("contactText1")}
            </Text>
            <Text className="flex items-center justify-center pb-4" size="medium">
              {t("contactText3")}
            </Text>
            <div className="flex justify-center gap-2 py-2">
              <div className="h-[33px] w-1/2  outline-none lg:h-[50px] lg:w-1/2 mb-4">
                <input
                  name="first_name"
                  className="w-full h-full border-none focus:ring-0 rounded-[15px] pl-2"
                  placeholder={t("placeholderName")}
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
                {errors.first_name && <div className="text-red-500 text-sm pl-2 pt-1">{errors.first_name}</div>}
              </div>
              <div className="h-[33px] w-1/2 outline-none  lg:h-[50px] lg:w-1/2">
                <input
                  name="last_name"
                  className=" w-full h-full border-none focus:ring-0 rounded-[15px] pl-2"
                  placeholder={t("placeholderLastName")}
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
                {errors.last_name && <Text className="text-red-500 text-sm pl-2 pt-1">{errors.last_name}</Text>}
              </div>
            </div>
            <div>
              <div className="flex justify-center py-2 mb-1">
                <input
                  name="email"
                  className="h-[33px] rounded-[15px] pl-2 outline-none border-none focus:ring-0 lg:h-[50px] w-full"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
                {errors.email && <Text className="text-red-500 text-sm my-2 pl-2">{errors.email}</Text>}
                <div>
              <div className="flex justify-center py-2 mb-1">
                <input
                  name="phone"
                  className="h-[33px] rounded-[15px] pl-2 outline-none border-none focus:ring-0 lg:h-[50px] w-full"
                  placeholder={t("placeholderPhone")}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
                {errors.phone && <Text className="text-red-500 text-sm my-2 pl-2">{errors.phone}</Text>}
                </div>
                <div>
              <div className="flex justify-center py-2">
                <textarea
                  name="message"
                  className="h-[86px] w-full rounded-[15px] pl-2 pt-2 text-start outline-none border-none focus:ring-0 lg:h-[131px]"
                  placeholder="Message:"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              {errors.message && <div className="text-red-500 text-sm pl-2 pt-1">{errors.message}</div>}
              </div>
              <div className="flex justify-center pt-4">
                <PrimaryButton
                  icon={
                    <ArrowUpIcon
                      width={15}
                      height={15}
                      fillColor="fill-white-color"
                      className="rotate-90 lg:h-5 lg:w-5"
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
          </div>
        </form>
      </CardContainer>
    </Section>
  );
};

export default ContactUsSection;
