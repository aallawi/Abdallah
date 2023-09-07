import React from "react";
import { data } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Customers.css";

const Customers = () => (
  <div className="customers bg_black_photo section_padding">
    <SubHeading parag="Testimony" title="Happy Customers" posion="center" />
    <div className="customers_grid">
      {data.customers.map((custom, index) => {
        return (
          <div key={index} className="custom">
            <div className="custom_photo">
              <img src={custom.imgUrl} alt="customer" />
            </div>
            <div className="custom_info">
              <p className="text_white">{custom.Opinion}</p>
              <div className="name_job">
                <p className="chef_name">{custom.name}</p>
                <p className="text_white">{custom.job}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Customers;
