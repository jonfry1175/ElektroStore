import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2';


const Product = () => {

  const [products, setProducts] = useState([]);
  const URL = "http://localhost:3000"

  const getProducts = async () => {
    try {
      let temp = await axios({
        url: `${URL}/products`,
        method: "GET",
      });

      // console.log(temp.data)
      setProducts(temp.data);
    } catch (err) {
      alert(err)
    }
  };




  const deleteProduct = async (id) => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You want to delete this product?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, destroy it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios({
            url: `${URL}/products/delete/${id}`,
            method: "DELETE"
          })
          getProducts()
          Swal.fire(
            'Deleted!',
            "Your Product has been deleted!",
            "success"
          )
        }
      })
    } catch (err) {
      alert(err)
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Our Product</h1>
      <Link className="btn btn-success mt-2 mb-2" to="/products/create">
        +add Product
      </Link>
      <div className="container card container">
        <div className="row">
          {products.length !== 0 ? (
            products.map((product) => {
              return (
                <div className="col-4">
                  <div className="card">
                    <img className="img-fluid card-img-top" src={product.image} />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">Price: Rp. {product.price}</p>
                      <p className="card-text">Stock: {product.stock}</p>
                      <button onClick={() => deleteProduct(product.id)} className='btn btn-sm btn-danger'>DELETE</button>
                      <Link
                        // onClick={() => UpdateProduct({id: product.id})}
                        to={`update/${product.id}`}
                        class="btn btn-primary"
                      >
                        update
                      </Link>
                    </div>
                  </div>
                </div>

              );
            })
          ) : (
            <h1>sabar bang</h1>
          )}
        </div>
      </div>
    </div>
  )

};
export default Product