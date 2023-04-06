import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiGatsby,
  SiStorybook,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import "./aboutpage.css";

export interface Skill {
  title: string;
  icon: React.ReactNode;
}

const iconProps = {
  size: 64,
};

const skills: Skill[] = [
  {
    title: "Javascript",
    icon: <SiJavascript {...iconProps} />,
  },
  {
    title: "Typescript",
    icon: <SiTypescript {...iconProps} />,
  },
  {
    title: "React",
    icon: <FaReact {...iconProps} />,
  },
  {
    title: "CSS",
    icon: <SiCss3 {...iconProps} />,
  },
  {
    title: "Gatsby",
    icon: <SiGatsby {...iconProps} />,
  },
  {
    title: "Storybook",
    icon: <SiStorybook {...iconProps} />,
  },
];

export const AboutPage = () => {
  return (
    <React.Fragment>
      <div className="content">
        <h3 className="header">
          I <span className="header--underline">specialize</span> in:
        </h3>
        <div className="foo">
          {skills.map(({ title, icon }, i) => (
            <div className="content__card">
              <div className="content__card-title">{title}</div>
              {icon}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
