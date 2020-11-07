import React from "react";
import CarFormStyle from "./CarForm.module.css";

function CarForm({
  insuranceType,
  handleInputChange,
  createContract,
  carFormState,
  insuranceContract,
  handleInputDetails,
}) {
  return (
    <div className={CarFormStyle.form_wrapper}>
      <form className={CarFormStyle.form_body}>
        <label>{insuranceType} insurance</label>

        {/* <input
          type="text"
          name="type"
          value={insuranceType}
          onChange={handleInputChange}
        /> */}

        <label>Experience</label>
        <input
          name="experience"
          type="number"
          value={carFormState.experience}
          onChange={handleInputChange}
        />

        <label>Details</label>

        <textarea
          name="details"
          value={insuranceContract.details}
          onChange={handleInputDetails}
        />

        <label>Final Price:</label>

        {(carFormState.experience === "" && (
          <span>{insuranceContract.finalPrice} lv</span>
        )) ||
          (Number(carFormState.experience) >= 10 && (
            <div>
              <span>Discount: 10%</span>
              {insuranceContract.finalPrice -
                insuranceContract.finalPrice * (10 / 100)}
              lv
            </div>
          )) ||
          (Number(carFormState.experience) <= 3 && (
            <div>
              <span>Risk Tax: 10%</span>
              {insuranceContract.finalPrice +
                insuranceContract.finalPrice * (10 / 100)}
              lv
            </div>
          ))}
      </form>
      <button onClick={createContract}>Create</button>
    </div>
  );
}

export default CarForm;
