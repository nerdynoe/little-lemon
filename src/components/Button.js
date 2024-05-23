import React from "react";

const Button = ({ text="I am a button", link="/", type="primary", img=null }) => (
  <a
    href={link}
    title={text}
    className={`${type}-button button`}
  >
    {text}
    {img && <img src={img} alt={text} />}
  </a>
);

export default Button;