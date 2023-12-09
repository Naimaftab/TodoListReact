import React, { useState } from 'react';
import '../Header/styles.css';
import Link from 'next/link';
 
export default function Header() {
const [showMenu, setShowMenu] = useState(false);

const toggleMenu = () => {
  setShowMenu(!showMenu);
}
  return ( 
    <div className="navbar bg-base-300 navbar-header">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          {showMenu && (
          <ul  tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Catalogue</a></li>
            <li>
              <a>Catalogue 2</a>
              <ul className="p-2">
                <li><a>blablabla</a></li>
                <li><a>blablabla</a></li>
              </ul>
            </li>
            <li><a>Catalogue 3</a></li>
          </ul>
          )}
        </div>
        <a href="/HomePage" className="btn btn-ghost text-xl">Loc'Event</a>
      </div>
      <div className="navbar-end">
      <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div tabIndex="0" className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full ring ring-warning ring-offset-base-100 ring-offset-1">
              <img alt="User Icon" src="../Header/logo-user.png" />
            </div>
          </label>
          <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/components/InscriptionPage">S'inscrire</Link></li>
            <li><Link href="/components/ConnexionPage">Se connecter</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
