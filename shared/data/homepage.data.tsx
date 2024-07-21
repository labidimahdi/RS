import {
  CloudManagementIcon,
  DataManagementIcon,
  SoftwareDevelopmentIcon,
  GlobeWebIcon,
  CyberSecurityIcon,
} from "components/ui/icons";

export const homePageData = {
  services: [
    {
      id:"web-development",
      icon: <GlobeWebIcon width={30} height={30} />,
      title: "servicesTitle1",
      text: "servicesText1",
    },
    {
      id:"data-management",
      icon: <DataManagementIcon width={30} height={30} />,
      title: "servicesTitle2",
      text: "servicesText2",
    },
    {
      id:"cyber-security",
      icon: (
        <CyberSecurityIcon
          width={30}
          height={30}
          fillColor="fill-black-color-900"
          className="mb-4 lg:h-[44px] lg:w-[46px]"
        />
      ),
      title: "servicesTitle3",
      text: "servicesText3",
    },
    {
      id:"security-and-backup",
      icon: (
        <SoftwareDevelopmentIcon
          width={30}
          height={30}
          fillColor=""
          className="mb-4 lg:h-[44px] lg:w-[46px]"
        />
      ),
      title: "servicesTitle4",
      text: "servicesText4",
    },
    {
      id:"cloud-management",
      icon: <CloudManagementIcon width={30} height={30} />,
      title: "servicesTitle5",
      text: "servicesText5",
    },
  ],
};


export const TrustData = [
  {
    name: "gocontact",
    image: "/assets/CarousselAssets/gocontact.png",
    width: 165,
    height: 173,
  },
  {
    name: "kompozite",
    image: "/assets/CarousselAssets/kompozite.svg",
    width: 130,
    height: 59,
  },
  {
    name: "naviparking",
    image: "/assets/CarousselAssets/naviparking.png",
    width: 165,
    height: 173,
  },
  {
    name: "odoogap",
    image: "/assets/CarousselAssets/odoogap.svg",
    width: 165,
    height: 173,
  },
  {
    name: "s",
    image: "/assets/CarousselAssets/s.svg",
    width: 165,
    height: 173,
  },
  {
    name: "usercentrics",
    image: "/assets/CarousselAssets/usercentrics.png",
    width: 165,
    height: 173,
  },
  {
    name: "monisnap",
    image: "/assets/CarousselAssets/Monisnap.svg",
    width: 130,
    height: 50,
  },
  {
    name: "visor",
    image: "/assets/CarousselAssets/visor.png",
    width: 165,
    height: 173,
  },
  {
    name: "mask",
    image: "/assets/CarousselAssets/Mask.svg",
    width: 120,
    height: 60,
  },
  {
    name: "avec",
    image: "/assets/CarousselAssets/logoAvec.svg",
    width: 130,
    height: 46,
  },
  {
    name: "j2s",
    image: "/assets/CarousselAssets/j2s.svg",
    width: 159,
    height: 106,
  },
];
