import React, { useRef } from "react";
import { Homepage } from "./pages/Homepage";
import "./App.css";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./components/Layout";
import { ProgressBar } from "./components/ProgressBar";
import { AboutPage } from "./pages/AboutPage";

function App() {
  return (
    <Layout>
      <Homepage />
      <AboutPage />

      {/* <ProgressBar /> */}
    </Layout>
  );
}

export default App;
