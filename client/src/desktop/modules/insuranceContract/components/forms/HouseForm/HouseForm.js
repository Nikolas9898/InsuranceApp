import React from "react";
import HouseFormStyle from "./HouseForm.module.css";

function HouseForm({
  insuranceType,
  handleInputHouseForm,
  createContract,
  houseFormState,
  insuranceContract,
  handleInputDetails,
}) {
  return (
    <div className={HouseFormStyle.form_wrapper}>
      <form className={HouseFormStyle.form_body}>
        <label>{insuranceType} insurance</label>

        <label>Square Meters</label>
        <input
          name="squareMeters"
          type="number"
          value={houseFormState.squareMeters}
          onChange={handleInputHouseForm}
        />

        <label>Details</label>
        <textarea
          name="details"
          value={insuranceContract.details}
          onChange={handleInputDetails}
        />

        <label>Final Price:</label>

        {(Number(houseFormState.squareMeters) >= 650 && (
          <div>
            <span>Discount: 10%</span>
            {insuranceContract.finalPrice -
              insuranceContract.finalPrice * (10 / 100)}
            lv
          </div>
        )) || <span>{insuranceContract.finalPrice}</span>}
      </form>
      <button onClick={createContract}>Create</button>
    </div>
  );
}

export default HouseForm;
