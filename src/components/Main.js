import React from "react";

import Banner from "./Banner";
import Specials from "./Specials";
import About from "./About";
import Testimonials from "./Testimonials";

const Main = () => (
  <React.Fragment>
    <Banner />
    <Specials />
    <Testimonials />
    <About />
  </React.Fragment>
);

export default Main;
