import {
  useScroll,
  motion,
  useTransform,
  MotionValue,
  AnimatePresence,
  useAnimation,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import "./homepage.css";
import SYD from "../../assets/SYD.png";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface ContainerProps {
  variants: {
    hidden: {
      opacity: number;
    };
    show: {
      opacity: number;
      transition: {
        delayChildren: number;
      };
    };
  };
  initial: string;
  animate: string;
}

interface ItemProps {
  variants: {
    hidden: {
      opacity: number;
    };
    show: {
      opacity: number;
    };
  };
  initial: string;
  animate: string;
}

const sentence1 = "hey there 👋 ";
const sentence2 = "I'm Sydney Rosa.";

export const Homepage = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const [showSentence2, setShowSentence2] = useState(false);
  const y = useParallax(scrollYProgress, 300);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1.5,
      },
    },
    // initial: 'hidden',
    // animate: 'show',
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    // initial: 'hidden',
    // animate: 'show',
  };

  const item1 = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    // initial: 'hidden',
    // animate: 'show',
  };

  return (
    <React.Fragment>
      <div className="content">
        <div className="content__header">
          <h2 className="header">
            hey <span className="header--underline">there</span> 👋{" "}
          </h2>
          <h1 className="header">
            I'm Sydney Rosa
            <span className="header header--alt">.</span>
          </h1>
        </div>
        <div className="content__main" ref={ref}>
          <span className="content__description">
            I'm a front end <span>software engineer</span> specializing in
            accessibility on the web, ui frameworks and design systems (Carbon,
            IBM Software, Carbon for Cloud & Cognitive), complex dashboards (IBM
            Cloud, Cloud Pak 4 Data) and SaaS marketplaces (Offsyte)
          </span>
        </div>
      </div>
      <button className="content__cta">Continue</button>
      <img
        className="content__image"
        src={SYD}
        alt="Dark skinned, dark haired woman with large black framed glasses. She's smiling at the camera with her arms crossed."
      />
    </React.Fragment>
  );
};
