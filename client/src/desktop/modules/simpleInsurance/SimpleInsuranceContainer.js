import React, { useState } from "react";
import SimpleInsuranceStyle from "./SimpleInsurance.module.css";
import axios from "axios";

function SimpleInsuranceContainer(props) {
  const [insurance, setInsurance] = useState({
    price: "",
    name: "",
    type: "",
  });

  const handleInputChange = (e) =>
    setInsurance({
      ...insurance,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const createInsurance = (e) => {
    axios
      .post("http://localhost:5000/api/insurance/create", insurance)
      .then((response) => console.log(response));
  };

  return (
    <div className={SimpleInsuranceStyle.form_wrapper}>
      <form className={SimpleInsuranceStyle.form_body}>
        <label>Тип на застраховката</label>

        <input
          type="text"
          name="type"
          value={
            props.insuranceState === "undefined"
              ? insurance.type
              : props.insuranceState
          }
          onChange={handleInputChange}
        />

        <label>Име на застраховката</label>
        <input
          type="text"
          name="name"
          value={insurance.name}
          onChange={handleInputChange}
        />

        {/* <label>Цена</label>
      <input
        type="number"
        name="price"
        value={insurance.price}
        onChange={handleInputChange}
      /> */}

        <span>
          Общо:
          {props.insurancePrice === undefined ? " 200" : props.insurancePrice}
          лв
          {console.log(Number(props.insurancePrice))}
        </span>
      </form>
      <button onClick={createInsurance}>Create</button>
    </div>
  );
}

export default SimpleInsuranceContainer;
