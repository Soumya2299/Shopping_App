import { useState } from "react"
import { Link , useNavigate} from "react-router-dom"

function Signup() {
  const usenavigate = useNavigate();
  const [userData, setuserData] = useState({
    id: '',
    mob: '',
    password: [],
    username: ''
  })

  //Function to post user data in "user" Array in db.json file
  function handleSubmit(e) {
    e.preventDefault()
    if (validate()) {
    fetch('http://localhost:3001/users/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(usenavigate('/login'))
  }}

  //Function to check validation
  const validate = () => {
    let result = true;
    if (userData.id === '' || userData.id === null) {
      result = false;
      alert('Please Enter Email');
    }
    if (userData.username === '' || userData.username === null) {
      result = false;
      alert('Please Enter Username');
    }
    if (userData.mob === '' || userData.mob === null) {
      result = false;
      alert('Please Enter Mobile No.');
    }
    if (userData.password === '' || userData.password === null) {
      result = false;
      alert('Please Enter Password');
    }
    if (userData.password.length !==5 ) {
      result = false;
      alert('Minimum password length is 5 charectors');
    }
    return result;
  }
  
  // Event handler function
  function handleChange(e) {
    setuserData({ ...userData, [e.target.name]: e.target.value })
  }

  return (
      <>
        <body className="text-center">
          <main className="col-md-4 offset-md-4">
            <form style={{ width: 400 }}>
              <h1 className="h3 mb-3 my-4 fw-normal">Please Sign-in</h1>

              <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput"
                  placeholder='Username' value={userData.username} name='username' onChange={e => handleChange(e)} />
                <label htmlFor="floatingInput"> Full Name </label> <br />
              </div>

              <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                  value={userData.id} name='id' onChange={e => handleChange(e)} />
                <label htmlFor="floatingInput"> Email </label> <br />
              </div>

              <div className="form-floating">
                <input type="number" className="form-control" id="floatingInput" placeholder="123456789"
                  value={userData.mob} name='mob' onChange={e => handleChange(e)} />
                <label htmlFor="floatingInput"> Mobile No. </label> <br />
              </div>

              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                  value={userData.password} name='password' onChange={e => handleChange(e)} />
                <label htmlFor="floatingPassword">Password</label>
              </div><br />

              <div className="btns2"> 
              <td><button type="submit"  className="btn btn-outline-success  mx-2 my-2 " onClick={e => handleSubmit(e)}>Register</button></td>
              <td><Link type="button" className="btn btn-outline-success " to={'/login'} >Back</Link></td>
              </div>

            </form>
          </main>
        </body>
      </>
   
  )
}

export default Signup