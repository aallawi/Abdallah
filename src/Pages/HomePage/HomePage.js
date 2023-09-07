import React from "react";

import {
  AboutUs,
  Founder,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "../../container";

function HomePage() {
  return (
    <div className="HomePage bg_black">
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Founder />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default HomePage;
