import React from 'react';
import './Profile.css';

function Profile(props) {
    return (
        <div className="profileContainer">
          <header>Tutorial 3 Profile Page</header>
          <label className="profile-label">First Name: {props.firstName}</label>
          <label className="profile-label">Last Name: {props.lastName}</label>
          <label className="profile-label">Email: {props.email}</label>
          <button onClick={props.resetForm}>Back</button>
        </div>
    )
}

export default Profile;
