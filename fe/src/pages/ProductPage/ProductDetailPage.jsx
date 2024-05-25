import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductDetailPage = () => {
  return (
    <main className="main w-5/6 mx-auto">
      {/* <div className="path py-[30px]">
        <div className="container mx-[auto] my-0">
          <p className="path-full">
            Home <span className="px-1">/</span> Products{" "}
            <span className="px-1">/</span> Detail
          </p>
        </div>
      </div> */}
      <div className="product-detail pt-3 pb-10">
        <div className="container mx-[auto] my-0">
          <div className="content-wrapper flex flex-wrap">
            <div className="product-detail-grid w-[60%] pr-6 grid grid-cols-2 gap-8">
              <div className="grid-item">
                <img src="/image 19.png" alt="" srcset="" />
              </div>
              <div className="grid-item">
                <img src="/image 19.png" alt="" srcset="" />
              </div>
              <div className="grid-item">
                <img src="/image 19.png" alt="" srcset="" />
              </div>
              <div className="grid-item">
                <img src="/image 19.png" alt="" srcset="" />
              </div>
              <div className="grid-item">
                <img src="/image 19.png" alt="" srcset="" />
              </div>
              <div className="grid-item">
                <img src="/image 19.png" alt="" srcset="" />
              </div>
            </div>
            <div className="product-detail-content w-2/5 pl-4">
              <div className="product-review flex text-xs text-black">
                <div className="product-rate">
                  <FontAwesomeIcon icon={faStar} className="mx-1 ml-0" />
                  <FontAwesomeIcon icon={faStar} className="mx-1" />
                  <FontAwesomeIcon icon={faStar} className="mx-1" />
                  <FontAwesomeIcon icon={faStar} className="mx-1" />
                  <FontAwesomeIcon icon={faStar} className="mx-1" />
                </div>
                <div className="product-rate_total">1 Review(s)</div>
              </div>
              <h1 className="product-name py-3 text-black text-3xl font-bold">
                PRODUCT NAME HERE
              </h1>
              <p className="product-description text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Fugiat, quidem iure! Iure dolorum exercitationem natus
              </p>
              <p className="product-price py-4 text-2xl text-black font-bold border-b">
                100.000đ{" "}
                <span className="text-gray_2 border-b-4 border-gray_2 text-center leading-normal ">
                  900.000đ
                </span>
              </p>
              <p className="product-measurement font-bold pt-4 text-sm">
                Measurement <br></br>
              </p>
              <p className="font-medium pt-2 text-black text-lg">
                55cm(L) x 50cm (W)
              </p>
              <div className="product-color py-4">
                <button className="color-btn font-bold text-sm">
                  Choose color
                </button>
                <p className="color text-black pt-2 text-lg">Grey</p>
                <div className="color-img flex mt-5">
                  {[...Array(4)].map((x, i) => (
                    <div className="color-img-item">
                      <img
                        className="h-24 w-24 px-2"
                        src="/image c.png"
                        alt=""
                        srcset=""
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="product-button font-bold text-sm text-black">
                <div className="group-top flex justify-between h-9">
                  <input
                    className="text-center bg-gray_2 w-1/3 rounded-lg"
                    type="number"
                    name=""
                    id=""
                    value={1}
                  />
                  <button className="button-wishlist border border-black w-3/5 rounded-lg bg-[#FF78C5]">
                    Wishlist
                  </button>
                </div>
                <button className="button-cart rounded-lg w-full h-12 bg-[#CEF53D] mt-5">
                  Add to cart
                </button>
              </div>
              <div className="product-detail-sub py-12">
                <div className="product-detail-sub-item py-5">
                  <h4 className="item-label text-black text-[25px] border-b-2 border-black pb-2">
                    INFORMATION LABEL
                  </h4>
                  <p className="item-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quae a numquam repellendus placeat, fugiat non minus
                    voluptatibus quisquam aliquam ipsa laborum. Repellendus
                    consectetur reprehenderit laboriosam temporibus
                    exercitationem a corrupti rerum?
                  </p>
                </div>
                <div className="product-detail-sub-item py-5">
                  <h4 className="item-label text-black text-[25px] border-b-2 border-black pb-2">
                    INFORMATION LABEL
                  </h4>
                  <p className="item-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quae a numquam repellendus placeat, fugiat non minus
                    voluptatibus quisquam aliquam ipsa laborum. Repellendus
                    consectetur reprehenderit laboriosam temporibus
                    exercitationem a corrupti rerum?
                  </p>
                </div>
                <div className="product-detail-sub-item py-5">
                  <h4 className="item-label text-black text-[25px] border-b-2 border-black pb-2">
                    INFORMATION LABEL
                  </h4>
                  <p className="item-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quae a numquam repellendus placeat, fugiat non minus
                    voluptatibus quisquam aliquam ipsa laborum. Repellendus
                    consectetur reprehenderit laboriosam temporibus
                    exercitationem a corrupti rerum?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recommend py-10">
        <div className="container my-0 mx-[auto]">
          <div className="recommend-top text-black flex justify-between items-center">
            <h3 className="recommend-label text-[30px]">You may also liked</h3>
            <Link className="text-[20px] font-bold underline underline-offset-4">
              View more products
            </Link>
          </div>
          <div className="recommend-carousel flex flex-wrap">
            {[...Array(6)].map((x, i) => (
              <div className="w-1/6 text-xs text-slate-600">
                <Link>
                  <div className="product-list-item p-6">
                    <div className="product-img">
                      <img className="h-full" src="/image c.png" alt="" />
                    </div>
                    <div className="product-info font-bold">
                      <div className="product-fig flex justify-between py-2">
                        <div className="product-rate">
                          <FontAwesomeIcon icon={faStar} className="mr-2" />
                          <FontAwesomeIcon icon={faStar} className="mr-2" />
                          <FontAwesomeIcon icon={faStar} className="mr-2" />
                          <FontAwesomeIcon icon={faStar} className="mr-2" />
                          <FontAwesomeIcon icon={faStar} className="mr-2" />
                        </div>
                        <div className="product-sold">
                          0 <span className="text-gray_2">SOLD</span>
                        </div>
                      </div>
                      <div className="product-name">
                        [SPRING COLLECTION] BAG 1
                      </div>
                      <div className="product-price">1</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
