import React from 'react';
import Button from './Button';
import Cardbody from './CardBody';

const Card2 = () => {
    return (
      <div className="card" style={{width:'18rem'}}>
      <img
          src="https://images.unsplash.com/photo-1536514072410-5019a3c69182?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          className="card-img-top"
          alt="..."
        />
      <Cardbody title="Mikonos"/>
      <Button />
    </div>
    )
  }
export default Card2;
