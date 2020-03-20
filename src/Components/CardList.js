import React from 'react';
import Card from './Card';


const CardList = ({teams})=>{
    

       return(
        <div>{
            teams.map((user,i) => {
            return <Card
            key={i}
            id={teams[i].name}
            name={teams[i].name}
            appearances={teams[i].appearances}
            image = {teams[i].image}
            />
            })
        }
        </div>
            
    );
}

export default CardList;