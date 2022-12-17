import React from "react";
import * as timeago from 'timeago.js'

export default function Record({record}) {
  return (
    <tr>
      <td>{record.type}</td>
      <td>{record.title}</td>
      <td>{timeago.format(record.date.toDate())}</td>
      <td>{record.amount}</td>
    </tr>
  );
}
