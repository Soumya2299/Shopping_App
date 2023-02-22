import { useState } from "react"
import { Link , useNavigate} from "react-router-dom"

function Signup() {
  const usenavigate = useNavigate();

  const [userData, setuserData] = useState({
    id: '',
    mob: '',
    password: '',
    username: ''
   
  })

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3001/users/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(usenavigate('/login'))
  }

  function handleChange(e) {
    setuserData({ ...userData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* <div>
             <form className='login-form' onSubmit={e => handleSubmit(e)}>
                 <input type='text' placeholder='Username' value={userData.username} name='username' onChange={e => handleChange(e)} ></input>
                 <input type='text' placeholder='Email' value={userData.id} name='id' onChange={e => handleChange(e)} ></input>
                <input type='text' placeholder='Password' value={userData.password} name='password' onChange={e => handleChange(e)} ></input>
                <button className='login-btn' type='submit'>Sign Up</button>
             </form>
            
         </div> */}
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
              </div>
              <div className="btns2"> 
              <td><button type="submit" className="btn btn-outline-success  mx-1 my-2 " onClick={e => handleSubmit(e)}>Register</button></td>
              <td><Link type="button" className="btn btn-outline-success " to={'/login'} >Back</Link></td>
              </div>

            </form>

          </main>
        </body>
      </>
    </>
  )
}

export default Signup