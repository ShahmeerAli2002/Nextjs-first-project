import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    
     <div className='bg-gray-800 h-12'>
        <div className='text-white flex justify-between items-center'>
            <h1 className='text-xl m-2 hover:text-yellow-500' >Website</h1>
            <ul className='flex gap-4 mr-4 curser-pointer'>

         <Link href="/"className =' hover:text-blue-500' >Home</Link>
         <Link href="/about" className =' hover:text-blue-500' >About</Link>
         <Link href="/contact" className =' hover:text-blue-500' >Contact</Link>
         <Link href="/login" className =' hover:text-blue-500' >Login</Link>
           
            
            </ul>

        </div>
        <main >
          <h1 className='text-white text-4xl mt-10 ml-7 text-center'><u className='hover:text-yellow-600'><b>Information</b></u></h1>
          <div className='items-center flex justify-center mt-20'>
            <p className='text-white text-center ' > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dicta culpa quia iusto doloremque labore excepturi, dolorem dolore, laboriosam, nulla eveniet. Provident totam voluptatem est, fuga expedita facere excepturi consequatur temporibus illo autem illum eum, nulla repellendus perferendis voluptas. Recusandae repellendus nihil quo at temporibus consequuntur culpa quidem quod provident aperiam officia, facilis eveniet distinctio voluptate! Sed culpa dignissimos possimus! Minima temporibus, atque quos delectus ipsam, laboriosam deleniti porro pariatur fugit distinctio consequuntur quam nemo recusandae? Eaque ratione pariatur repellat ipsam suscipit nemo, excepturi voluptate perferendis quasi optio obcaecati temporibus. Ad mollitia laborum similique odio voluptatibus fuga quaerat iste consequatur!</p>
             </div>
        </main>
      
    </div>
    
  )
}

export default Navbar


