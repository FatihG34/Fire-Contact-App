import { initializeApp } from "firebase/app";
import {
    getDatabase,
    ref,
    set
} from "firebase/database";
import { getFirestore } from '@firebase/firestore';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDgA-eaA5o-U2o3zLxeH8SY6umJrv7rH7c",
    authDomain: "fire-contact-app-2067a.firebaseapp.com",
    projectId: "fire-contact-app-2067a",
    storageBucket: "fire-contact-app-2067a.appspot.com",
    messagingSenderId: "1004302429767",
    appId: "1:1004302429767:web:8992617e9f5aa17c02cb62",
    databaseURL: "https://fire-contact-app-2067a-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


export function writeUserData(userId, name, phone, gender) {

    set(ref(database, 'users/' + userId), {
        username: name,
        phone: phone,
        gender: gender
    });
};

const db = getFirestore(app);
const useraCollactionRef = collection(db, 'users')

export const getUsers = async (setUser) => {
    const data = await getDocs(useraCollactionRef);
    setUser(data.docs.map((item) => ({ ...item.data(), id: item.id })));
}

export const addUser = async (name, phone, gender) => {
    const addUsers = await addDoc(useraCollactionRef, { name, phone, gender })
};

export const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc)
}
export const updateUser = async (id, name, phone, gender) => {
    const userDoc = doc(db, 'users', id)
    const upDate = { name: name, phone: phone, gender: gender };
    await updateDoc(userDoc, upDate)
}
