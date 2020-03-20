import React from 'react';

const SearchBox = ({ searchfield, searchChange }) =>{
    return (
        <div><p className="f3 lh-copy pa2">
            Formerly known by names including "Atlas" and "Timely", Marvel Entertainment is the publisher of comic books featuring iconic 
            characters and teams such as the Fantastic Four, Spider-Man, the Avengers, the X-Men, Iron Man, the Hulk, Thor, Captain America and Daredevil. 
            Currently owned by the Walt Disney Company, Marvel is one of the "Big Two" comic publishers along with DC Comics.
        </p>
        <input className= 'tc bg-lightest-blue ba pa3 b--red br4 bw1'
        type = 'search'
        placeholder = 'search team..'
        onChange = {searchChange}
        />
        <br /><br></br>
        </div>
    )
}

export default SearchBox;