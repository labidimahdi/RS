import type { Meta, StoryObj } from "@storybook/react";

// Component
import { VerticalAccordion } from "./VerticalAccordion";
import { Text } from "../../Texts/Text/Text";

const meta = {
  title: "Design system/Accordions/VerticalAccordion",
  component: VerticalAccordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Vertical Accordion component"].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof VerticalAccordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FaqVerticalAccordion: Story = {
  args: {
    data: [
      {
        title: "Qu'est-ce que votre entreprise fait ?",
        content: (
          <Text className="text-justify lg:text-[20px]">
            Notre entreprise est spécialisée dans le développement de sites web
            sur mesure pour les entreprises de toutes tailles et de tous
            secteurs. Nous concevons des sites web uniques, adaptés aux besoins
            spécifiques de nos clients, en mettant l' accent sur la
            convivialité, le design et les fonctionnalités.
          </Text>
        ),
      },
      {
        title: "Quels sont les langages et technologies que vous utilisez ",
        content: (
          <Text className="text-justify lg:text-[20px]">
            Nous utilisons une combinaison de langages et de technologies pour
            créer des sites web de qualité. Cela inclut HTML5, CSS3, JavaScript,
            PHP, MySQL, ainsi que des CMS (systèmes de gestion de contenu) tels
            que WordPress, Joomla, Drupal, etc. Nous restons également à jour
            avec les dernières tendances et technologies du web pour offrir des
            solutions innovantes à nos clients.
          </Text>
        ),
      },
      {
        title: "Combien de temps faut-il pour développer un site web ?",
        content: (
          <Text className="text-justify lg:text-[20px]">
            La durée de développement d'un site web dépend de plusieurs
            facteurs, notamment la taille et la complexité du projet, ainsi que
            les fonctionnalités requises. Nous travaillons en étroite
            collaboration avec nos clients pour établir un calendrier réaliste
            et nous efforçons de respecter les délais convenus autant que
            possible.
          </Text>
        ),
      },
      {
        title: "Qu'est-ce que votre entreprise fait ?",
        content: (
          <Text className="text-justify lg:text-[20px]">
            Notre entreprise est spécialisée dans le développement de sites web
            sur mesure pour les entreprises de toutes tailles et de tous
            secteurs. Nous concevons des sites web uniques, adaptés aux besoins
            spécifiques de nos clients, en mettant l'accent sur la convivialité,
            le design et les fonctionnalités.
          </Text>
        ),
      },
      {
        title: "Qu'est-ce que votre entreprise fait ?",
        content: (
          <Text className="text-justify lg:text-[20px]">
            Notre entreprise est spécialisée dans le développement de sites web
            sur mesure pour les entreprises de toutes tailles et de tous
            secteurs. Nous concevons des sites web uniques, adaptés aux besoins
            spécifiques de nos clients, en mettant l'accent sur la convivialité,
            le design et les fonctionnalités.
          </Text>
        ),
      },
    ],
  },
};
