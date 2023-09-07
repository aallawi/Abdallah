import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Table.css";

const Table = () => (
  <div className="table bg_black">
    <div className="newsletter" >
      <SubHeading parag={"Reservations"} title={"Book A Table"} posion={"center"} />

      <div className="table_input">
        <div className="input">
          <select id="person" name="person">
            <option value="one person">one person</option>
            <option value="two person">two person</option>
            <option value="three person">three person</option>
            <option value="four person">four person</option>
            <option value="five person">five person</option>
          </select>
        </div>
        <div className="input">
          <select id="date" name="date">
            <option value="3-2023">3-2023</option>
            <option value="6-2023">6-2023</option>
            <option value="9-2023">9-2023</option>
            <option value="12-2023">12-2023</option>
          </select>
        </div>
        <div className="input">
          <select id="time" name="time">
            <option value="12:00 AM">12:00 AM</option>
            <option value="06:00 AM">06:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="06:00 PM">06:00 PM</option>
          </select>
        </div>
      </div>

      <div className="button">
        <button className="changing_button">Book Now</button>
      </div>
    </div>

  </div>
);

export default Table;
