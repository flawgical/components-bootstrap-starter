import React from 'react';
import CardBody from './CardBody';
import CardImage from './CardImage';

// create our component 

const Card1 = () => {
    return (
        <div class="card" style={{width:'18rem'}}>
       <CardImage />
        <CardBody />
       
      </div>
    )
}

export default Card1 