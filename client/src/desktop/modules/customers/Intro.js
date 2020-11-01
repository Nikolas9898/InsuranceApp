import React, { useState } from "react";
import { Link } from "react-router-dom";
import CarImage from "../../images/carImage.jpeg";
import HouseImage from "../../images/houseImage.jpeg";
import FamillyImage from "../../images/family-banner.jpg";
import IntroCSS from "./Intro.module.css";

function Intro(props) {
  return (
    <div className={IntroCSS.intro_wrapper}>
      <section className={IntroCSS.title}>
        <h1>Застраховайте колата, къщата или семейството с NikiInsureBg</h1>
      </section>

      <section className={IntroCSS.image_wrapper}>
        <article>
          <img src={CarImage} />
        </article>

        <article>
          {" "}
          <img src={HouseImage} />
        </article>

        <article>
          {" "}
          <img src={FamillyImage} />
        </article>
      </section>
      <Link to={"/insurance"} className={IntroCSS.button_wrapper}>
        Buy Insurance
      </Link>
    </div>
  );
}

export default Intro;
