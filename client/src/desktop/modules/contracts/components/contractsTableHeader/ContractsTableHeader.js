import React from "react";

function ContractsTableHeader({ user }) {
  return (
    <tr>
      <th>Customer Name</th>
      <th>Details</th>
      <th>Price</th>
      <th>Created</th>

      {user.type === "admin" && <th>Delete</th>}
      {user.type === "admin" && <th>Edit</th>}
    </tr>
  );
}

export default ContractsTableHeader;
