import React from "react";
import "./Signup.css";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [usernameSignup, setUsernameSignup] = useState("");
  const [emailSignup, setEmailSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [cfPasswordSignup, setCfPasswordSignup] = useState("");
  const [validUsername, setvalidUsername] = useState(false);
  const [validEmail, setvalidEmail] = useState(false);
  const [validPassword, setvalidPassword] = useState(false);
  const [validCfPassword, setvalidCfPassword] = useState(false);
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidCfPassword, setInvalidCfPassword] = useState(false);

  const handleSignup = () => {
    const listAccountSignup = localStorage.getItem("listAccountSignup")
      ? JSON.parse(localStorage.getItem("listAccountSignup"))
      : [];
    const accountSignup = {
      username: usernameSignup,
      email: emailSignup,
      password: passwordSignup,
      cfPassword: cfPasswordSignup,
    };

    if (accountSignup.username === "") {
      setInvalidUsername(true);
    } else if (accountSignup.username !== "") {
      setInvalidUsername(false);
      setvalidUsername(true);
    }

    if (accountSignup.email === "") {
      setInvalidEmail(true);
    } else if (accountSignup.email !== "") {
      setInvalidEmail(false);
      setvalidEmail(true);
    }

    if (accountSignup.password === "") {
      setInvalidPassword(true);
    } else if (accountSignup.password !== "") {
      setInvalidPassword(false);
      setvalidPassword(true);
    }

    if (accountSignup.cfPassword !== accountSignup.password) {
      setInvalidCfPassword(true);
    } else if (
      accountSignup.cfPassword === accountSignup.password &&
      accountSignup.cfPassword !== ""
    ) {
      setInvalidCfPassword(false);
      setvalidCfPassword(true);
    }

    if (
      accountSignup.email !== "" &&
      accountSignup.email !== "" &&
      accountSignup.password !== "" &&
      accountSignup.cfPassword === accountSignup.password
    ) {
      listAccountSignup.push(accountSignup);
      localStorage.setItem(
        "listAccountSignup",
        JSON.stringify(listAccountSignup)
      );
      setTimeout(() => {
        alert("Đăng ký tài khoản thành công!");
        navigate("/Login");
      }, 500);
    }
  };

  return (
    <div className="signup-page">
      <Form className="form-input-wrapper">
        <FormGroup>
          <Label>Username</Label>
          <Input
            placeholder="Enter Your Username"
            type="text"
            value={usernameSignup}
            onChange={(e) => setUsernameSignup(e.target.value)}
            valid={validUsername}
            invalid={invalidUsername}
          />
          <FormFeedback>Please enter your Username</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input
            name="email"
            placeholder="Enter Your Email"
            type="email"
            value={emailSignup}
            onChange={(e) => setEmailSignup(e.target.value)}
            valid={validEmail}
            invalid={invalidEmail}
          />
          <FormFeedback>Please enter your Email</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            placeholder="*********"
            type="password"
            value={passwordSignup}
            onChange={(e) => setPasswordSignup(e.target.value)}
            valid={validPassword}
            invalid={invalidPassword}
          />
          <FormFeedback>Please enter your Password</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>Confirm Password</Label>
          <Input
            placeholder="*********"
            type="password"
            value={cfPasswordSignup}
            onChange={(e) => setCfPasswordSignup(e.target.value)}
            valid={validCfPassword}
            invalid={invalidCfPassword}
          />
          <FormFeedback>Those passwords didn't match. Try again.</FormFeedback>
        </FormGroup>

        <FormGroup>
          <span>
            Already have an account? <NavLink to="/Login">Login</NavLink>
          </span>
        </FormGroup>

        <Button type="button" className="signup-btn" onClick={handleSignup}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
