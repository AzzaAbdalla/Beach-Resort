import React from "react";
//import items from "./data";
import Client from "./Contentful";

const RoomContext = React.createContext();

class RoomProvider extends React.Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoom",
        order: "sys.createdAt",
      });
      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter((room) => room.featured === true);
      let maxPrice = Math.max(...rooms.map((room) => room.price));
      let maxSize = Math.max(...rooms.map((room) => room.size));

      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = (slug) => {
    //let tempRooms =
    const room = this.state.rooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value }, this.filterRooms);
  };

  filterRooms = () => {
    const { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } =
      this.state;

    let tempRooms = [...rooms];

    //filter by type
    if (type !== "all")
      tempRooms = tempRooms.filter((room) => room.type === type);

    //filter by capacity
    if (parseInt(capacity) > 1)
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);

    //filter by price , size
    tempRooms = tempRooms.filter((room) => room.price <= price);
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    //filter by breakfast , pets
    if (breakfast)
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    if (pets) tempRooms = tempRooms.filter((room) => room.pets === true);

    this.setState({ sortedRooms: tempRooms });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomProvider, RoomConsumer };
