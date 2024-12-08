import Link from "next/link"
import Navbar from "../component/Navbar"
import Image from "next/image"


const page = () => {
  return (
    <div>
        <Navbar/>
        <div className="w-full flex justify-center  bg-lightGray px-4">
            <div className="w-full max-w-7xl text-darkPurple ">

                <h1 className="md:text-[36px] text-[24px] mt-[64px] mb-[48px] ">Your shopping cart</h1>

                <div className="lg:flex hidden items-center justify-between">
                    <p className="basis-[60%] text-[14px]">
                    Product
                    </p>
                    <div className="basis-[40%] flex items-center justify-between">
                        <p className="text-[14px]">Quantity</p>
                        <p className="text-[14px]">Total</p> 
                      

                    </div>

                </div>



                <div className="w-full  h-[1px] bg-BorderGrey mt-3 mb-5 lg:block hidden mx-auto"></div>

                <div className="flex items-center justify-between lg:mb-5 mb-7">


                        <div className="flex justify-between items-center ">
                                <div className="flex items-center gap-[21px]">
                                    <Image
                                    src="/matka.png"
                                    alt="Parent"
                                    width={109}
                                    height={134}
                                    />

                                    <div className="space-y-2">
                                        <p className="md:text-[20px] text-[18px]">Graystone vase</p>
                                        <p className=" text-[14px] font-satoshi">A timeless ceramic vase with<br />a tri color grey glaze.</p>
                                        <p className=" md:text-[18px] text-[16px] font-satoshi">£85</p>
                                        <div className=' flex md:hidden  items-center gap-[33px]'>
                                <button className='text-BorderGrey'><Link href="#">-</Link></button>
                                <p className='text-textp'>1</p>
                                <button className='text-BorderGrey'><Link href="#">+</Link></button>
                            </div>

                                    </div>
                                </div>
                        </div>


                       
                                     
                                     <div className=' lg:flex hidden    items-center gap-[33px]'>
                             <button className='text-BorderGrey'><Link href="#">-</Link></button>
                             <p className='text-textp'>1</p>
                             <button className='text-BorderGrey'><Link href="#">+</Link></button>
                         </div>

                             
                        
                        <div className="text-[18px] lg:flex hidden  justify-end font-satoshi ">£85</div>
                </div>


                <div className="flex items-center justify-between">


                        <div className="flex justify-between items-center ">
                                <div className="flex items-center gap-[21px]">
                                    <Image
                                    src="/pot2.png"
                                    alt="Parent"
                                    width={109}
                                    height={134}
                                    />

                                    <div className="space-y-2">
                                        <p className="md:text-[20px] text-[18px]">Basic white vase</p>
                                        <p className=" text-[14px] font-satoshi">Beautiful and simple this is<br />one for the classics</p>
                                        <p className=" md:text-[18px] text-[16px] font-satoshi">£125</p>
                                        <div className=' flex md:hidden  items-center gap-[33px]'>
                                <button className='text-BorderGrey'><Link href="#">-</Link></button>
                                <p className='text-textp'>1</p>
                                <button className='text-BorderGrey'><Link href="#">+</Link></button>
                            </div>

                                    </div>
                                </div>
                        </div>


                       
                                     
                                     <div className=' lg:flex hidden    items-center gap-[33px]'>
                             <button className='text-BorderGrey'><Link href="#">-</Link></button>
                             <p className='text-textp'>1</p>
                             <button className='text-BorderGrey'><Link href="#">+</Link></button>
                         </div>

                             
                        
                        <div className="text-[18px] lg:flex hidden  justify-end font-satoshi ">£125</div>
                </div>


                <div className="w-full  h-[1px] bg-BorderGrey mt-9 mb-7  mx-auto"></div>



                <div className="flex items-center justify-end">
                    <div>
                        <div className="flex items-center justify-end gap-4 mb-3">
                            <h1 className="text-[20px] text-Primary ">Subtotal</h1>
                            <h1 className="text-[24px] text-darkPurple">£210</h1>

                        </div>

                        <p className="text-[14px] text-Primary mb-4">Taxes and shipping are calculated at checkout</p>

                       


                    </div>
                </div>
                <div className="flex items-center justify-end ">
                <button className='bg-darkPurple text-white sm:w-[172px]  font-satoshi w-full mb-[48px] h-[56px]'>
                <Link href="#">Go to checkout</Link>             </button>
                </div>
               



            </div>

        </div>
      
    </div>
  )
}

export default page
