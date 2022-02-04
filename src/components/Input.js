import React from "react";
import './Input.css';

function Input(props) {
  return (
    <div className="field">
      <div className="inputFields">
        <label className="label">{props.label}</label>
        <input
          type={props.type}
          value={props.firstName}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
      <div className="errorFields">
        <label className="error">{props.errorMsg}</label>
      </div>
    </div>
  );
}

export default Input;
