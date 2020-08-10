import React from 'react'
import {Route,Link}from 'react-router-dom';
const adminarea=({match})=> {
return(<div>
    <p>You must log in to view the page at /admin</p>
    <button>Login</button>
    </div>
)
}
export default adminarea