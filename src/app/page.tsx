
import Image from "next/image";
import Navbar from "./component/Navbar";
import Link from "next/link";
import Whatmakes from "./component/Whatmakes";

export default function Home() {
  return (
    <div >

      <Navbar />

      {/* Chair section start */}
      <div className="w-full flex justify-center px-4 py-[60px]">
        <div className="w-full max-w-7xl flex lg:flex-row flex-col justify-center">

          <div className="bg-darkPurple text-white flex flex-col justify-between w-full lg:basis-[60%] p-[40px_24px_24px_24px]  lg:p-[60px_0px_60px_60px]  ">
            <div>
              <h1 className="text-[32px]  lg:mb-[41px] mb-[80px] ">The furniture brand for the<br />future, with timeless designs</h1>

              <button className="lg:flex hidden justify-center items-center w-[170px] h-[56px]  bg-newColor/15"><Link href="">View collection</Link></button>
            </div>

            <div className="lg:pr-[98px] ">
              <p className=" text-[18px]    ">
                A new era in eco friendly furniture with Avelon, the French luxury retail brand
                with nice fonts, tasteful colors and a beautiful way to display things digitally
                using modern web technologies.

              </p>
              <button className="flex lg:hidden justify-center items-center mt-[32px]  h-[56px] w-full bg-newColor/15"><Link href="">View collection</Link></button>

            </div>


          </div>

          <div className="flex-1 lg:block hidden">
            <Image
              src="/Right Image.png"
              alt="Right Image"
              width={520}
              height={584}
            />
          </div>

        </div>


      </div>

      {/* Chair section start */}

      <Whatmakes />

      {/* New ceramics start */}

      <div className="w-full flex justify-center px-4 py-[60px] pt-[80px] pb-[58px]">

        <div className="w-full max-w-7xl text-darkPurple">
          <h1 className=" text-[32px] mb-[33px] ">New ceramics</h1>

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


      {/* Our Populare product start */}

      <div className="w-full flex justify-center px-4  pt-[80px] pb-[58px]">

        <div className="w-full max-w-7xl text-darkPurple">
          <h1 className=" text-[32px] mb-[33px] ">Our popular products</h1>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 ">

            {/* card1 */}
            <div>
              <Image
                src="/sofa.png"
                alt="Right Image"
                width={305}
                height={375}
                className="mb-[24px] w-full"

              />
              <h3 className="text-[20px] mb-2">The Poplar suede sofa</h3>
              <h3 className="text-[18px]">£980</h3>
            </div>

            {/* card2 */}
            <div className="grid grid-cols-2 gap-5">
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


              {/* card3 */}
              <div className="">
                <Image
                  src="/whiteChair.png"
                  alt="Right Image"
                  width={305}
                  height={375}
                  className="mb-[24px] w-full"

                />
                <h3 className="text-[20px] mb-2">The Dandy chair
                </h3>
                <h3 className="text-[18px]">£250</h3>
              </div>
            </div>






          </div>

          {/* Button View All */}
          <div className="w-full flex mt-[35px] items-center justify-center">
            <button className="flex justify-center items-center md:w-[170px] w-full  h-[56px] text-darkPurple  bg-lightGray"><Link href="">View collection</Link></button>


          </div>

        </div>

      </div>
      {/* Our Populare product end */}


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


      {/* From a studio section start  */}
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 text-darkPurple ">

          <div className="flex flex-col justify-between gap-[64px] lg:gap-6 px-4 lg:p-[72px_100px_54px_84px] lg:mt-0 mt-[48px]">

            <div className="xl:space-y-6 lg:space-y-2 space-y-3  ">
              <h1 className="xl:text-[24px] text-[20px]">From a studio in London to a global brand with<br />over 400 outlets</h1>

              <p className="text-textp xl:text-[16px] text-[14px] ">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>

              <p className="text-textp xl:text-[16px] text-[14px] ">Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>

            </div>

            <div className="w-full flex  items-center lg:mb-0 mb-[38px] ">
            <button className="flex justify-center items-center md:w-[170px] w-full   h-[56px] text-darkPurple  bg-lightGray"><Link href="">Get in touch</Link></button>


          </div>

          </div>

          <div>
            <Image
            src="/Image.png"
            alt="Image"
            width={720}
            height={603}
            className="w-full"

            />
          </div>



        </div>

      {/* From a studio section end  */}

    </div>
  );
}
