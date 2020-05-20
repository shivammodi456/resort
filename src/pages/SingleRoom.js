import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import StyledHero from "../component/StyledHero";

export class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug,
    defaultBcg,
  };

  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    // console.log(room);

    if (!room) {
      return (
        <div className="error">
          <h3>No Such Room Could be found..</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      descroption,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to room
            </Link>
          </Banner>
        </StyledHero>
      </>
    );
  }
}

export default SingleRoom;
