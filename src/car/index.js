import React, { Component } from "react";
import "./style.css"; // Import your CSS file here

class BookFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBookIndex: 0,
      images: this.props.images || [],
    };
  }

  turnRight = () => {
    this.setState((prevState) => ({
      currentBookIndex:
        prevState.currentBookIndex === 0
          ? this.props.images.length - 1
          : prevState.currentBookIndex - 1,
    }));
  };

  turnLeft = () => {
    this.setState((prevState) => ({
      currentBookIndex:
        prevState.currentBookIndex === this.props.images.length - 1
          ? 0
          : prevState.currentBookIndex + 1,
    }));
  };

  renderBookCovers = () => {
    const { images } = this.state;



    return images.map((image, index) => {
      let className = "right";
      if (index === this.state.currentBookIndex) {
        className += " flip";
      }

      return (
        <div key={index} className={className}>
          <figure
            className="back"
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              backgroundSize: "contain",
            }}
          ></figure>
          {image[index + 1] && (
            <figure
              className="front"
              id={index === 0 ? "cover" : ""}
              style={{
                backgroundImage: `url(${image[index + 1].url})`,
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
              }}
            ></figure>
          )}
        </div>
      );
    });
  };

  render() {
    return (
      <div className="book-section">
        <div className="container">{this.renderBookCovers()}</div>
        <button onClick={this.turnLeft}>Өмнөх</button>
        <button onClick={this.turnRight}>Дараах</button>
      </div>
    );
  }
}

export default BookFlipper;
