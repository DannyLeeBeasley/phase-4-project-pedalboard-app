import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Login.css";

// async function loginUser(credentials) {
//   return fetch("http://localhost:3000/user", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   }).then((data) => data.json());
// }

export default function Login({ setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState('')
  const [errors, setErrors] = useState([])

  function onSubmit(e) {
    e.preventDefault()
    const user = {
      username,
      password
    }
    let API_PATH
    login ? API_PATH = 'sessions' : API_PATH = 'users'
    fetch(`/${API_PATH}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        if (json.error) {
          setErrors(json.error)
        } else {
          setUser(json)
        }
      })
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <label>
          Username
          <br />
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password
          <br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Sign up!" />
        <input type="submit" value="Login!" onClick={() => setLogin(true)} />
      </Form>
      {/* {errors ? errors.map(e => <Errors>{e}</Errors>) : null} */}
    </>
  )
}

export default Login;

//   const [username, setUserName] = useState();
//   const [password, setPassword] = useState();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = await loginUser({
//       username,
//       password,
//     });
//     setToken(token);
//   };

  // return (
  //   <div className="login-wrapper">
  //     <h1 className="login-head">Please Log In</h1>
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         <p>Username</p>
  //         <input
  //           className="input-field"
  //           type="text"
  //           onChange={(e) => setUserName(e.target.value)}
  //         />
  //       </label>
  //       <label>
  //         <p>Password</p>
  //         <input
  //           className="input-field"
  //           type="password"
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //       </label>
  //       <div>
  //         <input type="submit" value="Submit"></input>
  //       </div>
  //     </form>
  //     <a className="new-user-link" href="./newuser">
  //       New User? Sign up!
  //     </a>
  //   </div>
  // );
// }
// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
