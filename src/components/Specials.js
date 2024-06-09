import React from "react";
import Swal from "sweetalert2";

import SpecialsImg1 from "../assests/img2.jpg";
import SpecialsImg2 from "../assests/img3.jpg";
import SpecialsImg3 from "../assests/img6.jpg";
import DeliveryIcon from "../assests/delivery.jpg";

const specialsMenu = [
  {
    id: "greeksalad",
    name: "Greek salad",
    value: "12.99",
    img: SpecialsImg1,
    desc: "Crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: "bruschetta",
    name: "Bruschetta",
    value: "5.99",
    img: SpecialsImg2,
    desc: "Our Bruschetta is made from grilled bread that has been smeared with salt and olive oil.",
  },
  {
    id: "lemondessert",
    name: "Lemon dessert",
    value: "5.00",
    img: SpecialsImg3,
    desc: "This comes straigth from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Specials = () => {
  const orderMenu = (item) => {
    console.log("CLICKED", item);

    Swal.fire({
      title: `Do you want to order ${item.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, order it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${item.name} Oredered!`,
          text: "Your order has been added.",
          icon: "success",
        });
      }
    });
  };

  return (
    <section id="specials" className="containerFull">
      <header className="container">
        <h2>This Weeks Specials!</h2>
        <button type="button" className="primary-button button">
          Online Menu
        </button>
      </header>

      <div className="gridContainer centerContainer">
        {specialsMenu.map((item, index) => (
          <article key={`${item.id}-${index}`}>
            <img src={item.img} alt={item.name} width="260px" />
            <div>
              <h3>{item.name}</h3>
              <p>
                £<data value={item.value}>{item.value}</data>
              </p>
            </div>
            <p>{item.desc}</p>
            <button
              type="button"
              className="secondary-button button"
              onClick={() => orderMenu(item)}
            >
              Order a delivery <img src={DeliveryIcon} alt="Order a delivery" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Specials;
