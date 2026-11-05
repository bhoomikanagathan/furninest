import React from 'react'


function Navbar() {
  return (
    <div>
      <nav>
        <h1>FurniNest</h1>

        <div>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div>
          <button> 🛒 Cart</button>
          <button>Login</button>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
