import Image from "next/image"
import Navbar from "../component/Navbar"
import Link from "next/link"


const page = () => {
  return (
    <div>
      <Navbar/>


      <div className="w-full h-[209px] bg-bannerImg bg-cover flex justify-center bg-center">
  <div className="w-full max-w-7xl flex sm:items-end items-center justify-center sm:justify-normal sm:mb-[36px] px-4">
    <h1 className="text-white text-[36px] ">All Products</h1>
  </div>
</div>

    <div className="w=full flex justify-center px-4 mt-5">
        <div className="w-full max-w-[1368px] flex justify-between items-center">
            <div className="font-satoshi text-darkPurple flex items-center gap-10 ">
                <div className="md:flex hidden items-center gap-2">
                    <h1>Category</h1>
                    <Image
                        src="/Caret--down.svg"
                        alt="Caret--down"
                        width={16}
                        height={16}
                    />

                </div>

                <div className="md:flex hidden  items-center gap-2">
                    <h1>Product Type</h1>
                    <Image
                        src="/Caret--down.svg"
                        alt="Caret--down"
                        width={16}
                        height={16}
                    />

                </div>

                <div className="md:flex hidden  items-center gap-2">
                    <h1>Pice</h1>
                    <Image
                        src="/Caret--down.svg"
                        alt="Caret--down"
                        width={16}
                        height={16}
                    />

                </div>

                <div className="md:flex hidden  items-center gap-2">
                    <h1>Brand</h1>
                    <Image
                        src="/Caret--down.svg"
                        alt="Caret--down"
                        width={16}
                        height={16}
                    />

                </div>

                <div className="flex items-center md:hidden gap-2 sm:w-[163px] w-[120px] h-[56px] bg-lightGray justify-center">
                    <h1>Filter</h1>
                    <Image
                        src="/Caret--down.svg"
                        alt="Caret--down"
                        width={16}
                        height={16}
                    />

                </div>

            </div>
            <div className="flex  items-center gap-10 ">
            <div className="md:flex hidden  items-center  gap-2">
                    <h1>Sorting by</h1>
                    <Image
                        src="/Caret--down.svg"
                        alt="Caret--down"
                        width={16}
                        height={16}
                    />

                </div>


                <div className="md:flex hidden  items-center gap-2">
                    <h1>Dated Added</h1>
                    <Image
                        src="/Caret--down.svg"
                        alt="Caret--down"
                        width={16}
                        height={16}
                    />



                </div>

                <div className="flex items-center md:hidden gap-2 sm:w-[163px] w-[120px] h-[56px] bg-lightGray justify-center">
                    <h1>Sorting</h1>
                    <Image
                        src="/Caret--down.svg"
                        alt="Caret--down"
                        width={16}
                        height={16}
                    />

                </div>

                
            </div>

        </div>

    </div>



      <div className="w-full flex justify-center px-4 py-[60px] pt-[28px] pb-[58px]">

<div className="w-full max-w-7xl text-darkPurple">


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



     {/* card5 */}
     <div>
      <Image
        src="/1.png"
        alt="Right Image"
        width={305}
        height={375}
        className="mb-[24px] w-full"

      />
      <h3 className="text-[20px] mb-2">The Lucy Lamp</h3>
      <h3 className="text-[18px]">£399</h3>
    </div>


     {/* card6 */}
     <div>
      <Image
        src="/2.png"
        alt="Right Image"
        width={305}
        height={375}
        className="mb-[24px] w-full"

      />
      <h3 className="text-[20px] mb-2">The Lucy Lamp</h3>
      <h3 className="text-[18px]">£399</h3>
    </div>



     {/* card7 */}
     <div>
      <Image
        src="/3.png"
        alt="Right Image"
        width={305}
        height={375}
        className="mb-[24px] w-full"

      />
      <h3 className="text-[20px] mb-2">The Lucy Lamp</h3>
      <h3 className="text-[18px]">£399</h3>
    </div>

       {/* card8 */}
       <div>
      <Image
        src="/4.png"
        alt="Right Image"
        width={305}
        height={375}
        className="mb-[24px] w-full"

      />
      <h3 className="text-[20px] mb-2">The Lucy Lamp</h3>
      <h3 className="text-[18px]">£399</h3>
    </div>

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
     
    </div>
  )
}

export default page
