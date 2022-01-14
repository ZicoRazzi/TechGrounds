import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavMenu() {
  return (
    <div>
      <ul>
        <li>
          <NavLink className="link" to="/Home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/Opdracht_1">
            Opdracht 1
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/Opdracht_2">
            Opdracht 2
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/Opdracht_3">
            Opdracht 3
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/Use_Effect_API">
            useEffect &amp; API
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/Increment_Decrement">
            Increment &amp; Decrement
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
