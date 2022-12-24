import "./Login.css";
import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [validEmail, setvalidEmail] = useState(false);
  const [validPassword, setvalidPassword] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const listAccountSignup = JSON.parse(
      localStorage.getItem("listAccountSignup")
    );

    const accountLogin = {
      email: emailLogin,
      password: passwordLogin,
    };

    // const isCheck = false;
    for (let i = 0; i < listAccountSignup.length; i++) {
      if (
        accountLogin.email !== "" &&
        accountLogin.email === listAccountSignup[0].email
      ) {
        setInvalidEmail(false);
        setvalidEmail(true);
      } else if (
        accountLogin.email === "" ||
        accountLogin.email !== listAccountSignup[0].email
      ) {
        return setInvalidEmail(true);
      }

      if (
        accountLogin.password !== "" &&
        accountLogin.password === listAccountSignup[0].password
      ) {
        setInvalidPassword(false);
        setvalidPassword(true);
      } else if (
        accountLogin.password === "" ||
        accountLogin.password !== listAccountSignup[0].password
      ) {
        return setInvalidPassword(true);
      }
    }

    var kq = listAccountSignup.find(
      (x) =>
        x.email === accountLogin.email && x.password === accountLogin.password
    );
    console.log(kq);

    if (
      accountLogin.email !== "" &&
      accountLogin.email === listAccountSignup[0].email &&
      accountLogin.password !== "" &&
      accountLogin.password === listAccountSignup[0].password
    ) {
      localStorage.setItem("accountLogin", JSON.stringify(accountLogin));
      setTimeout(() => {
        alert("Đăng nhập thành công!!!");
        navigate("/AdminContainer");
      }, 500);
    }
  };

  return (
    <div className="login-page">
      <Form className="form-input">
        <FormGroup>
          <Label>Email</Label>
          <Input
            name="email"
            placeholder="Enter Your Email"
            type="email"
            value={emailLogin}
            onChange={(e) => setEmailLogin(e.target.value)}
            valid={validEmail}
            invalid={invalidEmail}
          />
          <FormFeedback>Email does not exist</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            placeholder="Enter Your Password"
            type="password"
            value={passwordLogin}
            onChange={(e) => setPasswordLogin(e.target.value)}
            valid={validPassword}
            invalid={invalidPassword}
          />
          <FormFeedback>Incorrect Password</FormFeedback>
        </FormGroup>

        <FormGroup>
          <span>
            <NavLink>Forgot your password?</NavLink>
          </span>
        </FormGroup>

        <Button type="button" className="login-btn" onClick={handleLogin}>
          Login
        </Button>

        <FormGroup>
          <span>
            Create new account? <NavLink to="/Signup">Sign up!</NavLink>
          </span>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Login;
