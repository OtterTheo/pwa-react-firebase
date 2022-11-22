import React from "react";

import "./App.css";
import { doc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import {
  FirestoreProvider,
  useFirestoreDocData,
  useFirestore,
  useFirebaseApp,
  AuthProvider,
} from "reactfire";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import Header from "./components/layout/Header";

function BurritoTaste() {
  // access the Firestore library
  const burritoRef = doc(useFirestore(), "tryreactfire", "burrito");

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(burritoRef);

  // check the loading status
  if (status === "loading") {
    return <p>Fetching burrito flavor...</p>;
  }

  return <p>The burrito is {data.yummy ? "good" : "bad"}!</p>;
}
function App() {
  const authInstance = getAuth(useFirebaseApp());
  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <BrowserRouter>
      <AuthProvider sdk={authInstance}>
        <FirestoreProvider sdk={firestoreInstance}>
          <Header />
          <Router />
          <h1>🌯</h1>
          <BurritoTaste />
        </FirestoreProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
