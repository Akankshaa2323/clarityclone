import React from 'react'

const Navbar = () => {
  return (
    <>

<nav className="flex justify-around mt-5">
  <div class="logo">
    <img src="https://clarity-tailwind.preview.uideck.com/images/logo.svg" height="30px" width="121px" />
  </div>

    <ul className="flex gap-8">
      <li>Home</li>
      <li>Pages</li>
      <li>Blog</li>
      <li>Support</li>
    </ul>

    <div className="flex gap-7">
      <img src="https://tse3.mm.bing.net/th?id=OIP.6EXAb8MZ0MuJMmJYcBq2xgHaFP&pid=Api&P=0&h=180" height="18px" width="18px" />
      <img src="https://tse3.mm.bing.net/th?id=OIP.frEI4mbQxLk4OsYevJhv7QHaGY&pid=Api&P=0&h=180" height="18px" width="18px"/>
      <img src="https://tse2.mm.bing.net/th?id=OIP.U8qv0J4syQ4Gcz9bJ1WVOAHaFj&pid=Api&P=0&h=180" height="18px" width="18px" />
      <img src="https://tse2.mm.bing.net/th?id=OIP.jkpmnfqTe29QLQ4XXydoIgHaHa&pid=Api&P=0&h=180" height="18px" width="18px" />
      </div>
      
      <button> &#128269;</button>
      <button className="bg-black  text-white w-36 rounded-2xl">Subscribe</button>
   
  
</nav>


    </>
  )
}

export default Navbar