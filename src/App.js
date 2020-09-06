import React from "react";
import firebase from 'firebase/app';
import 'firebase/auth';
import { NavBar } from "./Components/NavBar/NavBar";
import { Menu } from "./Components/Menu/Menu";
import { GlobalStyle } from "./Components/Style/GlobalStyle";
import { ModalItem } from "./Components/Modal/ModalItem";
import { Order } from "./Components/Order/Order";
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyBZm7wjygHG6uuCt3-KAJUVWB9PaL77PyI",
  authDomain: "mrdonalds-894a8.firebaseapp.com",
  databaseURL: "https://mrdonalds-894a8.firebaseio.com",
  projectId: "mrdonalds-894a8",
  storageBucket: "mrdonalds-894a8.appspot.com",
  messagingSenderId: "217975750888",
  appId: "1:217975750888:web:5d61c2991d23109284c95d"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const authFirebase = firebase.auth;
  const auth = useAuth(authFirebase);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth}/>
      <Order {...orders} {...openItem} {...auth} />
      <Menu {...openItem} />
      { openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
