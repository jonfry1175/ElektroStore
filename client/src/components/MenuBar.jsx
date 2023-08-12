import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {AiFillBulb} from 'react-icons/ai'

const MenuBar = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary-secondary">
            <div className="container-fluid">
                <Link class="navbar-brand logo" to="/">
                    <AiFillBulb className='me-2'/>
                    Elektro Store
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="/products">Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/brands">Brands</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/categories">Categories</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
        </>
  )
  //   <>
  //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  //       <div className="container">
  //         <a className="navbar-brand" href="/">HOME</a>
  //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  //           <span className="navbar-toggler-icon"></span>
  //         </button>
  //         <div className="collapse navbar-collapse" id="navbarNav">
  //           <ul className="navbar-nav">
  //             <li className="nav-item">
  //               <Link className="nav-link" to="/products">PRODUCT</Link>
  //             </li>
  //             <li className="nav-item">
  //               <Link className="nav-link" to="/brands">BRAND</Link>
  //             </li>
  //             <li className="nav-item">
  //               <Link className="nav-link" to="/categories">CATEGORY</Link>
  //             </li>
  //             {/* <li className="nav-item">
  //               <a className="nav-link disabled" aria-disabled="true">Disabled</a>
  //             </li> */}
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>

  //     <Outlet />
  //   </>
  // );
};


export default MenuBar;