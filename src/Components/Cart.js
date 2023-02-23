import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios';

//Function to get user specific  cart data from db.json file
function Cart( ) {
  let id = JSON.parse(localStorage.getItem("id"));
  const [data, setdata] = useState('');
  const getUsers = async () => {
    const response = await fetch(`http://localhost:3001/cart?uid=${id}`);
    const Data = await response.json();
    setdata(Data)
  } 

  useEffect(() => {
    getUsers();
  })

  //Function to delete cart data from db.json file
  const deletehandler = (item, e) => {
    e.preventDefault()
    axios.delete(`http://localhost:3001/cart/${item.id}`)
      .then(res => {
        window.location.reload(false);
      })
  }

//Function for Conditional Rendering (When Cart Is not Empty)
  function ifCartIsNotEmpty(){
    return (
      <div className="container"><br/>
        <div className="card-table" >
          <div className="cart-product">
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Details</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  data && data.map((item, index) => (
                    <tr >
                      <td>{index + 1}  </td>
                      <td style={{ whitespace: "nowrap", overflow: "hidden", textoverflow: "ellipsis" }}> {item.cart.title}</td>
                      <td > <img className="cartimg" src={item.cart.image} alt=""></img></td>
                      <td >{item.cart.category}</td>
                      <td>{item.cart.price} $</td>
                      <td>
                        <button className="btn btn-outline-success mx-4 " onClick={(e) => deletehandler(item, e)} >Delete</button>
                      </td>
                    </tr>
                  ))
                }
                <button className="btn btn-primery ">Checkout</button>
              </tbody>
            </table>                
          </div>
        </div>
      </div>
      )
  }

  return (
    <>
      <Link className="btn btn-outline-success mx-5 my-4 " type="submit" to={'/'} >Back</Link>

      {/* Conditional Rendering for cart is empty or not*/}
      {
        data.length === 0 ?                 
            <div className="center">
              <strong>
                <h4>Your cart is empty</h4>
              </strong>
            </div>
  
        : ifCartIsNotEmpty()
      }
    </>
  )
}

export default Cart
