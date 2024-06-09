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
        required
      />
    </div>

    <div className="field">
      <label htmlFor="restime">Choose time:</label>
      <select id="restime" name="restime" onChange={handleChange} required>
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
        aria-label="guests"
        name="guests"
        placeholder="1"
        min="1"
        max="10"
        required
        onChange={handleChange}
      />
    </div>

    <div className="field">
      <label htmlFor="occasion">Occasion:</label>
      <select id="occasion" onChange={handleChange} required>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
    </div>

    <input
      type="submit"
      className="primary-button button"
      value="Make Your Reservation"
      aria-label="On Click"
    />
  </form>
);

export default BookingForm;
