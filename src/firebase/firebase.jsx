import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get, onValue } from "firebase/database";

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


const dbRef = ref(database);

export const getData = (setUser, userId) => {
    get(child(dbRef, `users/`)).then((snapshot) => {
        if (snapshot.exists()) {
            setUser(snapshot.val());
        } else {
            alert("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

// export const getData = (setUser) => {
//     const userCount = ref(database);
//     // setUser(userCount)
//     onValue(userCount, (snapshot) => {
//         const data = snapshot.val();
//         setUser(data);
//     });
// }