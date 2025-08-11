import  { useState } from "react";
const menuItems = ["Collections", "Men", "Women", "About", "Contact"];
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import imageB1 from "../assets/image1big.jpg";
import { AiFillDelete } from "react-icons/ai";

function Header({ setNavbar, cart, setCart }) {
  const [popup, setPopup] = useState(false);
  return (
    <div>    <div className="h-16 flex items-center p-4  border-b-1 border-b-[#e8e8e8] sm:mx-5 sm:mb-10 h-25 ">
      {popup ? (
        <div className="absolute bg-white w-100 right-4 m-auto rounded-md p-4  z-100 top-26 border-1 border-[#d5d5d5] ">
          <div>
            <div className="font-bold border-b-1 border-b-[#ebebeb] pb-4">
              Cart
            </div>

            {cart !== 0 ? (
              <div>
                <div className="font-normal text-[#828282] mt-2 flex items-center justify-between">
                  <img
                    src={imageB1}
                    alt="product image"
                    className="w-13 rounded mr-4"
                  />
                  <div>
                    {" "}
                    <div>Fall Limited Edition Sneakers </div>
                    <div>
                      $125.00 * {cart}{" "}
                      <span className="font-bold text-black">
                        ${(cart * 125).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <AiFillDelete
                    size={24}
                    color="grey"
                    cursor={"pointer"}
                    onClick={() => setCart(0)}
                  />
                </div>
                <button className="flex justify-center text-black font-bold items-center mt-5 gap-3 p-4 bg-[#ff7d1a] rounded-lg w-95/100 m-auto  cursor-pointer hover:opacity-80">
                  {" "}
                  Checkout
                </button>
              </div>
            ) : (
              <div className="flex justify-center text-[#8d8d8d] font-medium p-10 ">
                Your cart id empty.
              </div>
            )}
          </div>
        </div>
      ) : null}
      <div className="flex items-center gap-3 w-full cursor-pointer ">
        <GiHamburgerMenu
          size={20}
          color="grey"
          className="mt-1 min-sm:hidden"
          onClick={(e) => setNavbar((prev) => !prev)}
        />
        <div className="font-extrabold text-2xl mr-10">sneakers</div>
        <div className="hidden sm:flex ">
          {menuItems.map((item) => (
            <div key={item} className="   mr-6 text-[#818181] hover:text-black">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-8">
        <FiShoppingCart
          size={24}
          className="mt-[2px] cursor-pointer text-greyishblue"
          onClick={() => setPopup((prev) => !prev)}
        />
        <div className="rounded-full border-2 border-gray-950 ">
          <FiUser size={24} />
        </div>
      </div>
    </div></div>

  );
}

export default Header;
