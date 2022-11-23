import React, { useEffect, useState } from 'react';

const Navbar = () => {
    
return (
   <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         
         <a className="navbar-brand" href="#">Logo Here</a>

         <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
               <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link disabled" href="#">Disabled</a>
               </li>
            </ul>
         </div>
      </nav>
   </>
  )
}

export default Navbar