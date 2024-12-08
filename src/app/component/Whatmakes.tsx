import Image from "next/image"


const Whatmakes = () => {
    return (
        <div className="w-full flex justify-center px-4 ">
            <div className="w-full  max-w-7xl text-darkPurple pt-[60px] pb-[80px]">

                <h1 className="sm:text-center text-left text-[24px] mb-[51px]">What makes our brand different</h1>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[59px]">
                    <div className="flex items-center justify-between ">
                        <div>

                            <Image
                                src="/Delivery.svg"
                                alt="Delivery"
                                width={24}
                                height={24}
                                className="mb-4"

                            />

                            <h3 className="mb-2 text-[20px]">Next day as standard</h3>
                            <h3 className="">Order before 3pm and get your order the next day as standard</h3>
                        </div>
                    </div>


                    <div className="flex items-center justify-between ">
                        <div>

                            <Image
                                src="/Checkmark--outline.svg"
                                alt="Delivery"
                                width={24}
                                height={24}
                                className="mb-4"

                            />

                            <h3 className="mb-2 text-[20px]">Made by true artisans</h3>
                            <h3 className="">Handmade crafted goods made with
                                real passion and craftmanship</h3>
                        </div>
                    </div>

                    <div className="flex items-center justify-between ">


                        <div>

                            <Image
                                src="/Purchase.svg"
                                alt="Delivery"
                                width={24}
                                height={24}
                                className="mb-4"

                            />

                            <h3 className="mb-2 text-[20px]">Unbeatable prices</h3>
                            <h3 className="">For our materials and quality you won’t find better prices anywhere</h3>
                        </div>
                    </div>


                    <div className="flex items-center justify-between ">
                        <div>

                            <Image
                                src="/Sprout.svg"
                                alt="Delivery"
                                width={24}
                                height={24}
                                className="mb-4"

                            />

                            <h3 className="mb-2 text-[20px]">Recycled packaging</h3>
                            <h3 className="">We use 100% recycled packaging to ensure our footprint is manageable</h3>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Whatmakes
