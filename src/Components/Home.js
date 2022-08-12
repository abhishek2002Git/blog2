import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to="/blog"> <button>Blog</button></Link>
        <Link to="/product/parameter-here"> <button>Product</button></Link>
        <Link to="/product/62dbc411a4317d8aebebcfd0"> <button>1</button></Link>
        <Link to="/product/62dbd10b8fbf44ccd18b973f"> <button>2</button></Link>
        <Link to="/product/parameter-herewdsad"> <button>3n</button></Link>
        <div>Home page</div>
    </div>
  )
}

export default Home 