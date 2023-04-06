import { AnimatePresence, motion, useCycle, Variants } from "framer-motion";
import React, { useState } from "react";
import { useScreenSize } from "../../hooks/useScreenSize";
import { ReactComponent as Logo } from "../../assets/graphic.svg";
import "./topbar.css";

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const links = [
  { name: "Home", to: "#", id: 1 },
  { name: "About", to: "#", id: 2 },
  { name: "Blog", to: "#", id: 3 },
  { name: "Contact", to: "#", id: 4 },
];

export interface HamburgerMenuProps {
  toggle: (i?: number | undefined) => void;
}

export const Topbar = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const isMdDown = useScreenSize("md");
  return (
    <motion.nav className="topbar">
      <div className="topbar__logo-wrapper">
        <Logo className="topbar__logo" />
      </div>
      <div>
        <AnimatePresence>
          {isMdDown ? (
            <motion.div className="background" variants={sidebar}>
              <button
                className="topbar__mobile-menu"
                onClick={() => cycleOpen()}
              >
                <HamburgerMenu open={open} />
              </button>
            </motion.div>
          ) : (
            "Menu here"
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>{open && <Sidebar />}</AnimatePresence>
    </motion.nav>
  );
};

const Sidebar = () => (
  <motion.aside
    className="sidebar"
    initial={{ width: 0 }}
    animate={{
      width: 200,
    }}
    exit={{
      width: 0,
      transition: { delay: 0.7, duration: 0.3 },
    }}
  >
    <motion.div
      className="sidebar__inner"
      initial="closed"
      animate="open"
      exit="closed"
      variants={sideVariants}
    >
      {links.map(({ name, to, id }) => (
        <motion.a
          className="sidebar__link"
          key={id}
          href={to}
          whileHover={{ color: "#ff0088" }}
          variants={itemVariants}
        >
          {name.toLowerCase()}
        </motion.a>
      ))}
    </motion.div>
  </motion.aside>
);

const HamburgerMenu = ({ open }: { open: boolean }) => {
  const Path = (props: any) => {
    console.log(props.animate);
    return (
      <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 100%)"
        strokeLinecap="round"
        initial={false}
        animate={props.animate}
        variants={props.variants}
        transition={{ duration: 0.1 }}
        {...props}
      />
    );
  };
  return (
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        key={1}
        animate={open ? "open" : "closed"}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        key={2}
        d="M 2 9.423 L 20 9.423"
        animate={open ? "open" : "closed"}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        // transition={{ duration: 0.1 }}
      />
      <Path
        key={3}
        animate={open ? "open" : "closed"}
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  );
};
