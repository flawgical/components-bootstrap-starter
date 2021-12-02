import React from 'react';
import CardBody from './CardBody';

// create our component 

const Card1 = () => {
    return (
        <div class="card" style={{width:'18rem'}}>
        <img
          src="https://images.unsplash.com/photo-1498712964741-5d33ab9e5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=600"
          className="card-img-top"
          alt="..."
        />
        <CardBody />
       
      </div>
    )
}

export default Card1 