import React from 'react';
import 'tachyons';

const Cards = ({picture,name,email}) =>{
        return(
                <div className ='tc bg-lightest-blue grow br3 dib pa3 ma2'>
                    <img src={picture} alt="Robots" className='br-100'/>
                    <div>
                    <h2 className='f3 georgia i'>{name}</h2>
                    </div>
                    <div>
                    <p className='i blue f6'>{email}</p>
                    </div>
                </div>
                    );
    }
export default Cards;
