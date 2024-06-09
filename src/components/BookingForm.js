import { TODAY } from "./BookingPage";

const BookingForm = ({ state, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} id="bookingForm">
    <div className="field">
      <label htmlFor="date">Choose date:</label>
      <input
        type="date"
        id="date"
        name="date"
        onChange={handleChange}
        value={state.date}
        min={TODAY}
      />
    </div>

    <div className="field">
      <label htmlFor="restime">Choose time:</label>
      <select id="restime" name="restime" onChange={handleChange}>
        {state.availableTimes.map((time, index) => (
          <option value={time} key={`${time}-${index}`}>
            {time}
          </option>
        ))}
      </select>
    </div>

    <div className="field">
      <label htmlFor="guests">Number of guests:</label>
      <input
        type="number"
        id="guests"
        name="guests"
        placeholder="1"
        min="1"
        max="10"
        onChange={handleChange}
      />
    </div>

    <div className="field">
      <label htmlFor="occasion">Occasion:</label>
      <select id="occasion" onChange={handleChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
    </div>

    <input
      type="submit"
      className="primary-button button"
      value="Make Your Reservation"
    />
  </form>
);

export default BookingForm;
