import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({ friend }) => {
    const { id, name, email, username } = friend;
    return (
        <div className='friend'>
            <h3>Name:{name}</h3>
            <p>Email:{email}</p>
            {/* // hardcode */}
            {/* <p><small>userName:<Link to={'/friend'}>{username}</Link></small></p>// hardcode */}
            {/* dynamic route */}
            <p><small>userName:<Link to={`/friend/${id}`}>{username}</Link></small></p>

        </div>
    );
};

export default Friend;