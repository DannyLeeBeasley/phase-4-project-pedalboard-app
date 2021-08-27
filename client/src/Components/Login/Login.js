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

function Login( { setUser }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin]  = useState('')
 
  const [errors, setErrors] = useState([])

  function onSubmit(e){
      e.preventDefault()
      const user = {
          username,
          password
      }
      let API_PATH 
        login ? API_PATH = 'sessions' : API_PATH = 'users'
        fetch(`http://localhost:3000/${API_PATH}`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if(json.error){
                setErrors(json.error)
            }else {
                setUser(json)
            }
        })
  }

  return (
      <> 
      <form onSubmit={onSubmit}>
      <label>
        Username
        <br/>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
       Password
      <br/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
     
      <input type="submit" value="Sign up!" />
      <input type="submit" value="Login!" onClick={()=> setLogin(true)} />

    </form>
    {/* {errors?errors.map(e => <div>{e}</div>):null} */}
      </>
  )
}

export default Login;

