// import React, { useState } from 'react';
// import './App.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Preferences from './Components/Preferences/Preferences';
// import Login from './Components/Login/Login';
// import useToken from './Components/App/useToken';

// // function setToken(userToken) {
// //     sessionStorage.setItem('token', JSON.stringify(userToken));
// // }

// // function getToken() {
// //     const tokenString = sessionStorage.getItem('token');
// //     const userToken = JSON.parse(tokenString);
// //     return userToken?.token
// // }

// function App() {
// //   const [token, setToken] = useState();

// //   const token = getToken();

//   const { token, setToken } = useToken();

//   if(!token) {
//     return <Login setToken={setToken} />
//   }

//   return (
//     <div className="wrapper">
//       <h1>Application</h1>
//       <BrowserRouter>
//         <Switch>
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//           <Route path="/preferences">
//             <Preferences />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;