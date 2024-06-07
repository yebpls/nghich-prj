import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CollectionPage = () => {
  return (
    <main className="main">
      <section className="section">
        <div className="content-wrapper flex flex-wrap text-black">
          <div className="section-left w-1/3">
            <img className="w-full" src="/image d.png" alt="" srcset="" />
          </div>
          <div className="section-right w-2/3 bg-[#CEF53D] flex flex-wrap flex-col justify-center">
            <h1 className="ml-[24%] text-[50px]">
              Bring{" "}
              <div className="w-[200px] h-[200px] bg-black rounded-full inline-block"></div>{" "}
              <br />
              Your Bag.
            </h1>
            <p className="ml-[24%] py-5">
              Everyone need a bag <br />
              Find yours with our collection and more.
            </p>
            <Link
              className="ml-[24%] py-3 px-[70px] bg-[#FF78C5] w-fit rounded-lg"
              to="/products"
            >
              Shopping Now
            </Link>
          </div>
        </div>
      </section>
      <section className="section py-5">
        <div className="container my-0 mx-[auto]">
          <div className="recommend py-10">
            <div className="container my-0 mx-[auto]">
              <div className="recommend-top text-black flex justify-between items-center">
                <h3 className="recommend-label text-[30px]">Just In</h3>
                <ul className=" pagination text-[20px] font-bold underline underline-offset-4 flex flex-wrap">
                  <li className="rounded-full border border-black mr-7 p-[2px]">
                    <div className="bg-black w-[8px] h-[8px] rounded-full"></div>
                  </li>
                  <li className="rounded-full mr-7 p-[2px]">
                    <div className="bg-gray_2 w-[8px] h-[8px] rounded-full"></div>
                  </li>
                  <li className="rounded-full p-[2px]">
                    <div className="bg-gray_2 w-[8px] h-[8px] rounded-full"></div>
                  </li>
                </ul>
              </div>
              <div className="recommend-carousel flex flex-wrap text-black">
                <Link>
                  <div className="product-list-item p-6">
                    <div className="product-img">
                      <img className="h-full" src="/image c.png" alt="" />
                    </div>
                    <div className="product-info font-bold">
                      <div className="product-fig flex justify-between pb-2">
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
                <Link className="ml-3">
                  <div className="product-list-item p-6">
                    <div className="product-img">
                      <img className="h-full" src="/image c.png" alt="" />
                    </div>
                    <div className="product-info font-bold">
                      <div className="product-fig flex justify-between pb-2">
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
                <Link className="ml-3">
                  <div className="product-list-item p-6">
                    <div className="product-img">
                      <img className="h-full" src="/image c.png" alt="" />
                    </div>
                    <div className="product-info font-bold">
                      <div className="product-fig flex justify-between pb-2">
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
                <Link className="ml-3">
                  <div className="product-list-item p-6">
                    <div className="product-img">
                      <img className="h-full" src="/image c.png" alt="" />
                    </div>
                    <div className="product-info font-bold">
                      <div className="product-fig flex justify-between pb-2">
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
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="collection-badge my-0 mx-[auto] text-center h-[400px] w-[400px] bg-[#CEF53D] rounded-full content-center">
          <h2 className="text-[30px] font-bold text-white">
            FIND YOUR BAG IN OUR <br />
            COLLECTION...
          </h2>
        </div>
        <div className="ver-line my-0 mx-[auto] bg-[#CEF53D] h-[300px] w-[13px] mt-2"></div>
        <div className="collection py-6">
          <div className="collection-title text-center text-[27px] text-[#FF78C5]">
            COLLECTIONS BY <br />
            <span className="font-bold text-[58px]">NGHỊCH</span>
          </div>
          <div className="collection-grid grid grid-cols-2 gap-x-10 w-2/5 mx-auto my-0">
            <div className="grid-item">
              <div className="item-content z-10 relative top-[75%] ml-8 flex">
                <h5 className="item-name text-white bg-black opacity-70 w-fit py-1 pr-6 rounded-lg text-[20px]">
                  COLLECTION NAME
                </h5>
                <Link className="text-white underline underline-offset-4 text-12px mt-4">
                  Collection
                </Link>
              </div>
              <div className="item-img z-0">
                <img
                  className="w-full rounded-[30px]"
                  src="image c.png"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div className="grid-item">
              <div className="item-content z-10 relative top-[75%] ml-8 flex">
                <h5 className="item-name text-white bg-black opacity-70 w-fit py-1 pr-6 rounded-lg text-[20px]">
                  COLLECTION NAME
                </h5>
                <Link className="text-white underline underline-offset-4 text-12px mt-4">
                  Collection
                </Link>
              </div>
              <div className="item-img z-0">
                <img
                  className="w-full rounded-[30px]"
                  src="image c.png"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div className="grid-item">
              <div className="item-content z-10 relative top-[75%] ml-8 flex">
                <h5 className="item-name text-white bg-black opacity-70 w-fit py-1 pr-6 rounded-lg text-[20px]">
                  COLLECTION NAME
                </h5>
                <Link className="text-white underline underline-offset-4 text-12px mt-4">
                  Collection
                </Link>
              </div>
              <div className="item-img z-0">
                <img
                  className="w-full rounded-[30px]"
                  src="image c.png"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div className="grid-item">
              <div className="item-content z-10 relative top-[75%] ml-8 flex">
                <h5 className="item-name text-white bg-black opacity-70 w-fit py-1 pr-6 rounded-lg text-[20px]">
                  COLLECTION NAME
                </h5>
                <Link className="text-white underline underline-offset-4 text-12px mt-4">
                  Collection
                </Link>
              </div>
              <div className="item-img z-0">
                <img
                  className="w-full rounded-[30px]"
                  src="image c.png"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="classify py-8">
          <h3 className="classify-title text-center text-black text-[27px]">
            Classify
          </h3>
          <div className="classify-content my-0 mx-[auto] w-2/5 text-black py-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae maxime dolore sapiente minima tempora laborum et
              ratione culpa hic cupiditate maiores ducimus quis nemo, blanditiis
              quod ipsum similique rem optio!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              quidem pariatur labore aliquam iusto! Laborum cupiditate
              consectetur magni? Numquam voluptate voluptatum excepturi. Dolorum
              aperiam corrupti nobis officiis facilis doloremque suscipit!
            </p>
          </div>
          <div className="container mx-auto my-0 w-3/5">
            <div className="classify-grid py-10 grid grid-cols-4 gap-x-[70px] gap-y-[30px]">
              <div className="classify-grid-item align-center">
                <div className="item-img">
                  <img
                    className="rounded-full"
                    src="/image b.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <h5 className="item-label text-center text-black font-bold mt-5">
                  CLASSIFY LABEL HERE
                </h5>
              </div>
              <div className="classify-grid-item align-center">
                <div className="item-img">
                  <img
                    className="rounded-full"
                    src="/image b.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <h5 className="item-label text-center text-black font-bold mt-5">
                  CLASSIFY LABEL HERE
                </h5>
              </div>
              <div className="classify-grid-item align-center">
                <div className="item-img">
                  <img
                    className="rounded-full"
                    src="/image b.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <h5 className="item-label text-center text-black font-bold mt-5">
                  CLASSIFY LABEL HERE
                </h5>
              </div>
              <div className="classify-grid-item align-center">
                <div className="item-img">
                  <img
                    className="rounded-full"
                    src="/image b.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <h5 className="item-label text-center text-black font-bold mt-5">
                  CLASSIFY LABEL HERE
                </h5>
              </div>
              <div className="classify-grid-item align-center">
                <div className="item-img">
                  <img
                    className="rounded-full"
                    src="/image b.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <h5 className="item-label text-center text-black font-bold mt-5">
                  CLASSIFY LABEL HERE
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section ">
        <div className="best-seller bg-gray_2 py-10">
          <div className="container mx-auto my-0">
            <h2 className="best-seller-title text-center text-white text-[30px]">
              Best Seller
            </h2>
            <div className="product-list grid grid-cols-4 text-white">
              <div className="product-item">
                <div className="hot text-black font-bold z-10 relative top-[10%] left-[10%]">
                  HOT
                </div>
                <div className="product-img">
                  <img
                    className="h-full rounded-lg"
                    src="/image c.png"
                    alt=""
                  />
                </div>
                <div className="product-info font-bold">
                  <div className="product-rate">
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                  </div>
                  <div className="product-name">[SPRING COLLECTION] BAG 1</div>
                  <div className="product-price">1</div>
                </div>
              </div>
              <div className="product-item">
                <div className="hot text-black font-bold z-10 relative top-[10%] left-[10%]">
                  HOT
                </div>
                <div className="product-img">
                  <img
                    className="h-full rounded-lg"
                    src="/image c.png"
                    alt=""
                  />
                </div>
                <div className="product-info font-bold">
                  <div className="product-rate">
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                  </div>
                  <div className="product-name">[SPRING COLLECTION] BAG 1</div>
                  <div className="product-price">1</div>
                </div>
              </div>
              <div className="product-item">
                <div className="hot text-black font-bold z-10 relative top-[10%] left-[10%]">
                  HOT
                </div>
                <div className="product-img">
                  <img
                    className="h-full rounded-lg"
                    src="/image c.png"
                    alt=""
                  />
                </div>
                <div className="product-info font-bold">
                  <div className="product-rate">
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                  </div>
                  <div className="product-name">[SPRING COLLECTION] BAG 1</div>
                  <div className="product-price">1</div>
                </div>
              </div>
              <div className="product-item">
                <div className="hot text-black font-bold z-10 relative top-[10%] left-[10%]">
                  HOT
                </div>
                <div className="product-img">
                  <img
                    className="h-full rounded-lg"
                    src="/image c.png"
                    alt=""
                  />
                </div>
                <div className="product-info font-bold">
                  <div className="product-rate">
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                  </div>
                  <div className="product-name">[SPRING COLLECTION] BAG 1</div>
                  <div className="product-price">1</div>
                </div>
              </div>
              <div className="product-item">
                <div className="hot text-black font-bold z-10 relative top-[10%] left-[10%]">
                  HOT
                </div>
                <div className="product-img">
                  <img
                    className="h-full rounded-lg"
                    src="/image c.png"
                    alt=""
                  />
                </div>
                <div className="product-info font-bold">
                  <div className="product-rate">
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                  </div>
                  <div className="product-name">[SPRING COLLECTION] BAG 1</div>
                  <div className="product-price">1</div>
                </div>
              </div>
              <div className="product-item">
                <div className="hot text-black font-bold z-10 relative top-[10%] left-[10%]">
                  HOT
                </div>
                <div className="product-img">
                  <img
                    className="h-full rounded-lg"
                    src="/image c.png"
                    alt=""
                  />
                </div>
                <div className="product-info font-bold">
                  <div className="product-rate">
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                    <FontAwesomeIcon icon={faStar} className="mr-2" />
                  </div>
                  <div className="product-name">[SPRING COLLECTION] BAG 1</div>
                  <div className="product-price">1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="content-wrapper flex flex-wrap">
          <div className="section-left w-[40%]">
            <img className="w-full" src="/image 19.png" alt="" srcset="" />
          </div>
          <div className="section-right w-[60%] flex justify-center items-center">
            <div className="section-content text-black">
              <p className="caption text-[#FF78C5] font-bold text-[16px]">
                SALE UPTO 35% OFF!
              </p>
              <h3 className="main-caption text-[37px]">
                HUNDREDS of <br />
                New lower prices!
              </h3>
              <p className="mt-3">Hurry up!!!</p>
              <Link className="underline underline-offset-4 text-[12px]">
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="article py-10">
          <div className="container mx-auto my-0">
            <div className="article-top flex justify-between items-center text-black">
              <div className="article-label text-[30px]">Articles</div>
              <Link className="underline underline-offset-4">View more</Link>
            </div>
            <ul className="article-list flex flex-wrap justify-between">
              <li className="article-item w-[30%]">
                <div className="article-img">
                  <img
                    className="rounded-[30px] w-full"
                    src="/image c.png"
                    alt=""
                  />
                </div>
                <div className="article-info py-3">
                  <h5 className="article-title text-[20px]">Article title</h5>
                  <Link className="underline">View</Link>
                </div>
              </li>
              <li className="article-item w-[30%]">
                <div className="article-img">
                  <img
                    className="rounded-[30px] w-full"
                    src="/image c.png"
                    alt=""
                  />
                </div>
                <div className="article-info py-3">
                  <h5 className="article-title text-[20px]">Article title</h5>
                  <Link className="underline">View</Link>
                </div>
              </li>
              <li className="article-item w-[30%]">
                <div className="article-img">
                  <img
                    className="rounded-[30px] w-full"
                    src="/image c.png"
                    alt=""
                  />
                </div>
                <div className="article-info py-3">
                  <h5 className="article-title text-[20px]">Article title</h5>
                  <Link className="underline">View</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="newsfeed text-black">
          <div className="facebook-title text-center text-[30px]">Facebook</div>
          <p className="text-center mt-3">Follow us on social media</p>
          <h3 className="text-[16px] text-center mt-3">Nghịch</h3>
          <div className="img-carousel flex justify-center py-7">
            <img className="w-[200px]" src="/image a.png" alt="" srcset="" />
            <img
              className="w-[200px] ml-5"
              src="/image a.png"
              alt=""
              srcset=""
            />
            <img
              className="w-[200px] ml-5"
              src="/image a.png"
              alt=""
              srcset=""
            />
            <img
              className="w-[200px] ml-5"
              src="/image a.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="policy py-10">
          <div className="container mx-auto my-0 flex justify-between">
            <div className="policy-item content-center flex items-center flex-col">
              <div className="policy-img bg-gray_2 w-[50px] h-[50px]"></div>
              <div className="policy-content">
                <p className="text-black text-[18px] text-center">
                  Free shipping
                </p>
                <p className="text-[14px] text-center">Freeshipping</p>
              </div>
            </div>
            <div className="policy-item content-center flex items-center flex-col">
              <div className="policy-img bg-gray_2 w-[50px] h-[50px]"></div>
              <div className="policy-content">
                <p className="text-black text-[18px] text-center">
                  Free shipping
                </p>
                <p className="text-[14px] text-center">Freeshipping</p>
              </div>
            </div>
            <div className="policy-item content-center flex items-center flex-col">
              <div className="policy-img bg-gray_2 w-[50px] h-[50px]"></div>
              <div className="policy-content">
                <p className="text-black text-[18px] text-center">
                  Free shipping
                </p>
                <p className="text-[14px] text-center">Freeshipping</p>
              </div>
            </div>
            <div className="policy-item content-center flex items-center flex-col">
              <div className="policy-img bg-gray_2 w-[50px] h-[50px]"></div>
              <div className="policy-content">
                <p className="text-black text-[18px] text-center">
                  Free shipping
                </p>
                <p className="text-[14px] text-center">Freeshipping</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CollectionPage;
