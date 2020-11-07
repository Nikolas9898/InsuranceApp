import React from "react";
import InsuranceTableHeader from "../insuranceTableHeader/InsuranceTableHeader";
import InsuranceTableRow from "../insuranceTableRow/InsuranceTableRow";
import InsuranceListTableStyle from "./InsuranceListTable.module.css";

function InsuranceListTable({ insurances }) {
  return (
    <table className={InsuranceListTableStyle.insuranceTable}>
      <InsuranceTableHeader />
      <tbody>
        {insurances.map((insurance) => {
          return <InsuranceTableRow insurance={insurance} />;
        })}
      </tbody>
    </table>
  );
}

export default InsuranceListTable;
