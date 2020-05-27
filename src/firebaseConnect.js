import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCJpFL7deVi4N2QYaDl-HYV85_Cek671qQ",
  authDomain: "addmanager-3efe9.firebaseapp.com",
  databaseURL: "https://addmanager-3efe9.firebaseio.com",
  projectId: "addmanager-3efe9",
  storageBucket: "addmanager-3efe9.appspot.com",
  messagingSenderId: "46505841743",
  appId: "1:46505841743:web:791de687583f23770f463a"
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const addData = firebase.database().ref('/addTable')
export {storage, addData};


