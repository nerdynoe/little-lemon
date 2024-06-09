import BannerImg from "../assests/img1.jpg";

const Banner = () => (
  <section id="banner" className="container">
    <div className="gridContainer centerContainer">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <a
          title="Reserve a Table"
          href="/reservations"
          className="primary-button button"
        >
          Reserve a Table
        </a>
      </div>

      <img src={BannerImg} alt="A man carrying a tray with food" />
    </div>
  </section>
);

export default Banner;
