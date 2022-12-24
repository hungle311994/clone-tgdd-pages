import "./withLoading.css";
import React, { Component } from "react";

const withLoading = (WrappedComponent) => {
  class HOC extends Component {
    render() {
      if (this.props.productList.length === 0) {
        return (
          <>
            <div className="circle"></div>
          </>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
  }
  return HOC;
};

export default withLoading;
