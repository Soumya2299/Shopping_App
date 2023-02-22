import React from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login( ) {
  const [username, usernameupdate] = useState('');
  const [password, passwordupdate] = useState('');

  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);
  const Login = (e) => {

    e.preventDefault();
    if (validate()) {

      console.log('proceed');
      fetch("http://localhost:3001/users/" + username).then((res) => {
        return res.json();
      }).then((resp) => {
        console.log(resp)
        if (Object.keys(resp).length === 0) {
          console.log("Please Enter valid username")

        } else {
          if (resp.password === password) {
            console.log('Success');
            sessionStorage.setItem('username', username);
            usenavigate('/')
            
            localStorage.setItem("uname",JSON.stringify(resp.username));
            localStorage.setItem("id",JSON.stringify(resp.id));
            localStorage.setItem("stat",JSON.stringify(true));

          } else {
            console.log('Please Enter valid credentials');
            
          }
        }
      })
    }

  }

  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      console.log('Please Enter Username');
    }
    if (password === '' || password === null) {
      result = false;
      console.log('Please Enter Password');
    }
    return result;
  }
  return (




    <body className="text-center">

      <main className="col-md-4 offset-md-4">
        <form style={{ width: 400 }} >

          <h1 className="h3 mb-3 my-4 fw-normal">Please Log-in</h1>



          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
              value={username} onChange={e => usernameupdate(e.target.value)} />
            <label htmlFor="floatingInput"> Email </label> <br />
          </div>



          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
              value={password} onChange={e => passwordupdate(e.target.value)} />
            <label htmlFor="floatingPassword">Password</label>
          </div>


        <div className="btns1">

          <td><button type="submit" className="btn btn-outline-success  mx-1 my-2" onClick={Login}>Login</button></td>
          <td><Link type="button" className="btn btn-outline-success  mx-1 my-2" to={'/'} >Back</Link></td>
          <td> <Link type="button" className="btn btn-outline-success  mx-1 my-2" to={'/register'}>New User</Link></td>
          </div>
        </form>

      </main>
    </body>
  )
}

export default Login
