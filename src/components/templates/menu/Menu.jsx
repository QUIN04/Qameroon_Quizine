import React from "react";

import styles from "./menu.module.css";

import Achu from "../../../assets/achu.jfif";
import BangaSoup from "../../../assets/banga soup.jfif";
import Ekwang from "../../../assets/ekwang.jfif";
import Eru from "../../../assets/eruu.jfif";
import Koki from "../../../assets/koki.jfif";
import Kondre from "../../../assets/kondre.jfif";
import OkroSoup from "../../../assets/okro soup.jfif";
import PepperSoup from "../../../assets/pepper soup.jfif";

const Menu = () => {
  return (
    <section id="menu" className={styles.menu}>
      <div className={styles.title}>
        <h2>Our Menu</h2>
      </div>

      <div className={styles.menu__cards}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={Achu} alt="" />
          </div>
          <h2>Achu</h2>
          <p>5,000F</p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={BangaSoup} alt="" />
          </div>
          <h2>Banga Soup</h2>
          <p>5,000F</p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={Eru} alt="" />
          </div>
          <h2>Eru</h2>
          <p>5,000F</p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={ Ekwang } alt="" />
          </div>
          <h2> Ekwang </h2>
          <p>5,000F</p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={Koki} alt="" />
          </div>
          <h2>Koki</h2>
          <p>5,000F</p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={Kondre} alt="" />
          </div>
          <h2>Kondre</h2>
          <p>5,000F</p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={OkroSoup} alt="" />
          </div>
          <h2>Okro Soup</h2>
          <p>5,000F</p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <img src={PepperSoup} alt="" />
          </div>
          <h2>Pepper Soup</h2>
          <p>5,000F</p>
        </div>

      </div>
    </section>
  );
};

export default Menu;
