import React, { useState, useEffect } from "react";
import axios from "axios";
import CarForm from "./components/forms/CarForm/CarForm";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import FamilyForm from "./components/forms/FamilyForm/FamilyForm";
import HouseForm from "./components/forms/HouseForm/HouseForm";

function InsuranceContract(props) {
  const [insuranceContract, setInsuranceContract] = useState({
    customerId: "",
    insuranceId: "",
    details: "",
    finalPrice: 0,
  });

  const [carFormState, setCarFormState] = useState({
    experience: "",
  });

  const [familyFormState, setFamilyFormState] = useState({
    members: "",
  });
  const [houseFormState, setHouseFormState] = useState({
    squareMeters: "",
  });

  const history = useHistory();

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
          finalPrice: insurance.data.price,
        });
      });
  }, []);

  const handleInputChange = async (e) => {
    await setCarFormState({
      ...carFormState,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleInputDetails = async (e) => {
    await setInsuranceContract({
      ...insuranceContract,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleInputFamilyForm = async (e) => {
    await setFamilyFormState({
      ...familyFormState,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleInputHouseForm = async (e) => {
    await setHouseFormState({
      ...houseFormState,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const createCarContract = (e) => {
    let contract = insuranceContract;

    contract.finalPrice =
      Number(carFormState.experience) >= 10
        ? insuranceContract.finalPrice -
          insuranceContract.finalPrice * (10 / 100)
        : insuranceContract.finalPrice;

    contract.finalPrice =
      Number(carFormState.experience) <= 3
        ? insuranceContract.finalPrice +
          insuranceContract.finalPrice * (10 / 100)
        : insuranceContract.finalPrice;

    axios
      .post("http://localhost:5000/api/contract/create", contract)
      .then((response) => (response.data._id ? history.push("/") : ""));
  };

  const createFamilyContract = (e) => {
    let contract = insuranceContract;

    contract.finalPrice =
      Number(familyFormState.members) >= 6
        ? insuranceContract.finalPrice -
          insuranceContract.finalPrice * (10 / 100)
        : insuranceContract.finalPrice;

    axios
      .post("http://localhost:5000/api/contract/create", contract)
      .then((response) => (response.data._id ? history.push("/") : ""));
  };

  const createHouseContract = (e) => {
    let contract = insuranceContract;

    contract.finalPrice =
      Number(houseFormState.squareMeters) >= 650
        ? insuranceContract.finalPrice -
          insuranceContract.finalPrice * (10 / 100)
        : insuranceContract.finalPrice;

    axios
      .post("http://localhost:5000/api/contract/create", contract)
      .then((response) => (response.data._id ? history.push("/") : ""));
  };

  return (
    <React.Fragment>
      {console.log(houseFormState)}
      {props.insuranceState === "Car" ? (
        <CarForm
          handleInputDetails={handleInputDetails}
          insuranceContract={insuranceContract}
          carFormState={carFormState}
          insuranceType={props.insuranceState}
          handleInputChange={handleInputChange}
          createContract={createCarContract}
        />
      ) : (
        ""
      )}

      {props.insuranceState === "Family" ? (
        <FamilyForm
          handleInputDetails={handleInputDetails}
          insuranceContract={insuranceContract}
          familyFormState={familyFormState}
          insuranceType={props.insuranceState}
          handleInputFamilyForm={handleInputFamilyForm}
          createContract={createFamilyContract}
        />
      ) : (
        ""
      )}

      {props.insuranceState === "House" ? (
        <HouseForm
          handleInputDetails={handleInputDetails}
          insuranceContract={insuranceContract}
          houseFormState={houseFormState}
          insuranceType={props.insuranceState}
          handleInputHouseForm={handleInputHouseForm}
          createContract={createHouseContract}
        />
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default InsuranceContract;
