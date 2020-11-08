import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function ContractsTableRow({ contract }) {
  return (
    <tr>
      <td>{contract.customer.username}</td>
      <td>{contract.details}</td>
      <td>{contract.finalPrice}</td>
      <td>{moment(contract.createdAt).format("MMMM Do YYYY")}</td>
      <td>
        <FontAwesomeIcon icon={faTrash} />
      </td>
      <td>
        <FontAwesomeIcon icon={faEdit} />
      </td>
    </tr>
  );
}

export default ContractsTableRow;
