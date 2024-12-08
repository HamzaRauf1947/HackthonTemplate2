import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavAbout = () => {
  return (
    <>
       <div className="flex justify-between items-center sticky top-0 z-50 h-[69px] bg-white lg:px-[28px] px-4"> {/* Added bg-white */}
                <div>
                 
                    <div className="text-[24px] text-pupleText ">Avion</div>
                </div>

             

               <div className='flex items-center gap-[47px] '>
               <ul className="w-full md:flex items-center justify-center gap-[32px] text-lightPurple hidden">
                <li><Link href="/">About us</Link></li>
                <li><Link href="/">Contact</Link></li>
                <li><Link href="/">Blog</Link></li>
                
            </ul>

               <div className="flex items-center gap-4">
                <Image
                        src="/Search.svg"
                        alt="Search"
                        width={16}
                        height={16}
                        className="md:block hidden"
                    />
                    <Image
                        src="/Shopping--cart.svg"
                        alt="Search"
                        width={16}
                        height={16}
                        className="md:block hidden"
                    />
                    <Image
                        src="/User--avatar.svg"
                        alt="Search"
                        width={16}
                        height={16}
                        className="md:block hidden"
                    />
                   

                    <Image
                        src="/Menu.svg"
                        alt="Menu"
                        width={20}
                        height={20}
                        className="md:hidden block "
                    />
                </div>
               </div>
            </div>

            <hr className="w-full mx-auto" />

            {/* links */}
            <ul className="w-full md:flex items-center justify-center gap-[30px] lg:gap-[44px] h-[64px] px-4 bg-lightGray text-lightPurple hidden">
            <li><Link href="/">Home</Link></li>
                <li><Link href="/About">About Us</Link></li>
                <li><Link href="/ProductListing">Product Listing</Link></li>
                <li><Link href="/ShoppingBasket">Shopping Basket</Link></li>
                <li><Link href="/ProductListings">Product Listings</Link></li>
              
            </ul>
    </>
  )
}

export default NavAbout
