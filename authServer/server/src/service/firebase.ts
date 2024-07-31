import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";

import { tempSalt, parmanentSalt } from "./salts";
import { getToken } from "./jwt";

const firebaseConfig = {
  apiKey: "AIzaSyD_rtEndxcFn86pCxCyxizApSZdaR_4r-I",
  authDomain: "ad-chat-54649.firebaseapp.com",
  projectId: "ad-chat-54649",
  storageBucket: "ad-chat-54649.appspot.com",
  messagingSenderId: "967558458468",
  appId: "1:967558458468:web:469f09b70e5ade0d320371",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export async function authUser(
  kindeId: string,
  email: string,
  firstName: string,
  lastName: string
) {
  const collectionRef = collection(firestore, "user");
  const q = query(collectionRef, where("kindeId", "==", kindeId));
  const result = await getDocs(q);
  if (result.docs.length == 0) {
    const payload = {
      id: kindeId,
    };
    const token = getToken(payload, tempSalt);

    await addDoc(collectionRef, {
      kindeId: kindeId,
      email: email,
      firstName: firstName,
      lastName: lastName,
      tempToken: token,
      parmanentToken: null,
    });

    return token;
  }
  const id = result.docs[0].id;
  const docRef = doc(firestore, "user", id);
  const data = result.docs[0].data();
  const payload = {
    id: data.kindeId,
  };
  const token = getToken(payload, tempSalt);

  await setDoc(docRef, {
    kindeId: data.kindeId,
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    tempToken: token,
    parmanentToken: data.parmanentToken,
  });

  return token;
}

export async function verifyUserByTempToken(
  kindeId: string,
  tempToken: string
) {
  const collectionRef = collection(firestore, "user");
  const q = query(collectionRef, where("kindeId", "==", kindeId));
  const result = await getDocs(q);

  if (result.docs.length == 0) return { token: null };
  const data = result.docs[0].data();
  const id = result.docs[0].id;
  if (data.tempToken !== tempToken) return { token: null };

  const payload = {
    kindeId: kindeId,
    email: data.email,
  };

  const token = getToken(payload, parmanentSalt);

  const docRef = doc(firestore, "user", id);

  await setDoc(docRef, {
    kindeId: kindeId,
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    tempToken: null,
    parmanentToken: token,
  });

  return { token: token };
}

export async function fetchAndVarifyUser(
  kindeId: string,
  parmanentToken: string
) {
  const collectionRef = collection(firestore, "user");
  const q = query(collectionRef, where("kindeId", "==", kindeId));
  const result = await getDocs(q);

  if (result.docs.length == 0) return { user: null };
  const data = result.docs[0].data();

  if (data.parmanentToken !== parmanentToken) return { user: null };

  return { user: data };
}

export async function invalidToken(kindeId: string) {
  const collectionRef = collection(firestore, "user");
  const q = query(collectionRef, where("kindeId", "==", kindeId));
  const result = await getDocs(q);
  if (result.docs.length == 0) return { action: false };

  const id = result.docs[0].id;
  const data = result.docs[0].data();
  const docRef = doc(firestore, "user", id);
  await setDoc(docRef, {
    kindeId: kindeId,
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    tempToken: null,
    parmanentToken: null,
  });

  return { action: true };
}
