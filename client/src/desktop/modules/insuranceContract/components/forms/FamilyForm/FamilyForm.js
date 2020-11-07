import React from "react";
import FamilyFormStyle from "./FamilyForm.module.css";

function FamilyForm({
  insuranceType,
  handleInputFamilyForm,
  createContract,
  familyFormState,
  insuranceContract,
  handleInputDetails,
}) {
  return (
    <div className={FamilyFormStyle.form_wrapper}>
      <form className={FamilyFormStyle.form_body}>
        <label>{insuranceType} insurance</label>

        <label>Members</label>
        <input
          name="members"
          type="number"
          value={familyFormState.members}
          onChange={handleInputFamilyForm}
        />

        <label>Details</label>

        <textarea
          name="details"
          value={insuranceContract.details}
          onChange={handleInputDetails}
        />

        <label>Final Price:</label>

        {(Number(familyFormState.members) >= 6 && (
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

export default FamilyForm;
