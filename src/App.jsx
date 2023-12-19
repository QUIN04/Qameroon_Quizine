import React from "react";

import styles from "./app.module.css";

import Header from "./components/shared/header/Header";
import Hero from "./components/templates/hero/Hero";
import Services from "./components/templates/services/Services";
import Menu from "./components/templates/menu/Menu";
import Testimonials from "./components/templates/testimonials/Testimonials";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
      <Services />
      <Menu/>
      <Testimonials />
    </div>
  );
};

export default App;
