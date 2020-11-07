import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function InsuranceTableRow({ insurance }) {
  return (
    <tr>
      <td>{insurance.name}</td>
      <td>{insurance.type}</td>
      <td>{insurance.price}</td>
      <td>{moment(insurance.createdAt).format("MMMM Do YYYY")}</td>
      <td>
        <FontAwesomeIcon icon={faTrash} />
      </td>
      <td>
        <FontAwesomeIcon icon={faEdit} />
      </td>
    </tr>
  );
}

export default InsuranceTableRow;
