import React, { useEffect, Suspense } from "react";
import './App.css'
import { lazily } from "react-lazily";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { currentUser } from "./api/auth";
import { AdminRoutes, CommonRoutes, UserRoutes } from "./routes";

import Navbar from "./components/nav/Navbar"

const { Header, Footer } = lazily(() => import("./components"));

const App = () => {
  const dispatch = useDispatch();

  // to check firebase auth state

  useEffect(() => {
    try {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          try {
            const idTokenResult = await user.getIdTokenResult();
            currentUser(idTokenResult.token)
              .then((res) => {
                dispatch({
                  type: "LOGGED_IN_USER",
                  payload: {
                    name: res.data.name,
                    email: res.data.email,
                    role: res.data.role,
                    token: idTokenResult.token,
                    _id: res.data._id,
                  },
                });
              })
              .catch((err) => {
                console.log("Auth error:", err);
                // Don't crash app on auth errors
              });
          } catch (error) {
            console.log("Firebase token error:", error);
            // Don't crash app on token errors
          }
        }
      });

      // cleanup
      return () => unsubscribe();
    } catch (error) {
      console.log("Firebase initialization error:", error);
      // Don't crash app on Firebase errors
    }
  }, [dispatch]);

  return (
    <Suspense fallback={
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px',
        color: '#666'
      }}>
        Loading...
      </div>
    }>
      {/* <Header /> */}
      <Navbar/>
      <ToastContainer />
      <CommonRoutes />
      <AdminRoutes />
      <UserRoutes />
      <Footer />
    </Suspense>
  );
};

export default App;
