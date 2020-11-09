import React, { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ContractsListTable from "./components/contractsListTable/ContractsListTable";

function ContractsContainer(props) {
  const user = useUser();
  const history = useHistory();
  const [contracts, setContracts] = useState();

  useEffect(async () => {
    if (user === "") {
      history.push("/");
    }

    if (user.type === "admin") {
      await getAllContracts();
    } else if (user.type === "customer") {
      await getCustomerContracts();
    }
  }, []);

  const getAllContracts = () => {
    axios.get("http://localhost:5000/api/contract").then((res) => {
      setContracts(res.data);
    });
  };

  const getCustomerContracts = () => {
    axios
      .get(`http://localhost:5000/api/contract/getByCustomerId/${user._id}`)
      .then((res) => {
        setContracts(res.data);
      });
  };

  const deleteContract = (e) => {
    let contractId = e;

    axios
      .delete(`http://localhost:5000/api/contract/delete/${contractId}`)
      .then((res) => {
        getAllContracts();
      });
  };

  return (
    <React.Fragment>
      {contracts ? (
        <ContractsListTable
          user={user}
          contracts={contracts}
          deleteContract={deleteContract}
        />
      ) : (
        <div>Loading</div>
      )}
    </React.Fragment>
  );
}

export default ContractsContainer;
