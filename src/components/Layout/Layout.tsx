import React, { useRef } from "react";
import { ProgressBar } from "../ProgressBar";
import { Topbar } from "../Topbar";
import "./layout.css";

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const mainContainer = useRef(null);
  const childArr = React.Children.toArray(children);
  return (
    <div className="layout">
      <Topbar />
      <main className="layout__main" ref={mainContainer}>
        <React.Fragment>
          {childArr.map((child, i) => (
            <section key={i} className="layout__section">
              {child}
            </section>
          ))}
        </React.Fragment>
      </main>
      <ProgressBar containerRef={mainContainer} />
    </div>
  );
};
