import React from 'react';

const Button = (props) => {
    return (
        <div>
            <a href={props.url} className="btn btn-primary">
          Go somewhere
        </a>
        </div>
    );
}

export default Button;
