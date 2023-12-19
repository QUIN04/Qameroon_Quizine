import React, { useEffect, useState } from "react";

import styles from "./hero.module.css";

const dataToBeSubmitted = {
  name: "John Doe",
  email: "john@gmail.com",
  subject: "Job Request",
  message: "Hey I would love to work with you! Quin.",
};

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});

  const fetchStatus = async () => {
    console.log("Submitted!!!");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToBeSubmitted),
      });

      const data = await response.json();

      setResponse(data);
    } catch (e) {
      console.log({ e });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (response.successful) {
      alert("Contacted thank you! I'll get back to you shortly 🎉");

      setResponse({});
    }
  }, [response]);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.left}>
        <h2>
        Qameroon Quizine, <br /> a <span>A Taste of Diversity On Plates</span>{" "}
          Developer.
        </h2>
        
        <button
          disabled={loading}
          style={{
            cursor: loading ? "not-allowed" : "pointer",
          }}
          onClick={() => {
            fetchStatus();
          }}
        >
          {loading ? "Loading..." : "Know more"}{" "}
        </button>
      </div>
      <div className={styles.right}></div>
    </section>
  );
};
export default Hero;
