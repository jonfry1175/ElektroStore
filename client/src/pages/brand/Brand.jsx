import { React, useState, useEffect} from 'react'
import axios from 'axios'

function Brand() {
    const[brands, setBrands] = useState([]);

    const getBrands = async () => {
        try{
            let temp = await axios({
                url: "http://localhost:3000/brands",
                method: "GET",
            });

            console.log(temp.data)
            setBrands(temp.data);
        } catch(err) {
            alert(err)
        }
    };

    useEffect(() => {
        getBrands();
    }, [])

    return (
        <div>
          <h1>Our Brand</h1>
          {/* <Link className="btn btn-success mt-2 mb-2" to="/products/create">
            +add Product
          </Link> */}
          <div className="container">
            <div className="row">
              {brands.length !== 0 ? (
                brands.map((brands) => {
                  return (               
                          <div className="col-4">
                            <div className="card">
                              <img className="img-fluid card-img-top" src={brands.image} />
                              <div className="card-body">
                                <h5 className="card-title">{brands.name}</h5>
                                {/* <p className="card-text">Price: {brands.price}</p>
                                <p className="card-text">Stock: {brands.stock}</p> */}
                              </div>
                            </div>
                          </div>
                    // <div className="col-4">
                    //   <div className="card">
                    //     <img className="img-fluid card-img-top" src={product.image} />
                    //     <div className="card-body">
                    //       <h5 class="card-title">{product.name}</h5>
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

export default Brand