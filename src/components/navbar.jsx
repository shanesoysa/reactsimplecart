import React, { Component } from 'react';


const NavBar = (props) => {
    return ( 
                <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar {props.totalItems}</a>
        
      </nav> 
     );
}
 
export default NavBar;

