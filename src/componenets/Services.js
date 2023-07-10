import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends React.Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktail",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet et dolores deleniti illo ipsa at explicabo beatae voluptatum iusto labore.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet et dolores deleniti illo ipsa at explicabo beatae voluptatum iusto labore.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet et dolores deleniti illo ipsa at explicabo beatae voluptatum iusto labore.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet et dolores deleniti illo ipsa at explicabo beatae voluptatum iusto labore.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
