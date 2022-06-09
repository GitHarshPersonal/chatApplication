import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-VySGvlfO99gkr6ZLClM09TEERRRQqDI",
    authDomain: "harshmessenger.firebaseapp.com",
    projectId: "harshmessenger",
    storageBucket: "harshmessenger.appspot.com",
    messagingSenderId: "198162675041",
    appId: "1:198162675041:web:9758e03b12c7060e4c0120",
    measurementId: "G-4E6L513SEE"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }