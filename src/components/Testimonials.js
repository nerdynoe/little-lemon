import Person1 from "../assests/Person1.jpg";
import Person2 from "../assests/Person2.jpg";
import Person3 from "../assests/Person3.jpg";
import Person4 from "../assests/Person4.jpg";

import Rating from "./Rating";

const testimonials = [
  {
    id: "person1",
    name: "Jai Soti",
    img: Person1,
    rating: 5,
    review: "Amazing restaurant and very easy to book.",
  },
  {
    id: "person2",
    name: "Patou Salady",
    img: Person2,
    rating: 4,
    review:
      "I enjoyed my wedding anniversary with my husband. The food was so tasty!",
  },
  {
    id: "person3",
    name: "Zwe Tsu",
    img: Person3,
    rating: 5,
    review:
      "The food is delicious and the staff very attentive. I will definetely visit again.",
  },
  {
    id: "person4",
    name: "Maria Herrera",
    img: Person4,
    rating: 3.5,
    review:
      "The restaurant is great but they didn't have an online booking system at the time.",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="container">
    <h2>Testimonials</h2>
    <ul className="gridContainer centerContainer">
      {testimonials.map((person, index) => (
        <li key={`${person.id}-${index}`}>
          <img src={person.img} alt={person.name} className="person" />
          <Rating value={person.rating} />
          <h3>{person.name}</h3>
          <p className="review">{person.review}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Testimonials;
