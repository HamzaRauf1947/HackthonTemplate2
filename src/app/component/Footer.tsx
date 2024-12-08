
import Link from "next/link"
import { FaFacebookSquare, FaInstagram,  FaLinkedin, FaPinterest, FaSkype, FaTwitter } from "react-icons/fa"



const Footer = () => {
    return (
        
        <div className="w-full flex justify-center bg-darkPurple px-4 ">
            <div className="w-full  max-w-7xl">

                <div className="flex item-center justify-between lg:flex-nowrap flex-wrap lg:flex-row flex-col lg:gap-0 gap-[40px]  sm:mt-[58px] sm:mb-[48px] mt-[40px] mb-[16px]">
                    
                   <div className="flex items-center  gap-[109px] ">
                   <ul className="text-white text-[14px] space-y-3">
                        <li><Link className="text-[16px]" href="/">Menu</Link></li>
                        <li><Link href="/">New arrivals</Link></li>
                        <li><Link href="/">Best sellers</Link></li>
                        <li><Link href="/">Recently viewed</Link></li>
                        <li><Link href="/">Popular this week</Link></li>
                        <li><Link href="/">All products</Link></li>
                        <li><Link href="/">Cutlery</Link></li>
                    </ul>

                    <ul className="text-white text-[14px] space-y-3">
                        <li><Link className="text-[16px]" href="/">Categories</Link></li>
                        <li><Link href="/">Crockery</Link></li>
                        <li><Link href="/">Furniture</Link></li>
                        <li><Link href="/">Homeware</Link></li>
                        <li><Link href="/">Plant pots</Link></li>
                        <li><Link href="/">Chairs</Link></li>
                        <li><Link href="/">Crockery</Link></li>
                    </ul>
                   </div>


                    

                    {/* field */}
                    <div className="basis-[60%] flex sm:gap-[109px] gap-[40px] sm:flex-row flex-col">
                    <ul className="text-white text-[14px] space-y-3">
                        <li><Link className="text-[16px]" href="/">Our company</Link></li>
                        <li><Link href="/About">About us</Link></li>
                        <li><Link href="/">Vacancies</Link></li>
                        <li><Link href="/">Contact us</Link></li>
                        <li><Link href="/">Privacy</Link></li>
                        <li><Link href="/">Returns policy</Link></li>
                        <li><Link href="/">Crockery</Link></li>
                    </ul>

                        <div className="flex-1">

                            <div className="flex justify-center-center justify-end flex-col">
                            <h1 className="text-white mb-4">Join our mailing list</h1>
                                <form action="" className="flex    w-full  h-[58px] ">
                                    <input
                                        type="text"
                                        id="input-field"
                                        placeholder="your@email.com"
                                        className="px-4 py-2 border-none outline-none w-full text-[16px] text-white bg-[#4a4666]"
                                    />

                                <button className="bg-white w-[118px] text-darkPurple h-[58px] flex justify-center items-center">Sign up</button>
                                </form>
                            </div>
                        </div>


                    </div>
                </div>


                <div className="w-full max-w-[1277px] h-[1px] bg-[#4E4D93] mb-[20px] mx-auto"></div>


                <div className="flex items-center justify-center sm:justify-between mb-[22px]">
                    <h1 className="text-white text-[14px] ">Copyright 2022 Avion LTD</h1>

                    <div className="sm:flex items-center gap-6 hidden  ">
                        <Link className="text-white text-[24px]" href="">
                       
                        <FaLinkedin  />
                  
                        
                        </Link>

                        <Link className="text-white text-[24px]" href="">
                       
                        <FaFacebookSquare />
                  
                        
                        </Link>



                        <Link className="text-white text-[24px]" href="">
                       
                        <FaInstagram />
                        
                  
                        
                        </Link>



                        <Link className="text-white text-[24px]" href="">
                       
                        <FaSkype />
                  
                        
                        </Link>


                        <Link className="text-white text-[24px]" href="">
                       
                        <FaTwitter />
                  
                        
                        </Link>



                        <Link className="text-white text-[24px]" href="">
                       
                        <FaPinterest  />
                  
                        
                        </Link>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Footer
