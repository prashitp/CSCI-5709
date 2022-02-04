import { React, useState } from "react";
import Input from "./Input";
import "./Registration.css";

function Registration(props) {
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");

  const onChangeFirstName = (event) => {
    if (!/^[a-zA-Z]+$/.test(event.target.value)) {
      props.setValid({ ...props.valid, firstName: false });
      setFirstNameError("First name should contain only alphabets");
    } else {
      props.setValid({ ...props.valid, firstName: true });
      setFirstNameError("");
    }
    props.setFirstName(event.target.value);
  };

  const onChangeLastName = (event) => {
    if (!/^[a-zA-Z]+$/.test(event.target.value)) {
      props.setValid({ ...props.valid, lastName: false });
      setLastNameError("Last name should contain only alphabets");
    } else {
      props.setValid({ ...props.valid, lastName: true });
      setLastNameError("");
    }
    props.setLastName(event.target.value);
  };

  const onChangeEmail = (event) => {
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
    ) {
      props.setValid({ ...props.valid, email: false });
      setEmailError("Provide a valid email address");
    } else {
      props.setValid({ ...props.valid, email: true });
      setEmailError("");
    }
    props.setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    props.setPassword(event.target.value);
  };

  const onChangeRePassword = (event) => {
    props.setRePassword(event.target.value);
  };

  const validatePassword = () => {
    if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(
        props.password
      )
    ) {
      props.setValid({ ...props.valid, password: false });
      setPasswordError(
        "Password should be min 8 char with atleast 1 letter, 1 number, 1 special char"
      );
    } else {
      props.setValid({ ...props.valid, password: true });
      setPasswordError("");
    }
  };

  const matchPassword = () => {
    if (props.password !== props.rePassword) {
      props.setValid({ ...props.valid, matchPassword: false });
      setPasswordMatchError("Password does not match");
    } else {
      props.setValid({ ...props.valid, matchPassword: true });
      setPasswordMatchError("");
    }
  };

  const submitClick = () => {
    props.submitForm();
  };

  return (
    <div className="regContainer">
      <header>Tutorial 3 Registration Page</header>
      <Input
        label="First Name:"
        type="text"
        value={props.firstName}
        onChange={onChangeFirstName}
        errorMsg={firstNameError}
      />
      <Input
        label="Last Name:"
        type="text"
        value={props.lastName}
        onChange={onChangeLastName}
        errorMsg={lastNameError}
      />
      <Input
        label="Email:"
        type="text"
        value={props.email}
        onChange={onChangeEmail}
        errorMsg={emailError}
      />
      <Input
        label="Password:"
        type="password"
        value={props.password}
        onChange={onChangePassword}
        errorMsg={passwordError}
        onBlur={validatePassword}
      />
      <Input
        label="Confirm Password:"
        type="password"
        value={props.rePassword}
        onChange={onChangeRePassword}
        errorMsg={passwordMatchError}
        onBlur={matchPassword}
      />
      <button onClick={submitClick}>Submit</button>
    </div>
  );
}

export default Registration;
