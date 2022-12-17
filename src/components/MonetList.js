import React from "react";
import Table from "react-bootstrap/Table";
import Record from "./Record";
import Loader from "./Loader";

export default function MonetList({ records, loading }) {

  return (
    <>
      {loading && <Loader />}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Type</th>
            <th>Title</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <Record key={record.id} record={record} />
          ))}
        </tbody>
      </Table>
    </>
  );
}
