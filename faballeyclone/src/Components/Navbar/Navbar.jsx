import React from 'react';
import Topbar from './Topbar';
import Midbar from './Midbar';
import BottomBar from './BottomBar';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  return (
    <div>
        <Topbar />
        <Midbar />
        <BottomBar />
    </div>
  )
}

export default Navbar