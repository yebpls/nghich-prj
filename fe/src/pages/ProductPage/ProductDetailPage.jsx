import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { useGetProductById } from "../../api/product";
import { toast } from "react-toastify";
import { useCartStore } from "../../zustand-store/cartState";
import { setCart } from "../../localStorage/handleCart";
import { useAddWishlist } from "../../api/User/wishlist";
import {Rate} from 'antd'

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);
  const { countCart, cartItems } = useCartStore((state) => state);
  const { productId } = useParams();
  const { data: product, isLoading, error } = useGetProductById(productId);
  const { mutate: addWishlist } = useAddWishlist();
  console.log("product:", product);
  const handleAddWishlist = (id) => {
    addWishlist(id);
  };
  const handleAddToCart = (item) => {
    if (item) {
      addToCart(item, quantity);
      toast.success("Add to cart successfully");
    } else {
      toast.error("Product not found");
    }
  };
  return (
    <main className="main p-1 w-full lg:w-5/6 mx-auto">
      {/* <div className="path py-[30px]">
        <div className="container mx-[auto] my-0">
          <p className="path-full">
            Home <span className="px-1">/</span> Products{" "}
            <span className="px-1">/</span> Detail
          </p>
        </div>
      </div> */}
      <h1>cartCount: {countCart}</h1>
      <div className="product-detail pt-3 pb-10">
        <div className=" mx-auto my-0">
          <div className=" flex flex-wrap">
            <div className="w-3/5 flex ">
              <div className=" w-full flex flex-wrap">
                {[...Array(6)].map((x, i) => (
                  <div className="w-1/2">
                    <img
                      className="p-1"
                      src={product?.images[0].url}
                      // src="/image c.png"
                      alt=""
                      srcset=""
                    />
                    {/* hello */}
                  </div>
                ))}
              </div>
            </div>
            <div className=" w-2/5 h-2/5 pl-4 ">
              <div>
                <div className="  text-xs text-black">
                  <div className="lg:flex">
                    <Rate
                      className="text-sm lg:text-lg text-black"
                      disabled
                      allowHalf
                      defaultValue={4.5}
                    />
                    <div className="text-md my-auto">1 Review(s)</div>
                  </div>
                </div>
                <h1 className="product-name py-1 lg:py-3 text-black text-xl lg:text-3xl font-medium">
                  {product?.name}
                </h1>
                <p className="product-description text-xs">
                  {product?.description}
                </p>
                <p className="product-price py-1 lg:py-3 text-md lg:text-2xl text-black font-bold border-b">
                  {product?.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  aaaaaaaađ{" "}
                  <span className="text-gray_2 text-sm lg:text-2xl text-center leading-normal line-through">
                    900.000đ
                  </span>
                </p>
                <p className="product-measurement font-bold pt-4 text-xs lg:text-sm">
                  Measurement <br></br>
                </p>
                <p className="font-medium pt-2 text-black text-xs lg:text-lg">
                  {product?.length}cm(L) x {product?.width}cm (W)
                </p>
                <div className="product-color py-4">
                  <button className="color-btn font-bold text-xs lg:text-sm">
                    Choose color
                  </button>
                  {product?.color?.map((color) => (
                    <div>
                      <button className="color text-black mt-1 p-1 text-lg hover:bg-slate-100">
                        {color?.name}
                      </button>
                    </div>
                  ))}
                  <div className="color-img flex mt-5">
                    {[...Array(4)].map((x, i) => (
                      <div className="color-img-item">
                        <img className="" src="/image c.png" alt="" srcset="" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="product-button font-bold text-sm text-black">
                  <div className="group-top flex justify-between h-9">
                    <div className="text-center my-auto py-1 bg-slate-200 w-1/3 rounded-lg flex">
                      <div
                        className="w-1/4 font-light text-xl ml-2 hover:bg-slate-300 rounded-lg cursor-pointer"
                        onClick={() =>
                          setQuantity(quantity <= 0 ? 0 : quantity - 1)
                        }
                      >
                        -
                      </div>
                      <div className="w-1/2 font-light text-xl">{quantity}</div>
                      <div
                        className="w-1/4 font-light text-xl hover:bg-slate-300 rounded-lg cursor-pointer mr-2"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </div>
                    </div>

                    <button
                      className="button-wishlist border border-black w-3/5 rounded-lg bg-[#FF78C5]"
                      onClick={() => handleAddWishlist(product?._id)}
                    >
                      Wishlist
                    </button>
                  </div>
                  <button
                    className="button-cart rounded-lg w-full h-12 bg-[#CEF53D] mt-5"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              {/* Product informattion desktop */}
              <div className="product-detail-sub py-12 invisible h-0 lg:h-full lg:visible w-full">
                <div className="product-detail-sub-item py-5">
                  <h4 className="item-label text-black text-sm border-b-2 border-black pb-2">
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
                  <h4 className="item-label text-black text-sm border-b-2 border-black pb-2">
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
                  <h4 className="item-label text-black text-sm border-b-2 border-black pb-2">
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
            <div className="product-detail-sub py-12 visible h-full lg:h-0 lg:invisible w-5/6 mx-auto">
              <div className="product-detail-sub-item py-5">
                <h4 className="item-label text-black text-sm border-b-2 border-black pb-2">
                  INFORMATION LABEL
                </h4>
                <p className="item-content">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                  a numquam repellendus placeat, fugiat non minus voluptatibus
                  quisquam aliquam ipsa laborum. Repellendus consectetur
                  reprehenderit laboriosam temporibus exercitationem a corrupti
                  rerum?
                </p>
              </div>
              <div className="product-detail-sub-item py-5">
                <h4 className="item-label text-black text-sm border-b-2 border-black pb-2">
                  INFORMATION LABEL
                </h4>
                <p className="item-content">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                  a numquam repellendus placeat, fugiat non minus voluptatibus
                  quisquam aliquam ipsa laborum. Repellendus consectetur
                  reprehenderit laboriosam temporibus exercitationem a corrupti
                  rerum?
                </p>
              </div>
              <div className="product-detail-sub-item py-5">
                <h4 className="item-label text-black text-sm border-b-2 border-black pb-2">
                  INFORMATION LABEL
                </h4>
                <p className="item-content">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                  a numquam repellendus placeat, fugiat non minus voluptatibus
                  quisquam aliquam ipsa laborum. Repellendus consectetur
                  reprehenderit laboriosam temporibus exercitationem a corrupti
                  rerum?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recommend py-10">
        <div className="container my-0 mx-[auto]">
          <div className="recommend-top text-black flex justify-between items-center">
            <h3 className="recommend-label text-md">You may also liked</h3>
            <Link
              to="/products"
              className="text-sm lg:text-xl font-medium underline underline-offset-4"
            >
              View more products
            </Link>
          </div>
          <div className=" flex flex-wrap">
            {[...Array(4)].map((x, i) => (
              <div className="w-1/4  text-xs text-slate-600">
                <Link>
                  <div className="product-list-item p-3">
                    <div className="product-img ">
                      <img className="w-full" src="/image c.png" alt="" />
                    </div>
                    <div className="product-info font-bold">
                      <div className="product-fig md:flex justify-between py-2">
                        <div className="product-rate">
                          <Rate
                            className="text-[7px] md:text-xs lg:text-sm text-black"
                            disabled
                            allowHalf
                            defaultValue={4.5}
                          />
                        </div>
                        <div className="product-sold text-[8px] md:text-[10px] lg:text-[12px]">
                          0 <span className="text-gray_2">SOLD</span>
                        </div>
                      </div>
                      <div className="text-[8px] md:text-[10px] lg:text-[13px]">
                        [SPRING COLLECTION]
                      </div>
                      <div className="text-[8px] md:text-[10px] lg:text-[13px] lg:py-3">
                        BAG 1
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
