// import React , { useState } from 'react';
// import PropTypes from 'prop-types';
// import './Login.css';

// async function loginUser(credentials) {
//     return fetch('https://teampolaris.web.illinois.edu/user-login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
//    }

// export default function Login({ setToken }) {
//   const [userId, setUserId] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const token = await loginUser({
//         userId,
//       password
//     });
//     setToken(token);
//   }

//   return(
//     <div className="login-wrapper">
//       <h1>Please Log In</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <p>Username</p>
//           <input type="text" onChange={e => setUserId(e.target.value)}/>
//         </label>
//         <label>
//           <p>Password</p>
//           <input type="password" onChange={e => setPassword(e.target.value)}/>
//         </label>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   )
// }


// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   }