import React from "react";
import ContractsTableRow from "../contractsTableRow/ContractsTableRow";
import ContractsTableStyle from "./ContractsListTable.module.css";
import ContractsTableHeader from "../contractsTableHeader/ContractsTableHeader";

function ContractsListTable({ contracts }) {
  return (
    <table className={ContractsTableStyle.contractsTable}>
      <ContractsTableHeader />

      <tbody>
        {contracts.map((contract) => {
          return <ContractsTableRow contract={contract} />;
        })}
      </tbody>
    </table>
  );
}

export default ContractsListTable;
