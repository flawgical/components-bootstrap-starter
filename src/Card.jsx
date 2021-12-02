import React from 'react';
import Cardbody from './CardBody';
import Cardimage from './CardImage';

const Card = (props) => {
    return (
      <div className="card" style={{width:'18rem'}}>
      <Cardimage img={props.img} />
      <Cardbody title={props.title} text={props.text} url={props.url}/>
    </div>
    )
  }

export default Card;
