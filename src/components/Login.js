import React, { useRef, useState } from "react";
import Header from "./Header";
import LoginBodyBg from "../img/login_body_bg.jpg";
import { signInFormValidation } from "../Utils/FormValidations";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();
  // state for Signin
  const [signInUser, setSignInUser] = useState(true);

  // function for handling signUp button for new User
  const handleSignUp = () => {
    setSignInUser(!signInUser);
  };

  // Ref for email and password
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // state for signin form errer set
  const [signInError, setSignInError] = useState(null);

  // onclick signin btn
  const signInBtnCall = () => {
    const errorMessage = signInFormValidation(
      emailRef.current.value,
      passwordRef.current.value
    );
    setSignInError(errorMessage);
    if (errorMessage) return;

    if (!signInUser) {
      // Sign Up user creation
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          // update user profile over all application
          updateProfile(auth.currentUser, {
            displayName: nameRef.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              navigation("/browser");
            })
            .catch((error) => {
              // An error occurred
              setSignInError(error.message);
              navigation("/");
            });
        })
        .catch((err) => {
          console.log(err.code);
          console.log(err.message);
          setSignInError(err.code + "-" + err.message);
        });
    } else {
      //Sign In User
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigation("/browser");
        })
        .catch((err) => {
          console.log(err.code);
          console.log(err.message);
          setSignInError(err.code + "-" + err.message);
        });
    }
  };

  return (
    <div>
      <Header from={"login"} />
      <div>
        <img
          src={LoginBodyBg}
          alt="Login Bg"
          className="w-full h-screen overflow-y-hidden"
        />
        <div className="flex items-center justify-center h-full absolute top-0 w-full bg-black opacity-50"></div>
        <div className="flex items-center justify-center w-full h-full absolute top-0 z-10">
          <div
            className={`px-10 py-8 bg-black md:w-3/12 w-4/5 rounded-md opacity-80  ${
              signInUser ? "h-3/5" : "h-4/6"
            }`}
          ></div>
        </div>
        <div className="flex items-center justify-center w-full h-full absolute top-0 z-10">
          <div className="px-10 py-8 md:w-3/12 w-4/5 rounded-md">
            <h2 className="text-2xl font-bold text-white mb-4">
              {signInUser ? "Sign In" : "Sign Up"}
            </h2>

            {/* SignIn / SignUp form  */}
            <form onSubmit={(e) => e.preventDefault()}>
              {!signInUser && (
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Your Name"
                  className="px-3 my-3 py-2 bg-slate-900 w-full border-slate-700 border rounded-sm text-white"
                />
              )}
              <input
                ref={emailRef}
                type="text"
                placeholder="Email"
                className="px-3 my-3 py-2 bg-slate-900 w-full border-slate-700 border rounded-sm text-white"
              />
              <input
                ref={passwordRef}
                type="password"
                placeholder="Password"
                className="px-3 my-3 py-2 bg-slate-900 w-full border-slate-700 border rounded-sm text-white"
              />
              {/* error message  */}
              <p className="text-red-600 my-2 font-xs">{signInError}</p>

              {/* Submit Btn  */}
              <button
                className="bg-red-600 my-3 text-white px-3 py-2 rounded-sm w-full"
                onClick={() => signInBtnCall()}
              >
                {signInUser ? "Sign In" : "Sign Up"}
              </button>

              {/* SignUp User trigger  */}
              {signInUser && (
                <p className="my-3 text-yellow-50 text-sm">
                  New to Netflix?{" "}
                  <button
                    className="text-white font-semibold"
                    onClick={() => handleSignUp()}
                  >
                    <u>Sign up</u>
                  </button>{" "}
                  Now.
                </p>
              )}
              {!signInUser && (
                <p className="my-3 text-yellow-50 text-sm">
                  Already Registed?{" "}
                  <button
                    className="text-white font-semibold"
                    onClick={() => handleSignUp()}
                  >
                    <u>Sign In</u>
                  </button>{" "}
                  Now.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
