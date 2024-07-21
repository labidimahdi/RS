import { useTranslations } from "next-intl";
import React from "react";

// components
import PrimaryCta from "components/ui/Ctas/PrimaryCta/PrimaryCta";
import { Title } from "components/ui/Texts/Title/Title";

// shared
import { contact } from "shared/data";

// hooks
import usePath from "hooks/usePath";

const CtaSection = () => {
  const t = useTranslations("CtaSection");
  const localizedPath = usePath(contact);
  return (
    <PrimaryCta
      bgImage="bg-cta_mobile lg:bg-cta"
      buttonPath={localizedPath}
      buttonText={t(contact)}
    >
      <Title className="lg:text-3xl xl:text-4xl">
        {t("ctadescription1")}
        <br className="lg:hidden" /> {t("ctadescription2")}
      </Title>
    </PrimaryCta>
  );
};

export default CtaSection;
