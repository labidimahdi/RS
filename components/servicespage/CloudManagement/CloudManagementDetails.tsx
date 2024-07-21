import { useTranslations } from 'next-intl';

// components
import { CardContainer } from 'components/ui/Cards/CardContainer/CardContainer';
import { Section } from 'components/ui/Sections/Section';
import { Text } from 'components/ui/Texts/Text/Text';
import { Title } from 'components/ui/Texts/Title/Title';

const CloudManagementDetails = () => {
    const t = useTranslations("CloudManagement");
    return (
      <Section
        className="text-primary-color-500"
      >
        <CardContainer
          reverse={true}
          imageSrc="/assets/ServicesPageAssets/cloud.svg"
          className="px-6 lg:px-14"
        >
          <Title className='mb-4'>{t("detailstitle")}</Title>          
          <Text
            className="pb-2 text-justify font-bold text-black-color-900 lg:pt-4"
            size="medium"
          >
            {t("text1")}
          </Text>
          <Text
            className="pb-2 text-justify text-black-color-900 lg:pt-4"
            size="medium"
          >
            {t("text2")}
          </Text>
          <Text
            className="text-justify text-black-color-900  lg:py-2"
            size="medium"
          >
           {t("text3")}
          </Text>
        </CardContainer>
      </Section>
    );
  };

export default CloudManagementDetails