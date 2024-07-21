import { useTranslations } from "next-intl";
import React from "react";

// components
import CtaBrochure from "components/ui/Ctas/CtaBrochure/CtaBrochure";
import { Title } from "components/ui/Texts/Title/Title";
// shared
import { contact } from "shared/data";
// hooks
import usePath from "hooks/usePath";

const Brochure = () => {
  const t = useTranslations("CtaBrochure");
  const localizedPath = usePath(contact);
  return (
    
    <CtaBrochure
      bgImage="bg-cta_mobile lg:bg-cta"
      buttonPath={localizedPath}
      buttonText={t("Download")}
    >
      <Title className="lg:text-3xl ">
        {t("ctaOneServicesdescription1")}{" "}<br className="flex lg:hidden" />
        {t("ctaOneServicesdescription2")}
      </Title>
    </CtaBrochure>
  );
};

export default Brochure;