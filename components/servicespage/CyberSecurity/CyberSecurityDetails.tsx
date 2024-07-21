import { useTranslations } from 'next-intl';

// components
import { CardContainer } from 'components/ui/Cards/CardContainer/CardContainer';
import { Section } from 'components/ui/Sections/Section';
import { Text } from 'components/ui/Texts/Text/Text';
import { Title } from 'components/ui/Texts/Title/Title';

const CyberSecurityDetails = () => {
    const t = useTranslations("CyberSecurity");
    return (
      <Section
        className="text-primary-color-500"
      >
        <CardContainer
          reverse={true}
          imageSrc="/assets/ServicesPageAssets/cyber.svg"
          className="px-6 lg:px-14"
        >
          <Title className='mb-4 font-bold'>{t("detailstitle")}</Title>
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
        </CardContainer>
      </Section>
    );
  };

export default CyberSecurityDetails