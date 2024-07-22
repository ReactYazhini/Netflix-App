import React, { useState } from "react";
import Header from "./Header";
import LoginBodyBg from "../img/login_body_bg.jpg";

const Login = () => {

  // state for Signin 
  const [signInUser,setSignInUser]=useState(true);

  // function for handling signIn button 
  const handleSignIn = () =>{
    setSignInUser(!signInUser);
  }



  return (
    <div>
      <Header />
      <div>
        <img src={LoginBodyBg} alt="Login Bg" className="w-full h-auto"/>
        <div className="flex items-center justify-center h-full absolute top-0 w-full bg-black opacity-50">
          </div>
          <div className="flex items-center justify-center w-full h-full absolute top-0 z-10">
          <div className={`px-10 py-8 bg-black w-3/12 rounded-md opacity-80  ${signInUser ? "h-3/5" : "h-4/6"}`} > 
          </div>
          </div>
          <div className="flex items-center justify-center w-full h-full absolute top-0 z-10">
          <div className="px-10 py-8 w-3/12 rounded-md"> 
          <h2 className="text-2xl font-bold text-white mb-4">{signInUser ? 'Sign In' : 'Sign Up'}</h2>
            <form>
              {!signInUser && <input
                type="text"
                placeholder="Your Name"
                className="px-3 my-3 py-2 bg-slate-900 w-full border-slate-700 border rounded-sm text-white"
              />}
              <input
                type="text"
                placeholder="Email"
                className="px-3 my-3 py-2 bg-slate-900 w-full border-slate-700 border rounded-sm text-white"
              />
              <input
                type="password"
                placeholder="Password"
                className="px-3 my-3 py-2 bg-slate-900 w-full border-slate-700 border rounded-sm text-white"
              />

              <button className="bg-red-600 my-3 text-white px-3 py-2 rounded-sm w-full">{signInUser ? 'Sign In' : 'Sign Up'}</button>

{signInUser && <p className="my-3 text-yellow-50 text-sm">New to Netflix? <button className="text-white font-semibold" onClick={() => handleSignIn()}><u>Sign up</u></button> Now.</p>}
{!signInUser && <p className="my-3 text-yellow-50 text-sm">Already Registed? <button className="text-white font-semibold" onClick={() => handleSignIn()}><u>Sign In</u></button> Now.</p>}


              {/* <button className="my-3 text-white" onClick={() => handleSignIn()}><u>Sign In</u></button> */}
           
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
