import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Roots Feed</Link>
      </li>
      <li>
        <Link to="/">Jungle</Link>
      </li>
    </div>
  )
}

export default Navbar;