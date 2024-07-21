import { useTranslations } from 'next-intl';

// components
import { CardContainer } from 'components/ui/Cards/CardContainer/CardContainer';
import { Section } from 'components/ui/Sections/Section';
import { Text } from 'components/ui/Texts/Text/Text';
import { Title } from 'components/ui/Texts/Title/Title';

const WebDevelopmentDetails = () => {
    const t = useTranslations("WebDevelopment");
    return (
      <Section
        className=" text-primary-color-500"
      >
        <CardContainer
          reverse={true}
          imageSrc="/assets/ServicesPageAssets/webdev1.svg"
          className="px-6 lg:px-14"
        >
          <Title className='mb-4 capitalize'>{t("detailstitle")}</Title>
          <Text
            className="pb-2 text-justify text-black-color-900 lg:pt-4"
            size="medium"
          >
            {t("text")}
          </Text>
        </CardContainer>
      </Section>
    );
  };

export default WebDevelopmentDetails