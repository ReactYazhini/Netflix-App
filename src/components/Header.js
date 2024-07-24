import React from "react";
import Mainlogo from "../img/Netflix_Logo.png";
import { IoMdLogOut } from "react-icons/io";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = ({from}) => {
  const navigation = useNavigate();

  // subscrbe the redux store 
  const user = useSelector((store) => store.user)

  // user signOut handle 
  const handleSignout = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigation('/')
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between  pr-3">
        <div className="w-40">
          <img src={Mainlogo} alt="Main Logo" className="w-full h-auto" />
        </div>
        <div className="flex items-center  text-right pr-8">
          { from !== 'login' && <div className="flex text-right w-30 float-right"><p className="text-xl text-right text-white mr-2">{user?.displayName}</p><button className="text-3xl font-bold text-red-600" onClick={() => handleSignout() }><IoMdLogOut/></button></div>}
        </div>
      </div>
    </div>
  );
};

export default Header;
