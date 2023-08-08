import { React, useState, useEffect, } from 'react'
import axios from 'axios'

function Category() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try{
      let temp = await axios({
        url: "http://localhost:3000/categories",
        method: "GET",
      });

      console.log(temp.data)
      setCategories(temp.data);
    } catch(err) {
      alert(err)
    }
  };

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <div>
          <h1>Our Category</h1>
          {/* <Link className="btn btn-success mt-2 mb-2" to="/products/create">
            +add Product
          </Link> */}
          <div className="container">
            <div className="row">
              {categories.length !== 0 ? (
                categories.map((categories) => {
                  return (               
                          <div className="col-4">
                            <div className="card">
                              <img className="img-fluid card-img-top" src={categories.image} />
                              <div className="card-body">
                                <h5 className="card-title">{categories.name}</h5>
                                {/* <p className="card-text">Price: {categories.price}</p>
                                <p className="card-text">Stock: {categories.stock}</p> */}
                              </div>
                            </div>
                          </div>
                    // <div className="col-4">
                    //   <div className="card">
                    //     <img className="img-fluid card-img-top" src={categories.image} />
                    //     <div className="card-body">
                    //       <h5 class="card-title">{categories.name}</h5>
                    //     </div>
                    //   </div>
                    // </div>
                  );
                })
              ) : (
                <h1>sabar bang</h1>
              )}
            </div>
          </div>
    
          {/* <h3>{movies[0].title}</h3> */}
        </div>
      )
}

export default Category