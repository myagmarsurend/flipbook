import React from "react";
import PropTypes from "prop-types";
import {
  LeftOutlined,
  RightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";
import "./style.css";

class FlipBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images || [],
      right: document.getElementsByClassName("p-right"),
      currentIndex: 0,
      z: 1,
      width: this.props.width,
      height: this.props.height,
      odd: 1,
      cover: true,
    };
  }

  componentDidMount() {
    let { images } = this.props;
    const { right } = this.state;

    if (images.length % 2 === 1) {
      images = [...images, { href: "", white: true }];
      this.setState({ odd: 0 });
    } else {
      this.setState({ odd: 1 });
    }

    this.setState({
      currentIndex: right.length - 1,
      images: images.reverse(),
    });

    setTimeout(() => {
      setInterval(() => {
        if (this.state.currentIndex > 0) {
          const button = document.getElementsByClassName("p-button-right")[0];
          button.click();
        } else {
          const button = document.getElementsByClassName("p-button-home")[0];
          button.click();
        }
      }, 8000);
    }, 6000);
  }

  checkCover = () => {
    const { right } = this.state;
    let count = 0;
    for (let i = 0; i < right.length; i++) {
      if (right[i].classList.contains("flip")) {
        count++;
      }
    }
    return count;
  };

  turnRight = () => {
    const { z, currentIndex, right } = this.state;

    if (currentIndex >= 0) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
      }));
    } else {
      this.setState({
        currentIndex: right.length - 1,
      });

      for (let i = 0; i < right.length; i++) {
        right[i].className = "p-right";
        right[i].style.zIndex = "auto";
        this.setState({ z: 1 });
      }
    }

    if (currentIndex >= 0) {
      right[currentIndex].classList.add("flip");
      this.setState(prevState => ({ z: prevState.z + 1 }));

      setTimeout(() => {
        right[currentIndex].style.zIndex = z;
      }, 250);
    }

    if (this.checkCover() === right.length) {
      const container = document.getElementsByClassName("p-container")[0];
      container.style.transform = "translateX(-25%)";
    } else if (this.checkCover() < right.length) {
      const container = document.getElementsByClassName("p-container")[0];
      container.style.transform = "translateX(-50%)";
    }
  };

  turnLeft = () => {
    const { currentIndex, right } = this.state;

    if (currentIndex < right.length - 1) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
      }));
    } else {
      this.setState({
        currentIndex: 0,
      });

      for (let i = right.length - 1; i >= 0; i--) {
        right[i].classList.add("flip");
        right[i].style.zIndex = right.length - i;
      }
    }
    if (currentIndex >= -1) {
      if (right[currentIndex + 1]) {
        right[currentIndex + 1].className = "p-right";

        setTimeout(() => {
          right[currentIndex + 1].style.zIndex = "auto";
        }, 300);
      }
    }

    if (this.checkCover() < right.length) {
      const container = document.getElementsByClassName("p-container")[0];
      container.style.transform = "translateX(-50%)";
    }
    if (this.checkCover() === 0) {
      const container = document.getElementsByClassName("p-container")[0];
      container.style.transform = "translateX(-75%)";
    }
  };
  turnHome = () => {
    const { right } = this.state;

    for (let i = 0; i < right.length; i++) {
      right[i].className = "p-right";
      this.setState({ z: 1 });
      setTimeout(() => {
        right[i].style.zIndex = "auto";
      }, 300);
    }

    this.setState({ currentIndex: right.length - 1 });
    const container = document.getElementsByClassName("p-container")[0];
    container.style.transform = "translateX(-75%)";
  };

  turnEnd = () => {
    const { right, odd } = this.state;

    if (odd === 1) {
      for (let i = right.length - 1; i >= 0; i--) {
        right[i].className = "p-right flip";

        setTimeout(() => {
          right[i].style.zIndex = right.length - i;
        }, 300);
      }
    } else {
      for (let i = right.length - 1; i > 0; i--) {
        right[i].className = "p-right flip";

        setTimeout(() => {
          right[i].style.zIndex = right.length - i;
        }, 300);
      }
    }
    this.setState({ currentIndex: odd === 1 ? -1 : 0 });

    if (odd === 0) {
      const container = document.getElementsByClassName("p-container")[0];
      container.style.transform = "translateX(-50%)";
    } else {
      const container = document.getElementsByClassName("p-container")[0];
      container.style.transform = "translateX(-25%)";
    }
  };

  renderBookCovers = () => {
    const { images, right } = this.state;
    let imgArray = [];

    for (let index = 0; index < images.length; index += 2) {
      imgArray.push(
        <div key={index} className="p-right">
          {images[index + 1] && (
            <a
              href={images[index + 1].href}
              className="p-front"
              style={{
                backgroundImage: `url(${images[index + 1].url})`,
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
              }}
            >
              {" "}
            </a>
          )}

          {images[index].white ? (
            <a
              className="p-back"
              style={{
                backgroundColor: "white",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
              }}
            >
              {" "}
            </a>
          ) : (
            <a
              href={images[index].href}
              className="p-back"
              id={index === images.length - 1 ? "cover" : ""}
              style={{
                backgroundImage: `url(${images[index].url})`,
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
              }}
            >
              {" "}
            </a>
          )}
        </div>,
      );
    }
    return imgArray;
  };

  render() {
    return (
      <div className="p-book-section">
        <div
          className="p-container"
          style={{
            width: `${this.state.width}px`,
            height: `${this.state.height}px`,
            transform: "translateX(-75%)",
          }}
        >
          {this.renderBookCovers()}
        </div>
        <button
        className="p-button-home"
          onClick={this.turnHome}
          disabled={this.state.currentIndex >= this.state.right.length - 1}
        >
          <DoubleLeftOutlined />
        </button>
        <button
          onClick={this.turnLeft}
          disabled={this.state.currentIndex >= this.state.right.length - 1}
        >
          <LeftOutlined />
        </button>
        <button
          onClick={this.turnRight}
          className="p-button-right"
          disabled={
            this.state.odd === 1
              ? this.state.currentIndex === -1
              : this.state.currentIndex === 0
          }
        >
          <RightOutlined />
        </button>
        <button
          onClick={this.turnEnd}
          disabled={
            this.state.odd === 1
              ? this.state.currentIndex === -1
              : this.state.currentIndex === 0
          }
        >
          <DoubleRightOutlined />
        </button>
      </div>
    );
  }
}

FlipBook.propTypes = {
  images: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default (FlipBook);
