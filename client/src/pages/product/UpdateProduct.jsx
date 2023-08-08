import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams} from 'react-router-dom'
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const navigate = useNavigate()
    const URL = 'http://localhost:3000/products/update'

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const { id } = useParams();

    const productUpdate = async () => {
        try {
            let result = await axios({
                url: `${URL}/${id}`,
                method: "PUT",
                data: {
                    name,
                    image,
                    price,
                    stock,
                    BrandId: 7,
                    CategoryId: 7,
                },
            });
            Swal.fire(
              'product updated!',
              "product has been updated to list",
              "succes!"
            )

            navigate('/products')
        } catch (err) {    
          Swal.fire(
            'Product not updated!',
            'please enter the correct data',
            'error'
          )
        }
    };
    const submitHandler = (e) => {
        e.preventDefault()
        productUpdate()
    };

    return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Update Product {id}</h3>
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
export default UpdateProduct