import React from "react";
import * as timeago from "timeago.js";
import { Button } from "react-bootstrap";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Record({ record }) {
  const deleteRecord = async () => {
    await deleteDoc(doc(db, "records", record.id));
  };

  return (
    <tr>
      <td>{record.type}</td>
      <td>{record.title}</td>
      <td>{timeago.format(record.date.toDate())}</td>
      <td>{record.amount}</td>
      <td>
        <Button onClick={deleteRecord} variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
}
