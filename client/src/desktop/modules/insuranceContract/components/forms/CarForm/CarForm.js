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
        <label>{insuranceType}</label>

        {/* <input
          type="text"
          name="type"
          value={insuranceType}
          onChange={handleInputChange}
        />

        <label>Име на застраховката</label>
        <input
          type="text"
          name="name"
          value={insurance.name}
          onChange={createContract}
        /> */}
        <input
          name="experience"
          type="number"
          value={carFormState.experience}
          onChange={handleInputChange}
        />

        <textarea
          name="details"
          value={insuranceContract.details}
          onChange={handleInputDetails}
        />
      </form>
      <button onClick={createContract}>Create</button>
    </div>
  );
}

export default CarForm;
