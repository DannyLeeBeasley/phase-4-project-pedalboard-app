import React from "react";

function NewUser() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    window.location.href = "/login";
  };
  return (
    <div>
      <h1>New User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="text"></input>
        </label>
        <br />
        <label>
          Username
          <input type="text"></input>
        </label>
        <br />
        <label>
          Password
          <input type="text"></input>
        </label>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default NewUser;
