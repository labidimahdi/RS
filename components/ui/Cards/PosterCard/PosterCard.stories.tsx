import type { Meta, StoryObj } from "@storybook/react";

// Component
import PosterCard from "./PosterCard";

const meta = {
  title: "Design system/Cards/PosterCard",
  component: PosterCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ["Poster Card component :"].join("  \n"),
      },
    },
  },
} satisfies Meta<typeof PosterCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardPosterCard: Story = {
  args: {
    hovered:false,
    data: {
      id:"1",
      covers: [
        "1715339530012.webp"
    ],
    covers_type: "hr",
      title:
        "RS Technologie Job Dating is a recruitment event in Tunis that brings together regional talent and IT professionals.",
      text: "Ceci est le texte de la carte 1",
      content:
        "To support the employability of young people in Tunisia and provide them with greater access to opportunities, RS Technologies, a rapidly expanding digital services company and major player in the, a rapidly expanding digital services company and major player in the xxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx----------------------------------------------------------------------",
      image: ["image1.jpg",],
      link: "/assets/poster/job_3.png",
      tags: [{"id" :"01","name":"TAG"}, {"id" :"01","name":"TAG"}, {"id" :"01","name":"TAG"}],
      createdAt: "07/11/1896",
      author_fullname: "Youssef",
    },
  },
};

export const V2rPosterCard: Story = {
  args: {
    hovered:true,
    data: {
      id:"2",
      covers: [
        "1715339530012.webp"
    ],
    covers_type: "v2r",
      title:
        "RS Technologie Job Dating is a recruitment event in Tunis that brings together regional talent and IT professionals.",
      text: "Ceci est le texte de la carte 1",
      content:
        "To support the employability of young people in Tunisia and provide them with greater access to opportunities, RS Technologies, a rapidly expanding digital services company and major player in the, a rapidly expanding digital services company and major player in the xxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx----------------------------------------------------------------------",
      image: ["image1.jpg","image1.jpg"],
      link: "/assets/poster/job_3.png",
      tags: [{"id" :"01","name":"TAG"}, {"id" :"01","name":"TAG"}, {"id" :"01","name":"TAG"}],
      createdAt: "07/11/1896",
      author_fullname: "Youssef",
    },
  },
};


export const Vrv2cPosterCard: Story = {
  args: {
    hovered:true,
    data: {
      id:"2",
      covers: [
        "1715339530012.webp"
    ],
    covers_type: "vr-v2c",
      title:
        "RS Technologie Job Dating is a recruitment event in Tunis that brings together regional talent and IT professionals.",
      text: "Ceci est le texte de la carte 1",
      content:
        "To support the employability of young people in Tunisia and provide them with greater access to opportunities, RS Technologies, a rapidly expanding digital services company and major player in the, a rapidly expanding digital services company and major player in the xxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx----------------------------------------------------------------------",
      image:  ["image1.jpg","image1.jpg","image1.jpg"],
      link: "/assets/poster/job_3.png",
      tags: [{"id" :"01","name":"TAG"}, {"id" :"01","name":"TAG"}, {"id" :"01","name":"TAG"}],
      createdAt: "07/11/1896",
      author_fullname: "Youssef",
    },
  },
};

export const Hrh2cPosterCard: Story = {
  args: {
    hovered:true,
    data: {
      id:"2",
      covers: [
        "1715339530012.webp"
    ],
    covers_type: "hr-h2c",
      title:
        "RS Technologie Job Dating is a recruitment event in Tunis that brings together regional talent and IT professionals.",
      text: "Ceci est le texte de la carte 1",
      content:
        "To support the employability of young people in Tunisia and provide them with greater access to opportunities, RS Technologies, a rapidly expanding digital services company and major player in the, a rapidly expanding digital services company and major player in the xxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx----------------------------------------------------------------------",
      image: ["image1.jpg","image1.jpg","image1.jpg"],
      link: "/assets/poster/job_3.png",
      tags: [{"id" :"01","name":"TAG"}, {"id" :"01","name":"TAG"}, {"id" :"01","name":"TAG"}],
      createdAt: "07/11/1896",
      author_fullname: "Youssef",
    },
  },
};