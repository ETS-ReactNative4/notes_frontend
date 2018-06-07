import React from 'react';
import {Link} from 'react-router-dom';

const HomeHeader = () => {
    return (
        <div className="home-header">
            <div className="header-title">
                <h1>My Notes</h1>
                <p>Click the button below to add a new note, or scroll 
                    down to see a list of saved notes</p>
            </div>
            <div>
                <Link to={`notes/new-note`}>
                    <button className="add-button">
                        Add New Note
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HomeHeader;