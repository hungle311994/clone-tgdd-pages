import React, { Component } from "react";
import { Navigate } from "react-router-dom";

const withAuth = (AuthenticationComponent) => {
  class HOC extends Component {
    accountLogin = JSON.parse(localStorage.getItem("accountLogin"));

    render() {
      if (this.accountLogin) {
        return <AuthenticationComponent {...this.props} />;
      } else {
        return <Navigate to="/Login" />;
      }
    }
  }
  return HOC;
};

export default withAuth;
