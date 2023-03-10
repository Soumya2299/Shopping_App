import React from 'react'
import { Link,useNavigate } from "react-router-dom"

function Navbar({stat}) {
    const usenavigate = useNavigate();
    const logouthandler =()=>{
        usenavigate('/')
        localStorage.setItem("uname",JSON.stringify(null));
        localStorage.setItem("id",JSON.stringify(null));
        localStorage.setItem("stat",JSON.stringify(false));
        window.location.reload(false);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <strong>
                    <a className="navbar-brand  " href="/">Sky Shop</a>
                </strong>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

            {/* Conditional Rendering to show Login or Logout Button*/}
            {stat === true ?
                <button className="btn btn-outline-success mx-4 " type="submit" onClick={logouthandler} >Logout</button>
                :
                <Link className="btn btn-outline-success mx-4 " type="submit" to={'/login'} >Login</Link>
            }

            {/* Conditional Rendering to show Cart Button*/}
            { stat === false?
             null
             :                
             <Link className="btn btn-outline-success mx-4 " type="submit" to={'/cart'} >cart</Link>
            }
        </nav>
    )
}

export default Navbar
