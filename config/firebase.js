import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDUr5WWvL1EQAB-j9aDOOVJeZ3blsNOzUI",
  authDomain: "chatkonnect-92746.firebaseapp.com" ,
  projectId: "chatkonnect-92746",
  storageBucket: "chatkonnect-92746.appspot.com" ,
  messagingSenderId: "863150114458" ,
  appId: "1:863150114458:android:77301b35021187e8b30123" ,
  databaseURL:"https://chatkonnect-92746-default-rtdb.firebaseio.com" ,
  measurementId: "G-9C75BDFG1N" ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  
export const database = getFirestore();