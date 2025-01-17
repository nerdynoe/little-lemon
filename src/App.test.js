import { fireEvent, render, screen } from "@testing-library/react";

import { initialState, updateTimes } from "./App";
import BookingPage, { TODAY } from "./components/BookingPage";
import { fetchAPI } from "./api";

test("Renders the BookingPage heading", () => {
  render(
    <BookingPage
      state={{ date: TODAY, availableTimes: fetchAPI(new Date()) }}
    />
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("Initialise times", () => {
  const slots = fetchAPI(new Date());

  expect(slots.length).toEqual(9);
  expect(slots[0]).toEqual("17:00");
  expect(slots[1]).toEqual("17:30");
  expect(slots[2]).toEqual("18:00");
  expect(slots[3]).not.toEqual("22:00");
});

test("Update times", () => {
  const expectedUpdatedState = {
    date: TODAY,
    availableTimes: fetchAPI(new Date()),
    restime: "19:00",
    guests: 2,
    occasion: "anniversary",
  };
  const updatedState = updateTimes(initialState, expectedUpdatedState);

  expect(updatedState.guests).toEqual(expectedUpdatedState.guests);
  expect(updatedState.restime).toEqual(expectedUpdatedState.restime);
  expect(updatedState.occasion).toEqual(expectedUpdatedState.occasion);
});

test("Form validation", async () => {
  render(
    <BookingPage
      dispatch={() => true}
      submitForm={() => true}
      state={{ date: TODAY, availableTimes: fetchAPI(new Date()) }}
    />
  );

  const submitButton = screen.getByLabelText("On Click");
  const guests = screen.getByLabelText("guests");

  // Send the form without no guests value
  await fireEvent.click(submitButton);
  expect(guests).toBeInvalid();

  // Set 0 for guests so it is invalid
  fireEvent.change(guests, { target: { value: 0 } });
  await fireEvent.click(submitButton);
  expect(guests).toBeInvalid();

  // Set 2 for guests so it is valid
  fireEvent.change(guests, { target: { value: 2 } });
  await fireEvent.click(submitButton);
  expect(guests).toBeValid();
});
