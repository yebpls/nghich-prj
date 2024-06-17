import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetProducts } from "../../api/product";
import { Rate } from "antd";
import ProductCard from "../../components/Product/product-card";

const ProductPage = () => {
  const { data: product } = useGetProducts();
  return (
    <main className="main w-full lg:w-5/6 mx-auto">
      <div className="path py-[30px]">
        <div className="container mx-[auto] my-0">
          <p className="path-full">
            Home <span className="px-1">/</span> Products
          </p>
        </div>
      </div>
      <div className="product pb-[30px]">
        <div className="mx-auto my-0">
          <div className="flex">
            <div className="product-filter lg:w-1/5 lg:h-full w-0 h-0 invisible  lg:visible">
              <h3 className="font-bold text-[23px] text-black pb-[30px]">
                {" "}
                FILTER BY
              </h3>
              <div className="filter-list">
                <h4 className="filter-type text-[20px]">FILTER TYPE LABEL</h4>
                <ul className="filter">
                  <li className="filter-item ml-5">
                    <input
                      className="w-[16px] h-[16px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <span className="filter-label text-[16px] ml-3">
                      Filter label
                    </span>
                  </li>
                  <li className="filter-item ml-5">
                    <input
                      className="w-[16px] h-[16px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <span className="filter-label text-[16px] ml-3">
                      Filter label
                    </span>
                  </li>
                  <li className="filter-item ml-5">
                    <input
                      className="w-[16px] h-[16px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <span className="filter-label text-[16px] ml-3">
                      Filter label
                    </span>
                  </li>
                  <li className="filter-item ml-5">
                    <input
                      className="w-[16px] h-[16px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <span className="filter-label text-[16px] ml-3">
                      Filter label
                    </span>
                  </li>
                </ul>
                <h4 className="filter-type text-[20px]">FILTER TYPE LABEL</h4>
                <ul className="filter">
                  <li className="filter-item ml-5">
                    <input
                      className="w-[16px] h-[16px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <span className="filter-label text-[16px] ml-3">
                      Filter label
                    </span>
                  </li>
                  <li className="filter-item ml-5">
                    <input
                      className="w-[16px] h-[16px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <span className="filter-label text-[16px] ml-3">
                      Filter label
                    </span>
                  </li>
                  <li className="filter-item ml-5">
                    <input
                      className="w-[16px] h-[16px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <span className="filter-label text-[16px] ml-3">
                      Filter label
                    </span>
                  </li>
                  <li className="filter-item ml-5">
                    <input
                      className="w-[16px] h-[16px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <span className="filter-label text-[16px] ml-3">
                      Filter label
                    </span>
                  </li>
                </ul>
                <h4 className="filter-type text-[20px]">FILTER TYPE LABEL</h4>
                <ul className="filter  ">
                  <li className="filter-item ml-5">
                    <input
                      className="w-[16px] h-[16px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <span className="filter-label text-[16px] ml-3">
                      Filter label
                    </span>
                  </li>
                  <li className="filter-item ml-5">
                    <input
                      className="w-[16px] h-[16px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <span className="filter-label text-[16px] ml-3">
                      Filter label
                    </span>
                  </li>
                  <li className="filter-item ml-5">
                    <input
                      className="w-[16px] h-[16px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <span className="filter-label text-[16px] ml-3">
                      Filter label
                    </span>
                  </li>
                  <li className="filter-item ml-5">
                    <input
                      className="w-[16px] h-[16px]"
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <span className="filter-label text-[16px] ml-3">
                      Filter label
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-grid w-full lg:w-4/5">
              <div className="grid-top flex justify-between items-center border-b-[1px] lg:border-b-2 border-black pb-6">
                <h2 className="text-md md:text-lg lg:text-xl font-bold text-black">
                  NGHỊCH COLLECTION
                </h2>
                <div className="product-sort">
                  <span className="sort mr-3">Sort by</span>
                  <select className="border border-slate-400 py-2 rounded-md  w-full pl-3">
                    <option value="1">Sort filter 1</option>
                    <option value="2">Sort filter 2</option>
                    <option value="3">Sort filter 3</option>
                  </select>
                </div>
              </div>
              <div className="product-list grid grid-cols-3 lg:grid-cols-4 text-black">
                {product?.map((item) => (
                  <ProductCard key={item._id} item={item} />
                ))}
              </div>
              <div className="grid-records py-[50px] text-right text-black border-b">
                showing <span className="font-bold">0</span> -{" "}
                <span className="font-bold">N</span> results of N
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
