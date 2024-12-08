import React from 'react'
import NavbarTop from '../component/NavbarTop'
import Image from 'next/image'
import Link from 'next/link'
import Whatmakes from '../component/Whatmakes'

const page = () => {
    return (
        <div>
            <NavbarTop />
            <div className="flex justify-between items-center sticky top-0 z-50 h-[69px] bg-white lg:px-[28px] px-4"> {/* Added bg-white */}
                <div>

                    <div className="text-[24px] text-pupleText ">Avion</div>
                </div>

                <ul className="w-full md:flex items-center justify-center gap-[32px] text-lightPurple hidden">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/About">About Us</Link></li>
                <li><Link href="/ProductListing">Product Listing</Link></li>
                <li><Link href="/ShoppingBasket">Shopping Basket</Link></li>
                <li><Link href="/ProductListings">Product Listings</Link></li>
                <li><Link href="">Tableware</Link></li>
                <li><Link href="">Cutlery</Link></li>

                </ul>


                <div className='flex items-center gap-[47px] '>


                    <div className="flex items-center gap-4">
                        <Image
                            src="/Search.svg"
                            alt="Search"
                            width={16}
                            height={16}
                            className="md:block "
                        />
                        <Image
                            src="/Shopping--cart.svg"
                            alt="Search"
                            width={16}
                            height={16}
                            className="md:block "
                        />
                        <Image
                            src="/User--avatar.svg"
                            alt="Search"
                            width={16}
                            height={16}
                            className="md:block "
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


            {/* Our Service  */}
            <div className="w-full grid lg:grid-cols-2 gap-[52px] grid-cols-1 text-darkPurple ">


                <div>
                    <Image
                        src="/Image Left chair.png"
                        alt="Image"
                        width={721}
                        height={759}
                        className="w-full lg:mb-0 mb-10"

                    />
                </div>

                <div className=" h-[600px] px-4 xl:py-[51px] lg:py-[15px]  xl:pr-16  ">

                    <div>
                        <h1 className='md:text-[36px] text-[24px]'>The Dandy Chair</h1>
                        <h1 className='md:text-[36px] text-[24px]'>£250</h1>
                    </div>

                    <div className='xl:p-[40px_40px_23px_0px] lg:p-[10px_40px_23px_0px]'>
                        <div>
                            <p className='text-[16px]'>Description</p>
                            <p className='md:text-[16px] text-[14px] mt-[16px] lg:max-w-[498px]' >A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                        </div>
                    </div>

                  
                    <ul className='text-textp md:text-[16px] text-[14px] sm:mt-0 mt-3 '>
                        <li className='list-disc ml-10 '>Premium material</li>
                        <li className='list-disc ml-10'>Premium material</li>
                        <li className='list-disc ml-10'>Premium material</li>
                    </ul>


                    <div className=''>
                    <p className='text-[16px] mb-[28px] mt-[27px]'>Dimension</p>

                    <div className='flex items-center justify-between max-w-[241px]'>
                        <div>
                            <p className='text-[14px] mb-3'>Height</p>
                            <p className='lg:text-[16px] text-[14px] mb-3 text-textp'>110cm</p>
                        </div>

                        <div>
                            <p className='text-[14px] mb-3'>Width</p>
                            <p className='lg:text-[16px] text-[14px] mb-3 text-textp'>75cm</p>
                        </div>


                        <div>
                            <p className='text-[14px] mb-3'>Depth</p>
                            <p className='lg:text-[16px] text-[14px] mb-3 text-textp'>50cm</p>
                        </div>
                        

                    </div>


                    </div>



                    <div className='flex sm:flex-row flex-col sm:items-center justify-between  sm:gap-0 gap-4'>

                        <div className='flex sm:flex-row flex-col sm:items-center gap-5'>
                            <p>Amount:</p>
                            <div className='flex items-center justify-center sm:w-[122px] w-full max-w-7xl h-[46px] bg-lightGray'>
                            <div className=' flex items-center gap-3'>
                                <button className='text-darkPurple'><Link href="/#">-</Link></button>
                                <p className='text-textp'>1</p>
                                <button className='text-darkPurple'><Link href="/#">+</Link></button>
                            </div>
                            </div>

                        </div>


                        <button className='bg-darkPurple text-white sm:w-[143px] w-full h-[56px]'>
                            <Link href="/#">Add to cart</Link>
                        </button>


                    </div>
                   

                  

                   

                </div>





            </div>




            {/* New ceramics start */}
            <div className="w-full flex justify-center px-4 py-[60px] pt-[80px] pb-[58px]">

                <div className="w-full max-w-7xl text-darkPurple">
                    <h1 className=" text-[32px] mb-[33px] ">You might also like</h1>

                    <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-4">

                        {/* card1 */}
                        <div>
                            <Image
                                src="/chaircard.png"
                                alt="Right Image"
                                width={305}
                                height={375}
                                className="mb-[24px] w-full"

                            />
                            <h3 className="text-[20px] mb-2">The Dandy chair</h3>
                            <h3 className="text-[18px]">£250</h3>
                        </div>

                        {/* card2 */}
                        <div>
                            <Image
                                src="/matka.png"
                                alt="Right Image"
                                width={305}
                                height={375}
                                className="mb-[24px] w-full"

                            />
                            <h3 className="text-[20px] mb-2">The Dandy chair</h3>
                            <h3 className="text-[18px]">£250</h3>
                        </div>


                        {/* card3 */}
                        <div>
                            <Image
                                src="/Parent.png"
                                alt="Right Image"
                                width={305}
                                height={375}
                                className="mb-[24px] w-full"

                            />
                            <h3 className="text-[20px] mb-2">The Silky Vase</h3>
                            <h3 className="text-[18px]">£125</h3>
                        </div>


                        {/* card4 */}
                        <div>
                            <Image
                                src="/lamp.png"
                                alt="Right Image"
                                width={305}
                                height={375}
                                className="mb-[24px] w-full"

                            />
                            <h3 className="text-[20px] mb-2">The Lucy Lamp</h3>
                            <h3 className="text-[18px]">£399</h3>
                        </div>

                    </div>

                    {/* Button View All */}
                    <div className="w-full flex mt-[35px] items-center justify-center">
                        <button className="flex justify-center items-center md:w-[170px] w-full  h-[56px] text-darkPurple  bg-lightGray"><Link href="">View collection</Link></button>


                    </div>

                </div>

            </div>
            {/* New ceramics end */}

            <Whatmakes />

            {/* Join the club and get the benefits section start */}
            <div className="w-full flex justify-center px-4  pt-[52px] pb-[65px] bg-lightGray">

                <div className="w-full max-w-7xl text-darkPurple bg-white pt-[52px] pb-[65px] px-4  ">

                    <div className="sm:text-center text-left ">
                        <h1 className="text-[36px]">Join the club and get the benefits</h1>
                        <p>Sign up for our newsletter and receive exclusive offers on new</p>
                        <p>oranges, sales, pop up stores and more</p>
                    </div>




                    {/* field start */}
                    <div className="flex justify-center mt-[72px] ">

                        <form action="" className="flex  w-full max-w-[472px] h-[58px]">
                            <input
                                type="text"
                                id="input-field"
                                placeholder="your@email.com"
                                className="px-4 py-2 border-none outline-none w-full text-[16px] text-darkPurple bg-lightGray"
                            />
                            <button className="text-white w-[118px]  bg-darkPurple h-[58px] flex justify-center items-center">Sign up</button>
                        </form>
                    </div>

                    {/* field end */}




                    <div />

                </div>


                {/* Join the club and get the benefits section end */}
            </div>
            {/* Join the club and get the benefits section end */}







        </div>
    )
}

export default page
