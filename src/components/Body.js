import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import { useEffect } from "react";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
// import Error from './Error';

const Body = () => {
    // call userSlice actiosn 
    const dispatch = useDispatch();
  
    // using current status like eventlistener signin/signup
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,displayName,email} = user;
          dispatch(addUser({uid:uid,displayName:displayName,email:email}));
          console.log(user, "user currently sign IN");
        } else {
          // User is signed out
          dispatch(removeUser())
         console.log("user currently sign OUT")
        }
      });
    }, []); 


  // create Router array for path
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browse />,
    },
  ]);
  return (
      <RouterProvider router={appRouter} />
  );
};

export default Body;
