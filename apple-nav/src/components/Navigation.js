import React from 'react';
import navLinksData from '../navData';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className='mainNav'>
           <Link to='/'> <img src='apple-logo.png' id='applelogo'></img></Link>
      {
            navLinksData.map(link => {    
                return <div className='mainNavLink'><Link to={'/' + link.title}>{link.title}</Link></div>
            })
        }
            <img src='search-50.png' id='search'></img>
            <img src='shopping-bag-32.png' id='shopbag'></img>

    </div>
  );
}
