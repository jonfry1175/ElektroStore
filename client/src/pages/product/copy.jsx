import React, { useState, useEffect } from "react";
import axios from "axios";
// React Hooks : React Lifecycle akan berjalan ketika component di execute
// REact Hooks : useState, useEffect
import Swal from 'sweetalert2'

import { Link } from 'react-router-dom'
import NowLoading from '../../components/NowLoading'

const Product = () => {
    const [products, setProducts] = useState([]);
    const URL = "http://localhost:3000/api"

    const getProducts = async () => {
        try {
            let temp = await axios({
                url: `${URL}/products`,
                method: "GET",
            })
            console.log(temp.data)
            setProducts(temp.data)
        } catch (err) {
            alert(err)
        }
    }
    const deleteProduct = id => {
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
                        url: `${URL}/products/destroy/${id}`,
                        method: 'DELETE'
                    })
                    getProducts()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
        } catch (err) {
            Swal.fire(
                'Product not deleted.',
                'Failed to delete product.',
                'error'
            )
        }
    }

    useEffect(() => {
        console.log("useEffect berjalan")
        getProducts()

    }, [])

    return (
        <>
            <div className="row text-center">
                <h3 className="">Products Page</h3>
                <p>Lorem ipsum is a dummy text</p>
                <hr />
            </div>

            <div className="row">
                <div className="col-12 p-2">
                    <div className="float-start">
                        <h3>Product List</h3>
                    </div>
                    <div className="float-end">
                        <Link className="btn btn-sm btn-success" to="/products/create">Create Product</Link>
                    </div>
                </div>
                <div className="col-12">
                    <table className="table table-bordered border-dark">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length !== 0 ?
                                products.map((product) => {
                                    const { id, name, price, stock, image, User, Brand } = product;
                                    return (
                                        <tr key={id}>
                                            <td>
                                                <div className="row">
                                                    <div className="col-3">
                                                        <img className="img-fluid" src={image} />
                                                    </div>
                                                    <div className="col-9">
                                                        <h3 className="text-success">{name}</h3>
                                                        <h5 className="text-primary">Rp. {price}</h5>
                                                        <p>Stock: {stock} pcs</p>
                                                        <small className="badge bg-success">{User.username}</small>
                                                        <p>{Brand.name}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <button onClick={() => deleteProduct(id)} className="btn btn-sm btn-danger">Remove</button>
                                                <button className="btn btn-sm btn-info">Edit</button>
                                            </td>
                                        </tr>
                                    );
                                }) :
                                <NowLoading />
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Product;