import React from "react";
import "./style.css";

class Paper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images || [],
      width: props.width,
      height: props.height,
      currentPage: 0,
      length: 0,
      classNames: document.getElementsByClassName("page-front"),
    };
  }

  componentDidMount() {
    this.setState({
      length: this.state.images.length,
    });
    const { classNames } = this.state;
    classNames[this.state.currentPage].classList.add("pg-p1");
    if (this.state.length > this.state.currentPage + 1)
      classNames[this.state.currentPage + 1].classList.add("pg-p2");
  }

  turnLeft = () => {
    if (this.state.currentPage > 0) {
      this.setState({ currentPage: this.state.currentPage - 1 });
      console.log(
        "🚀 ~ Paper ~ this.state.currentPage:",
        this.state.currentPage
      );
      const { classNames } = this.state;

      if (this.state.currentPage < this.state.length - 1)
        classNames[this.state.currentPage + 1].classList.remove("pg-p2");
      classNames[this.state.currentPage].classList.add("pg-p2");
      classNames[this.state.currentPage].classList.remove("pg-p1");
      if (0 < this.state.currentPage)
        classNames[this.state.currentPage - 1].classList.add("pg-p1");
    }
  };
  turnRight = () => {
    if (this.state.currentPage < this.state.images.length - 1) {
      this.setState({ currentPage: this.state.currentPage + 1 });
      console.log(
        "🚀 ~ Paper ~ this.state.currentPage:",
        this.state.currentPage
      );
      const { classNames } = this.state;

      if (this.state.currentPage > 0)
        classNames[this.state.currentPage - 1].classList.remove("pg-p1");
      classNames[this.state.currentPage].classList.add("pg-p1");
      classNames[this.state.currentPage].classList.remove("pg-p2");
      if (this.state.length > this.state.currentPage + 1)
        classNames[this.state.currentPage + 1].classList.add("pg-p2");
    } else {
      this.setState({ currentPage: 0 });
      const { classNames } = this.state;

      try {
        classNames[this.state.length - 1].classList.remove("pg-p2");
        if (this.state.length > 1)
          classNames[this.state.length - 2].classList.remove("pg-p1");

      } catch (e) {
        console.log("e", e);
      }
    }
  };

  render() {
    const { images, width, height } = this.state;

    return (
      <div className="container">
        <div className="paper-book" style={{ height: height, width: width }}>
          {images &&
            images.map((image, index) => (
              <div
                className="page-front"
                style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "100%",
                  backgroundSize: "contain",
                }}
                key={index}
                id={`p${index + 1}`}
                width={width}
                height={height}
              ></div>
            ))}
        </div>

        <button onClick={this.turnLeft}>Prev</button>
        <button onClick={this.turnRight}>Next</button>
      </div>
    );
  }
}

export default Paper;
