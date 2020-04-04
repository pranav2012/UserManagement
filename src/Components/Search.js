import React from 'react';
import 'tachyons';

const Search = ({sfunc}) =>{
    return(
    <div>
        <input type="search" className='tc pa2 ma4 sans-serif br4 bg-lightest-blue b--light-blue' 
        placeholder="Search User"
        onChange={sfunc}
        />
    </div>
    );
}

export default Search;