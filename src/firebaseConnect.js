import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC4YemJiv8VjVJ_Z6ZG8A5dX7Q1Ic4ZlMs",
    authDomain: "thanhhnp-address-database.firebaseapp.com",
    databaseURL: "https://thanhhnp-address-database.firebaseio.com",
    projectId: "thanhhnp-address-database",
    storageBucket: "thanhhnp-address-database.appspot.com",
    messagingSenderId: "741675988851",
    appId: "1:741675988851:web:681ebf8aaa4cb6bee6f706"
  };
firebase.initializeApp(firebaseConfig);
export const addData = firebase.database().ref('/addTable');
