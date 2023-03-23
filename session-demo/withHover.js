import { Component } from "react";

class WithHover extends Component {
  constructor() {
    super();
    this.state = {
      isHovered: false,
    };
  }

  render() {
    const mouseInhandler = () => {
      this.setState({
        isHovered: true,
      });
    };
    const mouseOuthandler = () => {
      this.setState({
        isHovered: false,
      });
    };
    return (
      <div
        isHovered={this.state.isHovered}
        onMouseEnter={mouseInhandler}
        onMouseLeave={mouseOuthandler}
      >
        <Component></Component>
      </div>
    );
  }
}
export default WithHover;
