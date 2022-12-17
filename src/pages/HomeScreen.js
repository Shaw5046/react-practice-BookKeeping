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
  orderBy
} from "firebase/firestore";
import { db } from "../firebase";

function HomeScreen() {
  const { currentUser } = useAuth();
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (currentUser) {
        try {
          const q = query(collection(db, "records"), where('user', "==", doc(db, "user", currentUser.uid)), orderBy("date", "desc"));
          //  , where('user', "==", doc(db, "users", currentUser.uid))
          return onSnapshot(q, (querySnapshot) => {
            let data = [];
            querySnapshot.forEach((doc) => {
              data.push({ id: doc.id, ...doc.data() });
            });
            setRecords(data);
            setLoading(false);
          });
        } catch (e) {}
      }
    }
    fetchData();
  }, [currentUser]);

  if (currentUser) {
    return (
      <div>
        <Panel />
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
