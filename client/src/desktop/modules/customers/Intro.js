import React from "react";
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
        <article className={IntroCSS.image_wrapper_article}>
          <Link
            to={{ pathname: "/insurance-contract", state: "Car", price: 1000 }}
          >
            <img src={CarImage} alt="Something went wrong" />
          </Link>
        </article>

        <article className={IntroCSS.image_wrapper_article}>
          {" "}
          <Link
            to={{
              pathname: "/insurance-contract",
              state: "House",
              price: 10000,
            }}
          >
            <img src={HouseImage} alt="Something went wrong" />
          </Link>
        </article>

        <article className={IntroCSS.image_wrapper_article}>
          {" "}
          <Link
            to={{
              pathname: "/insurance-contract",
              state: "Family",
              price: 100000,
            }}
          >
            <img src={FamillyImage} alt="Something went wrong" />
          </Link>
        </article>
      </section>
      {/* <Link to={"/insurance"} className={IntroCSS.button_wrapper}>
        Buy Insurance
      </Link> */}
    </div>
  );
}

export default Intro;
