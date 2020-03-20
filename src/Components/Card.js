import React from 'react';
import teams from './teams';


const card = (props) =>
{
    const {id,name,appearances,image} = props;
    return (
        
        <div className='tc bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img height="400px" width="300px" alt={name} src={image} />
        <div>
            <h2> {name} </h2>
            <p>  {appearances} Appearances </p>
        </div>
        </div>

    )
}

export default card;