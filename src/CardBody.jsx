import React from 'react';
import Button from './Button';

const Cardbody = (props) => {
    // console.log('this is my props', props.title)
    return (
        <div className="card-body">
       <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.text}
        </p>
        <Button url={props.url}/>
      </div>
    );
}

export default Cardbody;
