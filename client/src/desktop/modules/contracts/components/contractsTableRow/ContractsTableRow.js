import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function ContractsTableRow({ contract, deleteContract, user }) {
  return (
    <tr>
      <td>{contract.customer.username}</td>
      <td>{contract.details}</td>
      <td>{contract.finalPrice}</td>
      <td>{moment(contract.createdAt).format("MMMM Do YYYY")}</td>

      {user.type === "admin" && (
        <td>
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => deleteContract(contract._id)}
          />
        </td>
      )}

      {user.type === "admin" && (
        <td>
          <FontAwesomeIcon icon={faEdit} />
        </td>
      )}
    </tr>
  );
}

export default ContractsTableRow;
