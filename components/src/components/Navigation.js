import React from 'react'
export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><a className='active' href='#home'>Home</a></li>
        <li><a href='#gernal'>TV Series</a></li>
        <li><a className='Add' href='#add'>Movies</a></li>
        <div class="header-right">
        <li><a className='Login' href='#login'>Login</a></li>
        <li><a href='#register'>Register</a></li>
        </div>
      </ul>
    </nav>
  )
}