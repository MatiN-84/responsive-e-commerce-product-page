import React, { useState } from "react";
import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import { FiShoppingCart } from "react-icons/fi";

function CartBox({ setCart }) {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div className="flex justify-between items-center mt-10 md:items-start md:flex-col">
        <div>
          <span className="text-3xl font-bold">$125.00</span>
          <span className="font-bold text-white bg-[#1D2026] p-1 rounded-md ml-5">
            50%
          </span>
        </div>

        <span className="text-sm font-bold text-gray-500 line-through md:mt-3">
          $250.00
        </span>
      </div>

      <div className="md:flex">
        {" "}
        <div className="bg-gray-100 mb-5   rounded-md flex items-center justify-between p-3 mt-5 md:w-1/3  ">
          <img
            onClick={() => (number > 0 ? setNumber((prev) => prev - 1) : null)}
            src={minus}
            alt="minus "
            className="cursor-pointer hover:opacity-80"
          />
          <span className="font-bold">{number}</span>
          <img
            onClick={() => setNumber((prev) => prev + 1)}
            src={plus}
            alt="plus"
            className="cursor-pointer hover:opacity-80"
          />
        </div>
        <button
          onClick={() => {
            setCart(number);
            setNumber(0)
          }}
          className="flex justify-center font-bold items-center mt-5 gap-3 p-4 bg-[#ff7d1a] rounded-lg w-95/100 m-auto mb-5 md:w-1/2 cursor-pointer hover:opacity-80"
        >
          {" "}
          <FiShoppingCart /> Add to cart
        </button>
      </div>
    </div>
  );
}

export default CartBox;
