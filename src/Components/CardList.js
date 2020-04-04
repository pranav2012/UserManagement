import React from 'react';
import Cards from './Cards';

const Cardlist = ({dat}) => {
    const user = dat.map((usr,ind)=>{
        return <Cards
            key={ind}
            picture={dat[ind].picture}
            name={dat[ind].name}
            email={dat[ind].email}
            />
        });
return(
        <div>
            {user}
        </div>    
        );
}

export default Cardlist;