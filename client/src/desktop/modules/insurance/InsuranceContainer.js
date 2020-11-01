import React, { useState } from "react";
import axios from "axios";
import InsuranceCss from "./Insurance.module.css";

function InsuranceContainer(props) {
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
    <div className={InsuranceCss.form_wrapper}>
      <form className={InsuranceCss.form_body}>
        <label>Тип на застраховката</label>
        <input
          type="text"
          name="type"
          value={insurance.type}
          onChange={handleInputChange}
        />

        <label>Име на застраховката</label>
        <input
          type="text"
          name="name"
          value={insurance.name}
          onChange={handleInputChange}
        />

        <label>Цена</label>
        <input
          type="number"
          name="price"
          value={insurance.price}
          onChange={handleInputChange}
        />
      </form>
      <button onClick={createInsurance}>Create</button>
    </div>
  );
}

export default InsuranceContainer;
