import Img1 from "../assests/chefs1.jpg";
import Img2 from "../assests/chefs2.jpg";

const About = () => (
  <section id="about" className="containerFull">
    <div className="gridContainer centerContainer">
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="restaurantImages">
        <img src={Img1} alt="Restaurant" width="330px" />
        <img src={Img2} alt="Restaurant two" width="330px" />
      </div>
    </div>
  </section>
);

export default About;
