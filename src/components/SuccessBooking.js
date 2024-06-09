const SuccessBooking = ({ state }) => (
  <section className="container centerContainer" id="successBooking">
    <a title="< Back to Home" className="secondary-button button" href="/">
      &lt; Back to Reservations
    </a>
    <p>
      Thanks for booking with Little Lemon! 🎉 <br /> <br />
      We look forward seeing <strong>{state.guests}</strong> of you on{" "}
      <strong>{state.date}</strong> at <strong>{state.restime}</strong> for your{" "}
      <strong>{state.occasion}</strong> party.
    </p>
  </section>
);

export default SuccessBooking;
