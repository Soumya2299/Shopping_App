import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Home() {

    const [users, setUsers] = useState([]);
    const name = JSON.parse(localStorage.getItem("uname"));
    let stat = JSON.parse(localStorage.getItem("stat"));


    const getUsers = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const Data = await response.json();
        setUsers(Data)

    }



    useEffect(() => {
        getUsers();
    }, [])


    return (
        <>
            <Navbar />

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

                                        : null 
                                        // code for add to cart after login 
                                    }

                                </div>

                            </div>
                        )
                    })
                }

            </div>

        </>
    )
}

export default Home;

