import React from "react";

import styles from "./services.module.css";

import Hosting from "../../../assets/hosting.jpg";
import Cocktail from "../../../assets/drinks.jpg";
import Catering from "../../../assets/catering.jpg
import Cooking Classes from "../../../assets/cooking classes.jpg";

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.title}>
        <h2>Our Services</h2>
      </div>

    
        <div className={styles.card}>
          <img src={Hosting} alt=""/>
          <h2>Hosting</h2>
        </div>

        <div className={styles.card}>
          <img src={Cocktail} alt=""/>
          <h2>Cocktail and drinks</h2>
        </div>

        <div className={styles.card}>
          <img src={Catering} alt=""/>
          <h2>Catering</h2>
        </div>

        <div className={styles.card}>
          <img src={Cooking Classes} alt=""/>
          <h2>Cooking Classes</h2>
        </div>

      </div>
    </section>
  );
};

export default Services;
