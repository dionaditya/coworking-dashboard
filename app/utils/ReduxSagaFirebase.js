import firebase from 'firebase/app';
import 'firebase/auth';
import ReduxSagaFirebase from 'redux-saga-firebase';

const myFirebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBN-xlvDFVdYynfdT2oUNuGMxoNXnjYY4s',
  authDomain: 'coworking-platform-01.firebaseapp.com',
  databaseURL: 'https://coworking-platform-01.firebaseio.com',
  projectId: 'coworking-platform-01',
  storageBucket: 'coworking-platform-01.appspot.com',
  messagingSenderId: '436243879998',
  appId: '1:436243879998:web:86b07931c38ff385d8196f',
  measurementId: 'G-TKKGPV25RE',
});

const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp);

export { reduxSagaFirebase };
