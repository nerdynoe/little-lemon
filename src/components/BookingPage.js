import { useState } from "react";

import BookingForm from "./BookingForm";
import useAvailableTimes from "../hooks/useAvailableTimes";

export const TODAY = new Date()
  .toLocaleDateString()
  .split("/")
  .reverse()
  .join("-");

const BookingPage = (props) => {
  let { slots, updateSlots } = useAvailableTimes();
  const [restime, setRestime] = useState(slots[0]);

  const initialState = {
    date: TODAY,
    restime,
    guests: 1,
    occasion: "birthday",
  };
  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    // Update restime if a new value has been selected
    if (e.target.id === "restime") {
      setRestime(e.target.value);
    }

    const obj = { [e.target.id]: e.target.value };
    setData({ ...data, ...obj });
    props.dispatch(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(data);
    updateSlots(slots, restime);
    props.submitForm(data);
  };

  return (
    <section id="reservations" className="container centerContainer">
      <a title="< Back to Home" className="secondary-button button" href="/">
        &lt; Back to Home
      </a>
      <h2>Book Now</h2>
      <BookingForm
        availableTimes={props.availableTimes}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        {...props}
      />
    </section>
  );
};

export default BookingPage;
