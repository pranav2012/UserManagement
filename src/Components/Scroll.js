import React from 'react';
import 'tachyons';

const Scroll = (props) => {
    return(    
    <div style={{overflowY:'Scroll', height:'59vh'}}>
        {props.children}
    </div>
    )}

export default Scroll;