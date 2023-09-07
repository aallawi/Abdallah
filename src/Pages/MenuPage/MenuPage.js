import React from "react";

import Basic from "../../components/Basic/Basic";
import { Team, Table, Happy, Footer, Customers, Slides } from "../../container";

function MenuPage() {
  return (
    <div className="aboutPage bg_black">
      <Basic pageName={"Menu"} url={"main"} />
      <Slides />
      <Team />
      <Happy />
      <Customers />
      <Table />
      <Footer />
    </div>
  );
}

export default MenuPage;
