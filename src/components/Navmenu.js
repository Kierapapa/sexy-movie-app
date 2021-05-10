import React from 'react';
import {Link} from 'react-router-dom';

export const Navmenu = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}
export default Navmenu;