import React from "react";
import Listing from "./Listing";
import "./Container.css";

class Container extends React.Component {
  render() {
    return (
      <div id="Container">
        {this.props.data.map((data) => (
          <Listing key={data.id} garden={data} />
        ))}
      </div>
    );
  }
}
export default Container;
