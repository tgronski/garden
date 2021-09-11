import React from "react";
import "./Listing.css";

class Listing extends React.Component {
  render() {
    return (
      <div className="Listing">
        <div>
          <h3>{this.props.garden.title}</h3>
          <img
            className="Image"
            src={this.props.garden.img}
            alt="bay area garden"
          />
        </div>
      </div>
    );
  }
}
export default Listing;
