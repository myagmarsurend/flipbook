import React, { Component } from 'react';
// Import Ant Design CSS
import 'antd/dist/antd.css';

class Magnifier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      magnifierState: {
        top: 0,
        left: 0,
        offsetX: 0,
        offsetY: 0
      },
      isVisible: false
    };
  }

  handleMouseMove = (e) => {
    const { magnifierRadius } = this.props;
    this.setState({ isVisible: true });
    const smallImage = e.currentTarget;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    this.setState({
      magnifierState: {
        top: y - magnifierRadius,
        left: x - magnifierRadius,
        offsetX: (x / smallImage.width) * smallImage.naturalWidth - magnifierRadius,
        offsetY: (y / smallImage.height) * smallImage.naturalHeight - magnifierRadius
      }
    });
  };

  handleMouseLeave = () => {
    this.setState({ isVisible: false });
  };

  render() {
    const { imgSrc, imgWidth, imgHeight, magnifierRadius } = this.props;
    const { magnifierState, isVisible } = this.state;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            src={imgSrc}
            width={imgWidth}
            height={imgHeight}
            style={{
              maxHeight: "50vh",
              maxWidth: "50vh",
              height: "auto",
              width: "auto"
            }}
            onMouseMove={this.handleMouseMove}
            onMouseLeave={this.handleMouseLeave}
          />
          <div
            style={{
              boxShadow: "0 5px 10px -2px rgba(0, 0, 0, 0.3)",
              pointerEvents: "none",
              position: "absolute",
              border: "4px solid #efefef",
              zIndex: 99,
              display: "block",
              transition: "opacity 0.2s",
              background: `url("${imgSrc}") no-repeat #fff`,
              width: 2 * magnifierRadius,
              height: 2 * magnifierRadius,
              borderRadius: magnifierRadius,
              top: magnifierState.top + "px",
              left: magnifierState.left + "px",
              backgroundPositionX: -1 * magnifierState.offsetX + "px",
              backgroundPositionY: -1 * magnifierState.offsetY + "px",
              opacity: isVisible ? 1 : 0
            }}
          />
        </div>
      </div>
    );
  }
}

export default Magnifier;
