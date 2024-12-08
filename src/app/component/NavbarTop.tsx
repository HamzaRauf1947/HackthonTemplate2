
import { TbTruckDelivery } from "react-icons/tb"
import { IoClose } from "react-icons/io5"


const NavbarTop = () => {
  return (
    <div>
        <div className="flex items-center justify-between h-[41px] px-4 bg-darkPurple text-white">
            <div></div>
            <div></div>
            <div className="flex items-center justify-between gap-2">
            <TbTruckDelivery className="text-[16px] text-white" />

            <p >Free delivery on all orders over £50 with code easter checkout</p>

            </div>
            <div>

            </div>
            <IoClose  className="text-[24px] text-white" />

        </div>
      
    </div>
  )
}

export default NavbarTop
