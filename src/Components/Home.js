import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Home( {stat}) {
    const [users, setUsers] = useState([]);
    const name = JSON.parse(localStorage.getItem("uname"));

    //Function to get data from external API
    const getUsers = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const Data = await response.json();
        setUsers(Data)
    }
    useEffect(() => {
        getUsers();
    }, [])

    const [Data ] = useState({
        uid: '',
        cart:'',       
      })
      
    //Function to add items data into Cart Array in db.json file  
    const addtocart =(e)=>{
        Data.uid = JSON.parse(localStorage.getItem("id"));
        Data.cart=e
        fetch(" http://localhost:3001/cart",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body : JSON.stringify(Data)
          }).then((res)=>{    
            // console.log(res)     
          });
      }

    return (
        <>
            <Navbar stat={stat} />

            <h2 className='welcome my-2 mx-2'> Welcome {name}</h2>
            <div className="container">
                {
                    users.map((item) => {
                        return (
                            <div className="card_item" key={item.id}>
                                <div className="card_inner">
                                    <img src={item.image} alt="" />
                                    <div className="title">{item.title}</div>
                                        <div className="description">{item.description}</div>
                                            {stat === false ?
                                                <Link className=" btn btn-outline-success " to={"/login"}>Add to Cart</Link>

                                            : <button className=" btn btn-outline-success " onClick={() => addtocart(item)}>Add to Cart</button>
                                            // Button for add to cart after login 
                                            }
                                         </div>
                                    </div>
                                )
                        }
                    )
                }
            </div>
        </>
    )
}

export default Home;

