import React, { useState, useEffect } from "react";
import axios from "axios";
import InsuranceListTable from "./components/insuranceListTable/InsuranceListTable";

function InsuranceContainer(props) {
  const [insurances, setInsurances] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/insurance`).then((res) => {
      setInsurances(res.data);
    });
  }, []);

  return (
    <React.Fragment>
      <InsuranceListTable insurances={insurances} />
    </React.Fragment>
  );
}

export default InsuranceContainer;
