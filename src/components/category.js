import {Route,Link ,BrowserRouter as Router}from 'react-router-dom';
import React from 'react';
import Boots from './Boots';
import Shoes from './Shoes';
import Footwear from './Footwear';
const category =({match}) =>{
    return (
        <div>
          <h1>category </h1>
          <ul>
              <li>
                  <Link to ={`${match.url}/shoes`}>shoes </Link></li>
                 <li> <Link to ={`${match.url}/boots`}>boots </Link></li>
                  <li><Link to ={`${match.url}/footwear`}>footwear </Link></li>
              
              </ul> 
              <Route path={`${match.path}/:name`} render ={({math}) =>(<div><h3>{match.params.name}</h3></div>)}/>
        </div>
    )
}
export default category