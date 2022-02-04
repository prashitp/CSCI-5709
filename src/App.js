import "./App.css";
import { React, useState } from "react";
import Registration from "./components/Registration";
import Profile from "./components/Profile";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    matchPassword: false
  });

  const submitForm = () => {
    if (valid.firstName && valid.lastName && valid.email && valid.password && valid.matchPassword) {
      setSubmitted(true);
    } else {
      alert("Please enter valid details!");
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setRePassword("");
    setValid({
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      matchPassword: false
    });
    setSubmitted(false)
  };

  if (!submitted) {
    return <Registration
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      rePassword={rePassword}
      setRePassword={setRePassword}
      submitForm={submitForm}
      valid={valid}
      setValid={setValid}
    />;
  } else {
    return <Profile firstName={firstName} lastName={lastName} email={email} resetForm={resetForm}/>;
  }
}

export default App;
