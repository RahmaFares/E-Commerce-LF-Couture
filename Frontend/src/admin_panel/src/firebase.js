import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCB-h_T2ZL-a7xt5zMvZmSh8GBXtawzL0c",
  authDomain: "shop-889c6.firebaseapp.com",
  projectId: "shop-889c6",
  storageBucket: "shop-889c6.appspot.com",
  messagingSenderId: "105110075028",
  appId: "1:105110075028:web:7cee5adf1ed39f597e6681",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
