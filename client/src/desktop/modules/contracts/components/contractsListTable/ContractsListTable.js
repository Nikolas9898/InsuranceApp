import React from "react";
import ContractsTableRow from "../contractsTableRow/ContractsTableRow";
import ContractsTableStyle from "./ContractsListTable.module.css";
import ContractsTableHeader from "../contractsTableHeader/ContractsTableHeader";

function ContractsListTable({ contracts, deleteContract, user }) {
  return (
    <table className={ContractsTableStyle.contractsTable}>
      <ContractsTableHeader user={user} />

      <tbody>
        {contracts.map((contract) => {
          return (
            <ContractsTableRow
              user={user}
              deleteContract={deleteContract}
              contract={contract}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default ContractsListTable;
