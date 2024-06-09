import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { fetchAPI, submitAPI } from "./api";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Specials from "./components/Specials";
import BookingPage, { TODAY } from "./components/BookingPage";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import SuccessBooking from "./components/SuccessBooking";

export const updateTimes = (state, data) => ({ ...state, ...data });
export const submitData = (formData) => !!formData;

const availableTimes = fetchAPI(new Date());
export const initialState = {
  date: TODAY,
  availableTimes,
  restime: availableTimes[0],
  guests: 1,
  occasion: "birthday",
};

function App() {
  const [state, dispatch] = useReducer(updateTimes, initialState);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/success-booking", { state: formData });
    }
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Specials />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              dispatch={dispatch}
              submitForm={submitForm}
              state={state}
            />
          }
        />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route
          path="/success-booking"
          element={<SuccessBooking state={state} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
