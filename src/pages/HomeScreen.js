import React, { useEffect, useState } from "react";
import Panel from "../components/Panel";
import MoneyForm from "../components/MoneyForm";
import MonetList from "../components/MonetList";
import { useAuth } from "../contexts/AuthContext";
import {
  collection,
  query,
  onSnapshot,
  where,
  doc,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";

function HomeScreen() {
  const { currentUser } = useAuth();
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  const [totalC, setTotalC] = useState(0);
  const [totalD, setTotalD] = useState(0);

  useEffect(() => {
    async function fetchData() {
      if (currentUser) {
        try {
          const q = query(
            collection(db, "records"),
            where("user", "==", doc(db, "user", currentUser.uid)),
            orderBy("date", "desc")
          );

          const creditRecords = [];
          const debitRecords = [];
          //  , where('user', "==", doc(db, "users", currentUser.uid))
          return onSnapshot(q, (querySnapshot) => {
            let data = [];
            querySnapshot.forEach((doc) => {
              let recordObj = { id: doc.id, ...doc.data() };
              data.push(recordObj);

              if (recordObj.type === "Credit") {
                creditRecords.push(recordObj.amount);
              } else {
                debitRecords.push(recordObj.amount);
              }
            });
            setRecords(data);
            setLoading(false);

            let totC = 0; 
            creditRecords.forEach(element => {
              totC+=parseFloat(element)
            });
            setTotalC(totC);

            let totD = 0; 
            debitRecords.forEach(element => {
              totD+=parseFloat(element)
            });
            setTotalD(totD);
          });
        } catch (e) {}
      }
    }
    fetchData();
  }, [currentUser,totalC,totalD]);

  if (currentUser) {
    return (
      <div>
        <Panel totalC={totalC} totalD={totalD} />
        <hr />
        <MoneyForm />
        <MonetList loading={loading} records={records} />
      </div>
    );
  } else {
    return <h2>You must log in</h2>;
  }
}

export default HomeScreen;
