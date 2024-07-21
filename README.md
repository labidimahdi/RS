<<<<<<< HEAD
# RS technologies client site architecture ruls

Environement Setup the [.env](.env) file with the keys stored in [.env.develop
](.env.develop) variables to test locally.

### Summary

#### [I. Project Structure](#project-structure)
#### [II. Installation](#installation)
#### [III. Run project](#run-project)
#### [IV. Rules](#rules)
#### [V. References](#references)

## Project Structure

This project is devided to different folders and files.

- [app](#app)
- [components](#components)
  - [ui](#ui)
- [hooks](#hooks)
- [lib](#lib)
- [public](#public)
  - [assets](#assets) 
  - [locales](#locales) 
- [services](#services)
- [shared](#shared)
    - [constants](#constants)
    - [data](#data)
    - [interfaces](#interfaces)
    - [types](#types)
    - [validations](#validations)
- [Root files](#root-files)


### app

Thi folder contains essential configuration and setup files for the application, including pages.

### components

This folder contains reusable React components used across different pages or sections of the application.

#### ui

This folder contains reusable React components. Every component is created into a folder with the same name. this folder will contain the reusable component and his storybook.

### hooks

This folder contains custom React hooks used for encapsulating reusable logic across components within the application.

### lib

This folder typically contains utility functions, helper classes, or modules used throughout the application for various purposes.

### public

This folder contains static assets such as images, fonts, locales for traduction and other files that are directly served by the web server without going through the Next.js routing system.

#### assets

The "assets" folder typically contains additional static resources such as images, stylesheets, and other media files used in the application.

#### locales

The "locales" folder typically contains localization files, including translations and language-specific content, used to internationalize the application.

### services

This folder typically contains modules or files responsible for handling external data fetching, API interactions, or other backend-related functionalities within the application.

### shared

The shared folder contains all functions, constants, static data, types, validations for types, and more shared to every services.

#### constants

This folder contains all constants.

#### data

This folder contains all statically displayed data on the site. Each page must have a specific data file.
the file will have the name of the type of *page_name.data.ts* or *page_name.data.tsx* if the data contain jsx components.

#### types

This folder contains all types used in the components and pages.

#### interfaces

This folder contains all the props of our components. Each component type has its own file and will contain all interfaces of components of that type.

the file will have the name of the type of *reusable_component_or_main_folder.interface.ts*

#### validations

This folder contains all validations for the types used in the components and pages.

### Root files

Different files are found in the project's root, each one of these files have their own usage in this project.


## Installation

```bash
npm install
# or
yarn
# or
pnpm dev
# or
bun dev
```

## Run project

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load a custom Google Font.

## Rules

Here some rules to respect before you merge your branch.

### code

- We're using **PascalCase** as programming naming convention.
- You must add comments to separate section into a page and explain use case in components if necessary.  

```javascript
// this is a simple example
import React from "react";

// Components
import { Section } from "../ui/Sections/Section";
import { SubSection1 } from "../ui/Sections/SubSection1";
import { SubSection2 } from "../ui/Sections/SubSection2";

// Shared
import { TProps } from "@/shared";

const TSection: React.FC<TProps> = ({}) => {
  return (
    <Section>
      {/* Sub Section 1 */}
      <SubSection1>
      </SubSection1>
      {/* Sub Section 2 */}
      <SubSection2>
      </SubSection2>
    </Section>
  );
};

export { TSection } 

```

### imports
  - the imports must be separated by comments and a space.

```javascript
// first libraries are imported and comments are not required (*for libraries)
import React from "react";
// leave a space here
// Components (list here the components used)
import { OutlinedButton } from "../ui/Buttons/OutlinedButton/OutlinedButton";
import { SubTitle } from "../ui/Texts/SubTitle/SubTitle";
import { Text } from "../ui/Texts/Text/Text";
import { CardContainer } from "../ui/Cards/CardContainer/CardContainer";
// leave a space here
// set this comment where you need to import a navigation function 
import { Link } from "@/navigation";
// leave a space here
// Shared (shared data, interfaces, types validations, etc..)
import { layoutData } from "@/shared";
```
### components folder

- The main components will be saved in the root of the component folder.
- The reusable components are saved in ui folder.
-  ui folder contain many folder by component type.
- Every component type content folder with the name of the component. This folder will contain the reusable component and its documentation in the form of a storybook file.
- you can create a folder with the name of a page like *homepage* and set components who contain reusable components to make sections of the page more clear.
- Every icon in this site must be setted as an svg into a componenent with *IconProps* as type and set *fillColor* and *className* for more flexebility. You must set the name of the file like this *DescriptiveNameIcon.tsx*.

```javascript
import { IconProps } from "@/shared";

const CloudManagementIcon: React.FC<IconProps> = ({
  className,
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${fillColor} ${className}`}
    >
      <path
        d="M30.25 19.1641H13.75C13.5609 19.1641 13.4062 19.3187 13.4062 19.5078V36.7812C13.4062 36.9703 13.5609 37.125 13.75 37.125H30.25C30.4391 37.125 30.5938 36.9703 30.5938 36.7812V19.5078C30.5938 19.3187 30.4391 19.1641 30.25 19.1641ZM16.1562 21.9141H27.8438V26.9414H16.1562V21.9141ZM27.8438 34.375H16.1562V29.3477H27.8438V34.375Z"
        fill={`${fillColor ? `${fillColor}` : "#1D1D1B"}`}
      />
      <path
        d="M18.2188 32.1406C18.2188 32.5053 18.3636 32.855 18.6215 33.1129C18.8793 33.3708 19.2291 33.5156 19.5938 33.5156C19.9584 33.5156 20.3082 33.3708 20.566 33.1129C20.8239 32.855 20.9688 32.5053 20.9688 32.1406C20.9688 31.776 20.8239 31.4262 20.566 31.1684C20.3082 30.9105 19.9584 30.7656 19.5938 30.7656C19.2291 30.7656 18.8793 30.9105 18.6215 31.1684C18.3636 31.4262 18.2188 31.776 18.2188 32.1406ZM18.2188 24.4922C18.2188 24.8569 18.3636 25.2066 18.6215 25.4645C18.8793 25.7223 19.2291 25.8672 19.5938 25.8672C19.9584 25.8672 20.3082 25.7223 20.566 25.4645C20.8239 25.2066 20.9688 24.8569 20.9688 24.4922C20.9688 24.1275 20.8239 23.7778 20.566 23.5199C20.3082 23.2621 19.9584 23.1172 19.5938 23.1172C19.2291 23.1172 18.8793 23.2621 18.6215 23.5199C18.3636 23.7778 18.2188 24.1275 18.2188 24.4922Z"
        fill={`${fillColor ? `${fillColor}` : "#1D1D1B"}`}
      />
      <path
        d="M34.8649 15.8512C32.8969 10.6562 27.8824 6.96094 22.0086 6.96094C16.1348 6.96094 11.1203 10.652 9.15235 15.8469C5.45274 16.8223 2.72852 20.2039 2.75 24.2172C2.77579 28.7031 6.25625 32.3512 10.6391 32.7422C10.841 32.7594 11.0129 32.6004 11.0129 32.3984V29.8031C11.0129 29.6312 10.884 29.4852 10.7121 29.4637C9.55196 29.3176 8.45625 28.8105 7.61407 27.9813C6.58282 26.9715 6.01563 25.6137 6.01563 24.1742C6.01563 22.9711 6.40664 21.8367 7.14141 20.8914C7.85899 19.9719 8.86875 19.3059 9.98165 19.0137L11.6102 18.584L12.2074 17.007C12.577 16.0273 13.0926 15.1078 13.7414 14.2785C14.3816 13.4535 15.1422 12.7316 15.993 12.1301C17.759 10.8883 19.8387 10.2309 22.0086 10.2309C24.1785 10.2309 26.2582 10.8883 28.0242 12.1344C28.8793 12.7359 29.6356 13.4578 30.2758 14.2828C30.9246 15.1121 31.4402 16.0316 31.8098 17.0113L32.4027 18.584L34.027 19.0137C36.3559 19.6324 37.9844 21.7508 37.9844 24.1699C37.9844 25.6137 37.4172 26.9672 36.3859 27.977C35.5481 28.802 34.4566 29.3133 33.2965 29.4594C33.1246 29.4809 33 29.627 33 29.7988V32.3984C33 32.6004 33.1762 32.7594 33.3781 32.7422C37.7481 32.3469 41.2199 28.7031 41.25 24.2258C41.2758 20.2125 38.5559 16.8309 34.8649 15.8512Z"
        fill={`${fillColor ? `${fillColor}` : "#1D1D1B"}`}
      />
    </svg>
  );
};

export { CloudManagementIcon };
```

### shared folder

- in every shared folder, you need to export all files in *index.ts*.
you need to export all shared files from one import root like this :

```javascript
// Shared
import { layoutData } from "@/shared";
```

### translation module

To use translate module you need :
  - You need to set translation of the texts in public/locales/*lng*.json. We have only two languages for now (FR/EN).
  - Every Section in a page muste have **a specific key** with a description name according to it. the key must be named with the section of page name. the keys in the json must be clean.
  - Every texts must be setted in traduction. if you don't have the text, use Lorem ipsum blocs.

This is below how to implement translation :

```javascript
// Import as a library, we don't need a comment above this import
import { useTranslations } from "next-intl";
 
 // in the component, before return, call useTranslations function with key of the section
const t = useTranslations("indexPage");

// to implement the translation, use keys from the locales into the t function
{t("AboutTitle1")}

// this is a simple example

import React from "react";
import { useTranslations } from "next-intl";

// components
import { Section } from "../ui/Sections/Section";

// Shared
import { TProps } from "@/shared";

const TSection: React.FC<TProps> = ({}) => {
  const t = useTranslations("tSection");
  return (
    <Section>
    {t("tSection")}
    </Section>
  );
};

export { TSection } 

```

### Notes :

- You need to lint the code before push.
- You need to build the project and test before pushing for preview deployment.

## References

For more informations, please contact the lead support team's development manager at the following email address: **mohamed-youssef.jemai@rstechnologies.tn**.
=======
# SITE-RS
>>>>>>> origin/main
