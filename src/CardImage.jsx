import React from 'react';

const CardImage = (props) => {
    return (
        <div>
             <img
          src={props.img}
          className="card-img-top"
          alt="..."
        />
        </div>
    );
}

export default CardImage;
