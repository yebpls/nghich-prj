import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartPage = () => {
  return (
    <main className="main text-black w-5/6 mx-auto">
      <div className="page-name text-center py-[50px]">
        <h1 className="text-[50px]">CART</h1>
      </div>
      <div className="process flex justify-center py-3">
        <div className="process-step flex flex-wrap items-center font-bold border-b-4 border-black py-[30px] px-[50px]">
          <div className="step-no bg-[#CFF53E] rounded-full h-[50px] w-[50px] text-center content-center text-[20px]">
            1
          </div>
          <div className="step-name text-[20px] ml-5">Shopping cart</div>
        </div>
        <div className="process-step flex flex-wrap items-center font-bold py-[30px] px-[50px]">
          <div className="step-no bg-gray_2 rounded-full h-[50px] w-[50px] text-center content-center text-[20px] text-white">
            2
          </div>
          <div className="step-name text-[20px] ml-5 text-gray_2">
            Shopping cart
          </div>
        </div>
        <div className="process-step flex flex-wrap items-center font-bold py-[30px] px-[50px]">
          <div className="step-no bg-gray_2 rounded-full h-[50px] w-[50px] text-center content-center text-[20px] text-white">
            3
          </div>
          <div className="step-name text-[20px] ml-5 text-gray_2">
            Shopping cart
          </div>
        </div>
      </div>
      <div className="cart pb-[300px]">
        <div className="container my-0 mx-[auto]">
          <div className="content-wrapper flex flex-wrap">
            <div className="cart-left w-2/3 pr-10">
              <table className="w-full text-left">
                <tr className="pb-5 border-b border-black">
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                </tr>
                <tr>
                  <td className="py-5">
                    <div className="product-col flex items-center">
                      <input
                        className="w-[16px] h-[16px]"
                        type="checkbox"
                        name=""
                        id=""
                      />
                      <img
                        className="w-[150px] ml-[30px]"
                        src="/image c.png"
                        alt=""
                        srcset=""
                      />
                      <div className="product-info ml-[30px]">
                        <h6 className="product-name text-[20px] font-bold">
                          BAG 1
                        </h6>
                        <div className="product-color text-gray_2">
                          Color: unknown
                        </div>
                        <button className="text-gray_2 text-[20px] font-bold">
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input
                      className="bg-[#CFF53E] text-center"
                      type="number"
                      name=""
                      id=""
                      value={1}
                    />
                  </td>
                  <td>1</td>
                  <td className="font-bold">1</td>
                </tr>
                <tr>
                  <td className="py-5">
                    <div className="product-col flex items-center">
                      <input
                        className="w-[16px] h-[16px]"
                        type="checkbox"
                        name=""
                        id=""
                      />
                      <img
                        className="w-[150px] ml-[30px]"
                        src="/image c.png"
                        alt=""
                        srcset=""
                      />
                      <div className="product-info ml-[30px]">
                        <h6 className="product-name text-[20px] font-bold">
                          BAG 1
                        </h6>
                        <div className="product-color text-gray_2">
                          Color: unknown
                        </div>
                        <button className="text-gray_2 text-[20px] font-bold">
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input
                      className="bg-[#CFF53E] text-center"
                      type="number"
                      name=""
                      id=""
                      value={1}
                    />
                  </td>
                  <td>1</td>
                  <td className="font-bold">1</td>
                </tr>
                <tr>
                  <td className="py-5">
                    <div className="product-col flex items-center">
                      <input
                        className="w-[16px] h-[16px]"
                        type="checkbox"
                        name=""
                        id=""
                      />
                      <img
                        className="w-[150px] ml-[30px]"
                        src="/image c.png"
                        alt=""
                        srcset=""
                      />
                      <div className="product-info ml-[30px]">
                        <h6 className="product-name text-[20px] font-bold">
                          BAG 1
                        </h6>
                        <div className="product-color text-gray_2">
                          Color: unknown
                        </div>
                        <button className="text-gray_2 text-[20px] font-bold">
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input
                      className="bg-[#CFF53E] text-center"
                      type="number"
                      name=""
                      id=""
                      value={1}
                    />
                  </td>
                  <td>1</td>
                  <td className="font-bold">1</td>
                </tr>
              </table>
            </div>
            <div className="cart-right w-1/3 border border-black rounded-lg">
              <div className="content-wrapper p-10">
                <h3 className="form-label text-[30px]">Cart Summary</h3>
                <div className="shipping">
                  <div className="shipping-item py-3 pl-3 border rounded-lg border-black">
                    <input className="" type="radio" name="" id="" />
                    <label className="ml-3" htmlFor="">
                      Shipping Method
                    </label>
                  </div>
                  <div className="shipping-item py-3 pl-3 border rounded-lg border-black mt-3">
                    <input className="" type="radio" name="" id="" />
                    <label className="ml-3" htmlFor="">
                      Shipping Method
                    </label>
                  </div>
                  <div className="shipping-item py-3 pl-3 border rounded-lg border-black mt-3">
                    <input className="" type="radio" name="" id="" />
                    <label className="ml-3" htmlFor="">
                      Shipping Method
                    </label>
                  </div>
                  <div className="shipping-item py-3 pl-3 border rounded-lg border-black mt-3">
                    <input className="" type="radio" name="" id="" />
                    <label className="ml-3" htmlFor="">
                      Shipping Method
                    </label>
                  </div>
                </div>
                <div className="total flex justify-between mt-[50px] text-[30px] font-bold">
                  <h3>Total</h3>
                  <h3>1</h3>
                </div>
                <button
                  className="bg-[#CFF53E] w-full py-[20px] text-[20px] rounded-lg font-bold mt-[50px]"
                  type="submit"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
