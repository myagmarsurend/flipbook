import React from "react";
import "./style.css";

class FlipBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images || [],
      right: document.getElementsByClassName("right"),
      currentIndex: 0,
      z: 1,
      width: this.props.width,
      height: this.props.height,
    };
  }

  componentDidMount() {
    this.setState({
      currentIndex: this.state.right.length - 1,
    });
  }

  turnRight = () => {
    const { z, currentIndex, right } = this.state;

    if (currentIndex >= 0) {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex - 1,
      }));
    } else {
      this.setState((prevState) => ({
        currentIndex: right.length - 1,
      }));

      function stt(i) {
        setTimeout(() => {
          right[i].style.zIndex = "auto";
        }, 300);
      }
      for (let i = 0; i < right.length; i++) {
        right[i].className = "right";
        stt(i);
        this.setState({ z: 1 });
      }
    }

    if (currentIndex >= 0) {
      right[currentIndex].classList.add("flip");
      this.setState((prevState) => ({ z: prevState.z + 1 }));
      right[currentIndex].style.zIndex = this.state.z;
    }
  };

  turnLeft = () => {
    const { z, currentIndex, right } = this.state;

    if (currentIndex < right.length - 1) {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex + 1,
      }));
    } else {
      this.setState((prevState) => ({
        currentIndex: 0,
      }));

      for (let i = right.length - 1; i >= 0; i--) {
        right[i].classList.add("flip");
        right[i].style.zIndex = right.length - i;
      }
    }
    if (currentIndex >= -1) {
      if (right[currentIndex + 1]) {
        right[currentIndex + 1].className = "right";

        setTimeout(() => {
          right[currentIndex + 1].style.zIndex = "auto";
        }, 300);
      }
    }
  };
  turnHome = () => {
    const { z, currentIndex, right } = this.state;

    for (let i = 0; i < right.length; i++) {
      right[i].className = "right";
      this.setState({ z: 1 });
      setTimeout(() => {
        right[i].style.zIndex = "auto";
      }, 300);
    }

    this.setState({ currentIndex: right.length - 1 });
  };

  turnEnd = () => {
    const { z, currentIndex, right } = this.state;

    for (let i = right.length - 1; i >= 0; i--) {
      right[i].className = " right flip";
      
      setTimeout(() => {
        right[i].style.zIndex = right.length - i;
      }, 300);
    }

    this.setState({ currentIndex: -1 });
  };

  renderBookCovers = () => {
    const { images } = this.state;
    let imgArray = [];

    if (images.length % 2 == 1) {
      images.push({
        href: "",
        white: true,
      });
    }

    images.reverse();

    for (let index = 0; index < images.length; index += 2) {
      imgArray.push(
        <div key={index} className={`right`}>
          {images[index + 1] &&
            (images[index + 1].white ? (
              <figure
                className="front"
                style={{
                  backgroundColor: "white",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                }}
              ></figure>
            ) : (
              <figure
                className="front"
                style={{
                  backgroundImage: `url(${images[index + 1].url})`,
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                }}
              ></figure>
            ))}
          <figure
            className="back"
            id={index === images.length - 1 ? "cover" : ""}
            style={{
              backgroundImage: `url(${images[index].url})`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              backgroundSize: "contain",
            }}
          ></figure>
        </div>
      );
    }
    return imgArray;
  };

  render() {
    let width = this.state.width * 2;

    return (
      <div className="book-section">
        <div
          className="container"
          style={{ width: `${width}px`, height: `${this.state.height}px` }}
        >
          {this.renderBookCovers()}
        </div>
        <button
          onClick={this.turnHome}
          disabled={this.state.currentIndex >= this.state.right.length - 1}
        >
          Home
        </button>
        <button
          onClick={this.turnLeft}
          disabled={this.state.currentIndex >= this.state.right.length - 1}
        >
          Өмнөх
        </button>
        <button
          onClick={this.turnRight}
          disabled={this.state.currentIndex === -1}
        >
          Дараах
        </button>
        <button
          onClick={this.turnEnd}
          disabled={this.state.currentIndex === -1}
        >
          End
        </button>
      </div>
    );
  }
}

export default FlipBook;
