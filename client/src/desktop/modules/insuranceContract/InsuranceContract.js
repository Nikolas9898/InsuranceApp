import React, { useState, useEffect } from "react";
import axios from "axios";
import CarForm from "./components/forms/CarForm/CarForm";
import jwt_decode from "jwt-decode";

function InsuranceContract(props) {
  const [insuranceContract, setInsuranceContract] = useState({
    customerId: "",
    insuranceId: "",
    details: "",
    finalPrice: 0,
  });

  const [carFormState, setCarFormState] = useState({
    details: "",
    experience: "",
  });

  useEffect(() => {
    let token =
      localStorage.getItem("jwt") === null
        ? "notRegistered"
        : jwt_decode(localStorage.getItem("jwt"));

    axios
      .get(`http://localhost:5000/api/insurance/${props.insuranceState}`)
      .then((insurance) => {
        setInsuranceContract({
          ...insuranceContract,
          insuranceId: insurance.data._id,
          customerId: token.id ? token.id : token,
        });
      });
  }, []);

  const handleInputChange = (e) =>
    setCarFormState({
      ...carFormState,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleInputDetails = (e) =>
    setInsuranceContract({
      ...insuranceContract,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const createContract = (e) => {
    axios
      .post("http://localhost:5000/api/contract/create", insuranceContract)
      .then((response) => console.log(response));
  };

  return (
    <React.Fragment>
      {console.log(insuranceContract)}
      {console.log(carFormState)}
      <CarForm
        handleInputDetails={handleInputDetails}
        insuranceContract={insuranceContract}
        carFormState={carFormState}
        insuranceType={props.insuranceState}
        handleInputChange={handleInputChange}
        createContract={createContract}
      />
    </React.Fragment>

    // <div className={InsuranceContractStyle.form_wrapper}>
    //   <form className={InsuranceContractStyle.form_body}>
    //     <label>Тип на застраховката</label>

    //     <input
    //       type="text"
    //       name="type"
    //       value={
    //         props.insuranceState === "undefined"
    //           ? insurance.type
    //           : props.insuranceState
    //       }
    //       onChange={handleInputChange}
    //     />

    //     <label>Име на застраховката</label>
    //     <input
    //       type="text"
    //       name="name"
    //       value={insurance.name}
    //       onChange={handleInputChange}
    //     />

    //     {/* <label>Цена</label>
    //   <input
    //     type="number"
    //     name="price"
    //     value={insurance.price}
    //     onChange={handleInputChange}
    //   /> */}

    //     <span>
    //       Общо:
    //       {props.insurancePrice === undefined ? " 200" : props.insurancePrice}
    //       лв
    //       {console.log(Number(props.insurancePrice))}
    //     </span>
    //   </form>
    //   <button onClick={createInsurance}>Create</button>
    // </div>
  );
}

export default InsuranceContract;
