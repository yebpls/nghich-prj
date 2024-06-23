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
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 recommend-carousel  text-black">
                <Link>
                  <div className="product-list-item p-6">
                    <div className="relative  h-80 overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border-solid border-2 border-stone-100 relative  h-80 overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border-solid border-2 border-stone-100">
                      <img
                        className="w-full h-full object-cover object-center lg:h-full lg:w-full  absolute "
                        src="https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2F42710852-f7f1-4e15-9c24-31501d5eefe7.png?alt=media&token=71b74717-4c1e-4cc1-8e71-1799e96b2ca5"
                        alt=""
                      />
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
                      <div className="product-price">550.000</div>
                    </div>
                  </div>
                </Link>
                <Link className="ml-3">
                  <div className="product-list-item p-6">
                    <div className="product-img relative  h-80 overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border-solid border-2 border-stone-100">
                      <img
                        className="w-full h-full object-cover object-center lg:h-full lg:w-full  absolute "
                        src="https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2F63c2301c-74ee-4439-9f51-1900fd7a83e7.png?alt=media&token=cd766cf1-33bf-4fd9-8ff3-81de8e7cfb78"
                        alt=""
                      />
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
                        [SPRING COLLECTION] BAG 2
                      </div>
                      <div className="product-price">550.000</div>
                    </div>
                  </div>
                </Link>
                <Link className="ml-3">
                  <div className="product-list-item p-6">
                    <div className="product-img relative  h-80 overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border-solid border-2 border-stone-100">
                      <img
                        className="w-full h-full object-cover object-center lg:h-full lg:w-full  absolute "
                        src="https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2F941869d2-ef19-40fc-9b1a-9ba10c8f316d.png?alt=media&token=9cdd5100-02c7-4b6c-ba8e-01cb0bad6b2a"
                        alt=""
                      />
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
                        [SPRING COLLECTION] BAG 3
                      </div>
                      <div className="product-price">550.000</div>
                    </div>
                  </div>
                </Link>
                <Link className="ml-3">
                  <div className="product-list-item p-6">
                    <div className="product-img relative  h-80 overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border-solid border-2 border-stone-100">
                      <img
                        className="w-full h-full object-cover object-center lg:h-full lg:w-full  absolute  "
                        src="https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2Fe3210dd8-bdb1-4b38-b63b-b83e93b4f0de.png?alt=media&token=d20e435e-6965-437e-b58a-a7f5723cbfbd"
                        alt=""
                      />
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
                        [SPRING COLLECTION] BAG 4
                      </div>
                      <div className="product-price">550.000</div>
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
                  CHẠY COLLECTION
                </h5>
                <Link className="text-white underline underline-offset-4 text-12px mt-4">
                  Collection
                </Link>
              </div>
              <div className="item-img z-0">
                <img
                  className="w-[350px] h-[350px]  rounded-[30px]"
                  src="https://s3-alpha-sig.figma.com/img/04cf/ac09/f9d0231a91afd4a4b9af7eddc3fa9331?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f3ZOb0Oypr6X71NgxQYmIJiTFmKlfhec~ULou1VdMMw5~1bUTbI8ZAuRyutr7IrYVjqB~rmcemX~pzVM7NrLxzt4uyPjpEixQCMtbp5Jg0KdTKGL9lucFBjw-gwQJErqU9vr~tePlIjQhhm0r35QTSGb6JOqsvbzLc34OeEkDAnZ9gKmUdldeKQ12jDKxsW0TkAtutET3xQt1m~7CrREeqgpV6CG17F3THlvIx0IRojMjbCvKN02vMDikUBfhPbgdt0jXnYK7rYQNftO-07q1vkrT5fFcGNwZm9G30jhHkgaJ5QlPm2wGU~-4yNSx~s6xtyjAWqmuJ6soP7aSVpwKQ__"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div className="grid-item">
              <div className="item-content z-10 relative top-[75%] ml-8 flex">
                <h5 className="item-name text-white bg-black opacity-70 w-fit py-1 pr-6 rounded-lg text-[20px]">
                  ĐƯƠNG COLLECTION
                </h5>
                <Link className="text-white underline underline-offset-4 text-12px mt-4">
                  Collection
                </Link>
              </div>
              <div className="item-img z-0">
                <img
                  className="w-[350px] h-[350px] rounded-[30px]"
                  src="https://s3-alpha-sig.figma.com/img/7b5a/2239/a73ea618db29bd0897b51c6a8a7ab6e8?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ePB7LiYEtScnC2CcAVqzaED-VaunpHmxG9YRNZHBuDZRrpP2t5rbfdT1~ktv0z7gfDhRInXiGiu4FDzswSNBKIU2OvUWA6ieb6x4LQFFTr5t3Lwr9oGjrgy7UOqDVyBKI27HJAqpANblXZgGiFFA9Zqza~qu3wVQbJwSiwhoPZf0r8Ccoyan8LhmFUTrGm2z3gK-zyy~WKTej31YUnggwmLytmguhti29zHgQi1sA9pvRm5UnG34FRqiaUvq~ap3s-Bh8t6-ooHekY0ibVOC8NYm8~gwBJa7cMOaWsbixdZiDv1mAKkn3CRmnXolBkWI4RzE8uOPyQ1tJvQ7OM0wpA__"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div className="grid-item">
              <div className="item-content z-10 relative top-[75%] ml-8 flex">
                <h5 className="item-name text-white bg-black opacity-70 w-fit py-1 pr-6 rounded-lg text-[20px]">
                  PHÁ COLLECTION
                </h5>
                <Link className="text-white underline underline-offset-4 text-12px mt-4">
                  Collection
                </Link>
              </div>
              <div className="item-img z-0">
                <img
                  className="w-[350px] h-[350px]  rounded-[30px]"
                  src="https://s3-alpha-sig.figma.com/img/c3d9/b144/7e27746e505ebb735f2056daff4c5ae0?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dq6mff6P8lZu3cfyJqGMi8AXzofsXOLD15s13615hBi~s1WuQV~Q-nCrrGR~hxvBfq1IYhCEWw~r2Bj~rT~c~O4hEcyfGDJqUEcYUc7aAFquMpfKfvOERKd9MvfP6tPUe05xBkamJfDvcXh3c2exeFjDkFo2WN2gX69hts~aLXDgU9aizcjZ1ue8Fh1em~yEId8lsm3vE-9oghL-9lhlAZjgJdYTNfkQ3Lha4n2ft8ElLVb5bhCIitxB0ZfH4gncOCwfIg4ZmP3iKJ6g0k50UAQV996I9M7qHdxEtogeODrar~hT26jZ18hIdVcvH-NJRpT7CYhVBr2QAnouw4o7TA__"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div className="grid-item">
              <div className="item-content z-10 relative top-[75%] ml-8 flex">
                <h5 className="item-name text-white bg-black opacity-70 w-fit py-1 pr-6 rounded-lg text-[20px]">
                  NÉM COLLECTION
                </h5>
                <Link className="text-white underline underline-offset-4 text-12px mt-4">
                  Collection
                </Link>
              </div>
              <div className="item-img z-0">
                <img
                  className="w-[350px] h-[350px] rounded-[30px]"
                  src="https://s3-alpha-sig.figma.com/img/0a40/fe1c/eb2c09bd4ec14e2b153e6cb6e2775b57?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KFJYaIk949SlvXOCu5NFekwnf-ZeVpLbM7NP30cAQU8o0pkDwfhbpOEhz5M2BafQYTFfiufkLOvT7WiVoseaehDWQ43q-I-kZ0-RwVcBGrqv6wTMZQYPa4ZKFn1o1tOOitOxHzMhAjX9G1d5YJg6uZpc16HyYocpKyry24E8GcM~0qzOQZ7XWn0YHDlFk5Vl1SzuU3AloXsA6tnHgXBWs7tvRAmq0H-hnz2Od2G-sVUIoIPjDsJRb0~W~WKjB6uT6k~KAHI6saTJ6bhp770kzXu8QtxSYas1B8y8L3ZMYdPeXVa8RGc0MQRBt8fBPjS0B35iiricA79AbO1uzxf9~g__"
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
            <div className="product-list grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
              <div className="product-item">
                <div className="hot text-black font-bold z-10 relative top-[10%] left-[10%]">
                  HOT
                </div>
                <div className="relative  h-96 rounded-3xl overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border-solid border-2 border-stone-100">
                  <img
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full  absolute rounded-lg"
                    src="https://s3-alpha-sig.figma.com/img/18fd/3c64/18b3fd57af3485fa69c9d7bb2c3c51a1?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q1BficoStlw7b0ApKiXb3eVZ7DqS0-9FRXQ6PJ2fzv~QTzKK0s0jysiUm5UTDnYhAiHWoE4wwVqReq9oeaZaxkN9XHCxWi2-EiAj9wWJZW~yYTtujSEv50zqzwlwtTFYJFGFf16oY~yFdcZmMh9XL~zwzEUd0wAf0wmNSC0fkQnRLrX9ydDjC2hv8AwFvVbc4iFQLSK6RF1k90tG4bwClTIGObqlhE8vBGSg~p~wVpO2IMoUtpzoxk-arcv8yWxyCimiJRjVsNZh~9THzBXavydBFamVrmzqCF6C9Vo~gObHRFOEefWvE~YeGB1AUxuMXCkxhEnHiK875pxBItKpzA__"
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
                <div className="relative  h-96 rounded-3xl overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border-solid border-2 border-stone-100">
                  <img
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full  absolute rounded-lg"
                    src="https://s3-alpha-sig.figma.com/img/eaf3/440b/923c2c3ff076f4cf6781ddad8a718570?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YhGqs3QP-PNK4NjQPtnxmCfWYz89cQscOHMUrBsZHqus4DICtTc2m1I9pv3nCxx39rhBqdp7xIXWlOhDpIEQ9G4EIqQ1o9f0y-iBAoIID~ziVLu~XpZUKfxhwXDJPlw8VjGYp-CV~NbXuq-zsY8quuAtpIXUHoMsphCbrMj6UXwNb5oQCMPiKg6~TIp4i7jXQIj89PkAFnByQianG8KWOrW1rvzFKKJt4scfJxO1KKMhNtKkUCeZtW8IsASjjF2Le4pGPsLnwgAJOyIsPjASVIjGYVGqvFoXeTzsLAxGluba0jAqrOfwwU~Jt2OihrWmk6zIisjOoeVwgggQo3wB1A__"
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
                <div className="relative  h-96 rounded-3xl overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border-solid border-2 border-stone-100">
                  <img
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full  absolute rounded-lg"
                    src="https://s3-alpha-sig.figma.com/img/8122/0fd7/2e59abae8a465463e291e6749dab0227?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DLpYUjH-IdxN-08TDs0GdrWF806kb59QHCEsjietGoHj8cjdQ95BOyc-yds5Jj55l-xMCJXQAkHbAa48Z8pKhgfyFU0pwiSFzCyEDlf9UM6Prhxdex5PnQA30dgNf1iB1yKqSEJZuVL6lSC6WVcLye803Tl1WWj3UHhHlaViXamTHzOOXz642ouw2F2iexcEUlWV750YuHXrVRqLgP3LdZJb67liMJzx2p0jp7d3erS4luuBrJIoGNqmtxHPt6PoLBlwHQdD2s9mUJOlyNJZ4YmdbAltkUzlkgIlWK37vD5wFrqh7BxdkLg2yBPFoCKkP1FIuyx6d5Kk-vEPnF8I8g__"
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
                <div className="relative  h-96 rounded-3xl overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border-solid border-2 border-stone-100">
                  <img
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full  absolute rounded-lg"
                    src="https://s3-alpha-sig.figma.com/img/829c/de70/7d966e3df6e5012ac2843e4e79601284?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QXYQa9Yr792RQs6ityR2QOBNjWNuki4z1CgIDl5IbocEn5yLR0Sc~uLI9shQMtPhbOSthtSpLTh4DKLWf2wugUqJb-fVz99OQNFlgJbPcr7Pzz6w9PR3STAtl7xLHYmYu3TK891EfhIm9RKfdcqkq-WK7dcaois6IqbiAZ2VX4Dc1V6StaoitKvla~jPVNhqtKQ4YC2enjAfPkqhS0alatJDQBcKAfRO3ieqXR7-pt4d-3oujgQeYsds4gqZ9461upnQWgUWO7EI2TWuDr7RvzqPOw0H0psCciJCX~grKzVPjPHFfC-IrlTbGduJWp3RYrWY0BYDiFzvTBn5olPLHg__"
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
                <div className="relative  h-96 rounded-3xl overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border-solid border-2  border-stone-100">
                  <img
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full  absolute rounded-lg"
                    src="https://s3-alpha-sig.figma.com/img/feeb/b108/cb15a18f1f5141c123f9a285388a3525?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XDfytIC7L-SbhbrP0hIl2-r9HztaB6qTM9Ghdl2LN1aFoLpxnNDn0~wvHOcegKb5Htfo5356e9dTy8mgCc3LWn3QfaNVUKsl9N~4koQHVcLASo-BmRtfO5QUd9lHAQo3f~J4wi29dI1rK2hOQl1~ImCfVLQgEqdvJFJUau4bCee3R7vBdfHD--LcUt9MerQPdRiLT66mRu-0AnIGcaevrwYsn314rlCwm8NbpdHqg~Zs~D3YrEszeH3l2MxWuvQEHmG10hJ55payp8iXAq-~imCOcW36OZFitjhyR3rPz0g-GctBcoIOKTaUq7HwRoaSIiYjKeXTONx1i7dnRlAbRg__"
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
                <div className="relative  h-96 rounded-3xl overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border-solid border-2 border-stone-100">
                  <img
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full  absolute rounded-lg"
                    src="https://s3-alpha-sig.figma.com/img/0296/8579/7f5eb1d8c31110acc7ebe14c5e00c3ad?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=McpJToL4QdcqRKPEIF0xXcOxm-8dsX35Au0o7gOdKzemQ7iYKB6BPFOkvaBv0cd4SnLfbz-yytTE5i1BIs8teqJX-qyAnS2BACjwfOcFycOVv3hATsWIpH-KqJR-rE0BQVwPFM3IIc9T86Fktvo05FlrADPqb49xGEjtFdrEsG43mJNRtPmDoewUSMwhfyDs8Gmvaww5Dy0Jl2nOl6aZwqBzBnQ1P9F1zYAMIbgHw4ubqFhYMRHVOhD518gmP2qtoaX1MsNi8~8E0-Q3J7uNY1I7gjkRe1SjZuAgD8rtzC-3GM0HCs5IuVbf6GbrzmVrNkluuiP7yzS6Taq6znMomw__"
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
                <div className="relative  h-96 rounded-3xl overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border-solid border-2 border-stone-100">
                  <img
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full  absolute rounded-lg"
                    src="https://s3-alpha-sig.figma.com/img/030c/862b/89a20325cc018a21467d1a9af21fd19c?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEQXdre4isOm7VOnlay8AtHfzWd1qLq4S7IJUG034vO3XVK2tgcapZWJc1Uqat4k2zPquCLksVAKXtlbq1pIdGE3dcVZoetd-AgtphBToQYfTZluX9VweGose4cc~lU8S7XDashNItoKNj6O5FTigeO6S2~Bz6h1LlBodGANKrOPZoY5r5~p-Ijsz~4hXV7KW1ZpeoLxPwmT2X4iHXIUDhRoC0UMq-1sSQxcRyN2fpuqTP491UK3tu8ixTm5b39qHm9Ka7GE7l5iX7ViJFJXXfrvxz9r1He1cIeM5LsLX7RqVzzxIAXY-DeNO0KgRhvToLfhw8mb1YyXxk4rH-IZFg__"
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
              </div>{" "}
              <div className="product-item">
                <div className="hot text-black font-bold z-10 relative top-[10%] left-[10%]">
                  HOT
                </div>
                <div className="relative  h-96 rounded-3xl overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border-solid border-2 border-stone-100">
                  <img
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full  absolute rounded-lg"
                    src="https://s3-alpha-sig.figma.com/img/bf53/cdab/86e0526ef97aad932ae8355d9ae7cd71?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hEphdTw5H8~NW3Qm16TI-KDmqcIpywvcu3UxcXtgIFFZA8Cyv5Hj57z8gZcaVdlyvI1KZ9V3mtVYFuosBud335q5JvC6HSP1N2vb1zOP2cooMTiSF~1ZOWWudrHK8gYP9-7y9x5ojyMtXzmPWiIhyYemsWiwqd95fH4qBkL332DOWe~14PXi53HmohAoAi2xz8v6HWbe7Prrhb5f74ed87uh~93t3sunOneZCL~JzQZKIhHqACFTcB8LeO5L9NsDBmAsbF-oD8WrtCwDf295L8T90NnG1DmHgOnwOXsGN9wGhIMVFBf35-EjEO-dM-RFerepSnqfxwQmuf4B038qTw__"
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
            <img
              className="w-full"
              src="https://s3-alpha-sig.figma.com/img/70d4/22f9/7bd076b8f989d56c9229080b311cac79?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QTChnkDZiN7ZKYjltBP6biuI9mV8EZhm4Lj2uVyB6W-Qvuf5qol6LZkX53UqCgrrdhPZJKgTuiWopJBrIx2L7~9j6jGXhtr19UxN4NfPB61bjBFjWHz~aPDlLrIR4CdW45-P4yleqo7XS1LW1zgE0a1CtNOzCEbGwbtDjM2mW0g5B3Gyudu0G9e9rk2I1ofezvfOdSImy611GoLlwpMW9rnFWxflYDVXcxdwMkafH7UVVbEKXJeI3EGHpxfnLc2ypC9XsP0VsttDc~bwEaXTmSXHb3APUklevimmw2-KW0SaBRXLeJxPWpWHvZ5YbLy8lRnCd6an7e-8eZJeJLpV4Q__"
              alt=""
              srcset=""
            />
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
                <div className="article-img rounded-[30px] relative  h-[580px] overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border-solid border-2 border-stone-100">
                  <img
                    className="rounded-[30px] w-full"
                    src="https://s3-alpha-sig.figma.com/img/b011/a9d9/f20d94ea6bfb0d6721a4ff7649f4a653?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RZCmHNoDeDpYPy95h40MqFjAxZLbXeZ2dkT~4xJ4HJk7GLxRIwpIGZjbRqC6bwpexukhkUs5yBmOwU8QdRJLMybt0KP7XNWUFaJKKjRkLzUlb6w7MVuUsjZpV4-UTEomWUFRNiuyHuulrtxGNq~y8slz9QriV4IGelBswBscesdo~9vr~PXZbOqbirqU~LYemKJqZZF6OdTmM2JK9jvKKKkIN7NaKMFxrB6e1netqYcX4-H4Eyf-jarYBiOwDjh1c~lEaXT0xwSOTceoPMDPDGDgMtdkUfX-PZhpcFFpf5B7mB8m315WPdZqQn5NgzFVUwbwoCOmX8OawM6-0YzFoQ__"
                    alt=""
                  />
                </div>
                <div className="article-info py-3">
                  <h5 className="article-title text-[20px]">Article title</h5>
                  <Link className="underline">View</Link>
                </div>
              </li>
              <li className="article-item w-[30%]">
                <div className="article-img rounded-[30px] relative  h-[580px] overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border-solid border-2 border-stone-100">
                  <img
                    className="rounded-[30px] w-full"
                    src="https://s3-alpha-sig.figma.com/img/20af/97c9/80eb4d22263bbd1d83cae340c40ef33c?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=arBhfsKj3Vr9UdtSJc~9YHYMXUFFpqoWxXHS7eLRd9~uT52zXCbraPG~ACTziy76oNWYyLyFmTGZijNdPakzrwvW3~Jd2UE~vZRrLOe9u2bc7ohJ78MM9eJIjr2CdcoEeobRwa~xjhPKMpK5oWxO3eYBp0wGpmPiZ1Gs4u2iEZnJHKjJ9SOmbSuhRBZ3kY6fLQ34x3IkM7DZdkMP5JPVTo1gUtLB7W5Gc5Pxk8DQdz4f7~ylM~4xgiqnFcimor3-sxvEdtmUjsjzaUqneMlIklZxVwgHFE5NgYzfq1BN6ud3RsA42apEKh3mkiQOAhrlsAuZo7-wPfrGPsvj~e1CfA__"
                    alt=""
                  />
                </div>
                <div className="article-info py-3">
                  <h5 className="article-title text-[20px]">Article title</h5>
                  <Link className="underline">View</Link>
                </div>
              </li>
              <li className="article-item w-[30%]">
                <div className="article-img rounded-[30px] relative  h-[580px] overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border-solid border-2 border-stone-100 ">
                  <img
                    className="rounded-[30px] w-full h-full object-cover object-center lg:h-full lg:w-full  absolute"
                    src="https://s3-alpha-sig.figma.com/img/30d8/6ed5/195e27f006a0dabd4eee6f30592704d1?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JL8NKwitdkMNUTzmIpU8EIBVupFVflK8TGM~FUVt~BRrL10WEaCa4RREZ9sC6hlmHr73b8DH5xCXJs4Bk59ARWV13p6zGxcaVOSs1KU9iAGEZTd~-zPpN7U2m8B~UiVvZ7iXZUBV-6LHK2pUJS7fKegO9~0m7PeG~nbMv~JJxUbY8mBultePnbP-TABXO42lnhIsphyDUmrynoWxiGcSwX7iiulSBDaY7mPEGdF4~lMzjYr31~cYec1ymiKd0OUQlqu832QdGe6o3BZEIpgTyXpxbQOk1ACBgVqYPUph84xRAozTW4~smTe441eyfJ2krukvQAlmWTjIEblKJDv9CA__"
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
            <img
              className="w-[200px]"
              src="https://s3-alpha-sig.figma.com/img/da27/c878/1f04fdc0c50075249fa455396f468c74?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YMcL48naNjKG5RRKs4j-mgaQWvFOF-20xCkzqeYaT1lTXjXKDG2fqQIqDil0gQEoiEDIz1v45shnEGKVWzjvaDShNmNb6ENL3eoCzZiDWpDR6qyqUQ8987AjIEiePmOThz9hgt0fIrqq0izMwYbhtcROnH49Pwg7XRyJC4zCGyKBmjXha4Gw5OHNYbNTXJj4GrzKrlNORVvWSLD4mVrVi02wVi2TgejLYLDDgqEUZQlsAHrUHiMYt6lCj-2WIbIj6bxe7B0xavd62ijZsnIw2hDHOUBGGSIAuBoowUl4IXGZXJOc3pnvbc2wOwxtozEO0N7fTWIryAPWP-QR59Htyg__"
              alt=""
              srcset=""
            />
            <img
              className="w-[200px] ml-5"
              src="https://s3-alpha-sig.figma.com/img/63e2/d921/b57b6431095e50c47d7ab6ca2c6290bd?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KhoM9j01to8WCCesMs3sw4MAFZywCFT7nXPP23DawVqIybptP9oAXOD~6Rk7zWnaoKw2f73fQDlVHyr0nR5ECxDhd29PVL3xW53ejwq3PiuJ5Yor46NXkvlld39gQOWjBbvmp4eeOsg-QK7Y1Ggc3ow9NOaB88n2RCsUdchSZv9XBCsMp2TXjTCnTMleSELKiT-ksANH-3SfEl8mveHgw1gGhJNXln~pKBD5ECs-KomARnGs3adZt1t4LICZkeXnIBEBCrLbZUXNL3gMv0CrfY8hktEgapXPg9n84IiUVY-V3r0vmvVrIL9Vx1dL9UgPSvpziLir92TH3KaQ5ZXbRw__"
              alt=""
              srcset=""
            />
            <img
              className="w-[200px] ml-5"
              src="https://s3-alpha-sig.figma.com/img/0b05/b49e/5b5e94517b57421321ae298933b0a9cf?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=itInzyFf7IXlkHbNkMJNGFvAAznp0xUBXs3OtfIzHhY0PXKf~uYSYjjR10ZuaZP6UrdOX5TEH5cHg2bsCFPcpyFfhxbfd4NFkiirVTQIoLxJAX1V8BcMUNEZvIqaGTsQKWjvzSHZXuvBzoDCAkwyNvGOaDAz3Tulv3VBC3CFgxT2Y0~1KDoBgWZeJW1RBFo-kxpEi~AYJYZ7UZ3tb65pFIgoPFMsCT~JoWfCLGQTQ7fsIMFIhJ-eJMBziWTCFp3LKB9Cg-Z2wiX4xCmHngHG0dAUn-RB9Yrn~C~gc2ipg46ns3APy-PhEp9E90tnqErIMDTv~q~8M19qWEk8pzJ7Gw__"
              alt=""
              srcset=""
            />
            <img
              className="w-[200px] ml-5"
              src="https://s3-alpha-sig.figma.com/img/18e9/8dc6/7a6a95aa037cb374425ac61c620ea08b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZpu~rTVL~lXkKQYaLen0FFltB8xwHl2DaLCZ4tDHI5k7qTekjVHjlVatPwKi9kZxI4ZnkeeJmtpsG6OSNoh4AlzuivesvnBqgA3anYbs4w73EfZQp59whwv6-Kny3ojVr8zOjOMqcgBTljcFgthlM7qL5f~Hp9FOvFk5Z3KzgG7qX2GyQkKchI2ZTrsWtf-KAtW9NRfCs6FV8fqCHNQWI-sdz8xlomcL5mEAdWZtPY1gHG5cqVb61CKH0yS24vXO0kw6hLGD7YEueqEwLU5VBA1oYWMG6TRufiTMguRnMl6j1F0WhfzjKmUEo8NUjydCmUiVpWBiTd2ePbmIQsEYQ__"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="policy py-10">
          <div className="container mx-auto my-0 flex justify-between">
            <div className="policy-item content-center flex items-center flex-col">
              <div className="policy-img  h-[50px]">
                <img
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2F2b52552c-6677-4410-a2ed-ad45ae8dded4.png?alt=media&token=d74ae32f-1d3d-416a-ad7f-ba3322d4701b"
                />
              </div>
              <div className="policy-content">
                <p className="text-black text-[18px] text-center">
                  Free shipping
                </p>
                <p className="text-[14px] text-center">Order above 600.000</p>
              </div>
            </div>
            <div className="policy-item content-center flex items-center flex-col">
              <div className="policy-img  h-[50px]">
                <img
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2Fa59a1897-1d9a-49d7-a2f3-14a977c09cd4.png?alt=media&token=0b591c4c-ca14-4b46-9d2d-13e709b9118a"
                />
              </div>
              <div className="policy-content">
                <p className="text-black text-[18px] text-center">Money-back</p>
                <p className="text-[14px] text-center">7 days guarantee</p>
              </div>
            </div>
            <div className="policy-item content-center flex items-center flex-col">
              <div className="policy-img    h-[50px]">
                <img
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2Ff1095da7-ac77-4a5d-9194-58cf676759f3.png?alt=media&token=34e66382-bbc8-4eeb-b748-f9134b11c2a1"
                />
              </div>
              <div className="policy-content">
                <p className="text-black text-[18px] text-center">
                  Secure Payments
                </p>
                <p className="text-[14px] text-center">Information security</p>
              </div>
            </div>
            <div className="policy-item content-center flex items-center flex-col">
              <div className="policy-img   h-[50px]">
                <img
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/careconnect-2d494.appspot.com/o/images%2Fcee9bedf-3360-49ff-8f38-a2cc4c4d7d21.png?alt=media&token=eae50622-3c13-49e9-b30d-48f59b68641b"
                />
              </div>
              <div className="policy-content">
                <p className="text-black text-[18px] text-center">
                  Quick Support
                </p>
                <p className="text-[14px] text-center">
                  Phone and message support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CollectionPage;
