import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetProducts } from "../../api/product";

const ProductPage = () => {
  const { data: product } = useGetProducts();
  return (
    <main className="main w-5/6 mx-auto">
      <div className="path py-[30px]">
        <div className="container mx-[auto] my-0">
          <p className="path-full">
            Home <span className="px-1">/</span> Products
          </p>
        </div>
      </div>
      <div className="product pb-[30px]">
        <div className="container mx-[auto] my-0">
          <div className="content-wrapper flex flex-wrap">
            <div className="product-filter w-[18%]">
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
              </div>
            </div>
            <div className="product-grid w-[82%]">
              <div className="grid-top flex justify-between items-center border-b-2 border-black pb-6">
                <h2 className="text-[35px] font-bold text-black">
                  NGHỊCH COLLECTION
                </h2>
                <div className="product-sort">
                  <span className="sort mr-3">Sort by</span>
                  <select className="border border-black py-4 w-[180px] pl-3">
                    <option value="1">Sort filter 1</option>
                    <option value="2">Sort filter 2</option>
                    <option value="3">Sort filter 3</option>
                  </select>
                </div>
              </div>
              <div className="product-list grid grid-cols-4 text-black">
                {product?.map((item) => (
                  <div>
                    <div className=" text-xs text-slate-600">
                      <Link to={`/productDetail/${item._id}`}>
                        <div className="product-list-item p-6">
                          <div className="product-img">
                            {item.images[0] ? (
                              <img
                                className="h-full"
                                // src={item.images[0]}
                                src="/image c.png"
                                alt=""
                              />
                            ) : (
                              <img
                                className="h-full"
                                src="/image c.png"
                                alt=""
                              />
                            )}
                            <img
                              className="h-full"
                              src={item.images[0]}
                              alt=""
                            />
                          </div>
                          <div className="product-info font-bold">
                            <div className="product-fig flex justify-between pb-2">
                              <div className="product-rate">
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="mr-2"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="mr-2"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="mr-2"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="mr-2"
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="mr-2"
                                />
                              </div>
                              <div className="product-sold">
                                0 <span className="text-gray_2">SOLD</span>
                              </div>
                            </div>
                            <div className="product-name">
                              [SPRING COLLECTION] {item.name}
                            </div>
                            <div className="product-price">
                              {item.price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
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
