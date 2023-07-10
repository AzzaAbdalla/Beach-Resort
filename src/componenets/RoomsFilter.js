import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

const getUniqe = (items, value) => {
  return [...new Set(items.map((item) => item[value]))]; //ex: rooms[type] , set ges uniqe items
};
const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    handleChange,
  } = context;

  //get uniqe types and add 'all' at begining
  let types = getUniqe(rooms, "type");
  types = ["all", ...types];
  //return options list
  types = types.map((type, index) => {
    return (
      <option value={type} key={index}>
        {type}
      </option>
    );
  });

  let guestsNum = getUniqe(rooms, "capacity");
  guestsNum = guestsNum.map((guests, index) => {
    return (
      <option key={index} value={guests}>
        {guests}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* room type select */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* room type select end */}
        {/* guest number select */}
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {guestsNum}
          </select>
        </div>
        {/* guest number select end */}
        {/* price range */}
        <div className="form-group">
          <label htmlFor="capacity">room price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            value={price}
            min={minPrice}
            max={maxPrice}
            className="form-control"
            onChange={handleChange}
          ></input>
        </div>
        {/* price range end */}
        {/* size */}
        <div className="form-group">
          <div className="size-inputs">
            <label htmlFor="size">room size</label>
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              className="size-input"
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              className="size-input"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* size end */}
        {/* chekcboxes */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            ></input>
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            ></input>
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* chekcboxes end */}
      </form>
    </section>
  );
};

export default RoomsFilter;
