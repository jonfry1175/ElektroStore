import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';

// import Swal from 'sweetalert2'



function CreateProduct() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState("");

  const addProduct = async () => {
    try {
      let result = await axios({
        url: "http://localhost:3000/products/create",
        method: "POST",
        data: {
          name,
          price,
          stock,
          image,
          BrandId: 7,
          CategoryId: 7
        }
      })
      setName("")
      setImage("")
      setStock("")
      setPrice("")
      Swal.fire(
        'product created',
        'product has been added to list',
        'success'
      )

      navigate("/products");
    
    } catch (err) {
      alert(err);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault()
    addProduct()
   };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Create Product</h3>
        </div>
        <div className="col-6 mx-auto form-submit">
          <form>
            <div className="mb-3">
              <label>Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input title"
              ></input>
            </div>
            <div className="mb-3">
              <label>Image</label>
              <input
                onChange={(e) => setImage(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input image"
              ></input>
            </div>
            <div className="mb-3">
              <label>Price</label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input price"
              ></input>
            </div>
            <div className="mb-3">
              <label>Stock</label>
              <input
                onChange={(e) => setStock(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Input price"
              ></input>
            </div>
            <div className="mb-3">
              <button className="btn btn-success w-100" onClick={submitHandler}>
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <h1>movie submit</h1> */}
    </div>
  );

}

export default CreateProduct

