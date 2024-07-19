import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ComSeo from "../../components/SEO/ComSeo";
import ListCustomPublic from "../CustomV2/GetCustom/CustomPublic";

const HomePage = () => {
  return (
    <main className="main">
      <ComSeo tile="Nghịch" name="Nghịch" content="Nghịch" />
      <div className="section p-4">
        <div className=" mx-auto my-0 w-full">
          <div className="content-wrapper flex text-black">
            <div className="mx-auto w-1/2">
              <p className="text-lg md:text-3xl lg:text-5xl">
                <span className="text-sm md:text-lg lg:text-2xl">
                  STUNNING BAG BY
                </span>
                <br></br>
                OUR DESIGN TEAM
              </p>
            </div>
            <div className="section-right w-1/2">
              <h1 className="text-lg md:text-3xl lg:text-5xl">
                LET'S <br></br>MAKE YOUR TOTE
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 bg-[#CFF53E] w-full border-t border-[#4848FF]">
        <div className="container mx-[auto] my-0">
          <div className="content-wrapper">
            <ul className="flex justify-between text-[#4848FF] font-bold text-xs md:text-md lg:text-lg">
              <li className="section-item text-center ">
                <span>
                  <FontAwesomeIcon icon={faStar} className="mr-2 text-left" />
                </span>
                TOTEBAG BY YOURSELF
              </li>
              <li className="section-item">
                <span>
                  <FontAwesomeIcon icon={faStar} className="mr-2" />
                </span>
                TOTEBAG BY YOURSELF
              </li>
              <li className="section-item">
                <span>
                  <FontAwesomeIcon icon={faStar} className="mr-2" />
                </span>
                TOTEBAG BY YOURSELF
              </li>
              <li className="section-item">
                <span>
                  <FontAwesomeIcon icon={faStar} className="mr-2" />
                </span>
                TOTEBAG BY YOURSELF
              </li>
              <li className="section-item">
                <span>
                  <FontAwesomeIcon icon={faStar} className="mr-2" />
                </span>
                TOTEBAG BY YOURSELF
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="banner grid grid-cols-1 sm:grid-cols-2 ">
          <img
            className="sm:col-span-1   object-cover object-center w-[800px] sm:w-[1000px]
"
            alt="19"
            src="/image 19.png"
          />
          <img
            className=" sm:col-span-1  object-cover object-center   w-[800px] sm:w-[1000px]"
            alt="20"
            src="/image 20.png"
          />
        </div>
      </section>
      <section className="section py-8 bg-[#000000] text-white">
        <div className="content-wrapper  border-b border-[#4848FF] pb-2">
          <div className="container mx-[auto] my-0">
            <h1 className="section-label font-bold text-[35px]">
              <span className="text-[20px] text-gray_2">ABOUT</span>
              <br></br>
              OUR AMBITION
            </h1>
          </div>
        </div>
        <div className="container mx-[auto] my-0">
          <div className=" gap-4 grid grid-cols-1 sm:grid-cols-2 p-2">
            <div className="content-left sm:col-span-1 flex  ">
              <img
                className="relative  object-cover  rounded-xl"
                alt="a"
                src="/image a.png"
              />
            </div>
            <div className="content-right  items-center flex sm:col-span-1 ">
              <div className="content-wrapper border border-customBlue rounded-lg">
                <div className="content-item border-b border-customBlue p-6">
                  <h3 className="font-manjari  text-25px leading-tight mb-2 pb-3">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="mr-2 text-[#AEA1F7]"
                    />{" "}
                    Who are we?
                  </h3>
                  <p className="font-manjari mb-5 text-16px leading-tight text-[#AFB0B6]">
                    {" "}
                    "nghịch" brings you a website platform where you have the
                    creative freedom to design and customize your unique
                    personal bag. Our website helps you choose from various
                    options, allowing you to select colors, patterns, and styles
                    that reflect your individuality.
                  </p>
                </div>
                <div className="content-item p-6">
                  <h3 className="font-manjari text-25px leading-tight mb-2 pb-3">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="mr-2 text-[#AEA1F7]"
                    />{" "}
                    Why are we different?
                  </h3>
                  <p className="font-manjari  text-16px leading-tight">
                    {" "}
                    Among countless products on the market, finding a place for
                    yourself is really difficult. We understand that, if you
                    don't really stand out at something, how can you become more
                    stand out? We too, in a fierce market with millions of
                    products, to become your choice we must become very unique.
                    What is unique to us is unique to you.<br></br>
                    <br></br>
                    <br></br>
                    <span className="text-[#AFB0B6]">nghịch team</span>
                  </p>
                  <h2 className="font-manjari  text-16px leading-tight mt-5">
                    {" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section py-8 bg-[#CEF53D] text-black">
        <div className="container mx-[auto] my-0">
          <div className="content-wrapper border-b border-[#4848FF] pb-2">
            <h1 className="section-label font-bold text-[35px]">
              <span className="text-[20px] text-gray_2">SERVICES</span>
              <br></br>
              MY PHOTOGRAPHY SERVICES
            </h1>
          </div>
          <div className="content-wrapper grid grid-cols-1 sm:grid-cols-2 p-10">
            <div className="content-left sm:col-span-1 flex justify-center items-center p-4">
              <div className="mt-10 md:mt-20 md:mr-5">
                <p className="font-manjari text-40px leading-tight mb-2 pb-5">
                  DESIGN YOUR OWN BAGS
                </p>
                <p className="font-manjari mb-5 text-gray_2 text-[22px] leading-tight">
                  The most special thing about Ngai is that it gives you the
                  most comfort in designing your bag. If you don't have too much
                  time, we are ready to help you. This sleek and streamlined
                  tote features a compartment with a secure zipper closure to
                  keep your belongings safe. The interior divider helps you
                  organize your essentials, while the external pocket is perfect
                  for quick-access items like your phone or wallet. The sturdy
                  cotton canvas construction ensures durability, making it your
                  ideal everyday companion.<br></br>
                  <br></br>
                  As I ladle this soup into bowls, I remember my dad’s hands,
                  weathered and gentle. He’d sit by the fire, cradling his bowl,
                  savoring each spoonful. No frills, no fuss—just warmth,
                  memories, and love. So when winter knocks, and the wind
                  rattles the shutters, I reach for the old recipe card. The
                  potatoes yield, the onions soften, and I’m transported—to that
                  farmhouse, to Dad’s smile, to the heart of simple
                  old-fashioned potato soup.
                </p>
              </div>
            </div>
            <div className="content-right sm:col-span-1 flex justify-center items-center">
              <img
                className=" object-cover rounded-3xl rounded-bl-[100px]"
                alt="b"
                src="/Imageb.png"
              />
            </div>
          </div>
          <p className="font-manjari text-30px leading-tight mb-2 pb-5">
            SERVICES HIGHLIGHT
          </p>
          <div className="content-wrapper  grid grid-cols-1 sm:grid-cols-2 p-10">
            <div className="content-left sm:col-span-1 flex justify-center items-center">
              <ul className="highlight w-[85%]">
                <li className="highlight-item pb-2">
                  <div className="item-wrapper bg-white p-3 rounded-lg">
                    CUSTOMIZE YOUR OWN TOTE
                  </div>
                </li>
                <li className="highlight-item pb-2">
                  <div className="item-wrapper bg-white p-3 rounded-lg">
                    PRINT IN YOUR BAG
                  </div>
                </li>
                <li className="highlight-item pb-2">
                  <div className="item-wrapper bg-white p-3 rounded-lg">
                    DESIGN WHAT YOUR REALY WANT FOR YOURSELF
                  </div>
                </li>
                <li className="highlight-item pb-2">
                  <div className="item-wrapper bg-white p-3 rounded-lg">
                    DESIGN WHAT YOUR REALY WANT FOR YOURSELF
                  </div>
                </li>
              </ul>
            </div>
            <div className="content-right sm:col-span-1 flex justify-center items-center">
              <div className="content-wrapper">
                <p className="font-manjari text-[#767676] text-16px leading-tigh">
                  The most special thing about Ngai is that it gives you the
                  most comfort in designing your bag. If you don't have too much
                  time, we are ready to help you. This sleek and streamlined
                  tote features a compartment with a secure zipper closure to
                  keep your belongings safe. The interior divider helps you
                  organize your essentials, while the external pocket is perfect
                  for quick-access items like your phone or wallet. The sturdy
                  cotton canvas construction ensures durability, making it your
                  ideal everyday companion.
                  <br />
                  <br />
                  As I ladle this soup into bowls, I remember my dad’s hands,
                  weathered and gentle. He’d sit by the fire, cradling his bowl,
                  savoring each spoonful. No frills, no fuss—just warmth,
                  memories, and love. So when winter knocks, and the wind
                  rattles the shutters, I reach for the old recipe card. The
                  potatoes yield, the onions soften, and I’m transported—to that
                  farmhouse, to Dad’s smile, to the heart of simple
                  old-fashioned potato soup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section py-8 bg-[#CEF53D] text-black">
        {/* <div className="container mx-[auto] my-0">
          <div className="content-wrapper border-b border-[#4848FF] pb-2">
            <h1 className="section-label font-bold text-[35px] text-white">
              <span className="text-[20px] text-gray_2">
                CUSTOMIZE AS YOU LIKE
              </span>
              <br></br>
              EXPLORE OUR PHOTOGRAPHY WORK
            </h1>
          </div>
        </div> */}
        <ListCustomPublic />
      </section>
      <section className="section py-8 text-black">
        <div className="container mx-[auto] my-0">
          <div className="content-wrapper  grid grid-cols-1 sm:grid-cols-2 p-10 gap-4">
            <div className="section-left sm:col-span-1  flex justify-center flex-wrap">
              <div className="content-box w-[70%] py-[30px]">
                <h1 className="text-25px text-pink_1">
                  CUSTOM DESIGN OPTIONS:
                </h1>
                <br />
                <p className="text-14px text-black">PERSONALIZATION:</p>
                <p className="text-12px text-gray_2">
                  Allow customers to add their own photos, artwork, or text to
                  the tote bag. Personalized designs make the bag unique and
                  meaningful.
                </p>
                <br />
                <p className="text-14px text-black">COLOR CHOICES:</p>
                <p className="text-12px text-gray_2">
                  Offer a range of colors for the bag itself and any design
                  elements.
                </p>
                <br />
                <p className="text-14px text-black">TYPOGRAPHY:</p>
                <p className="text-12px text-gray_2">
                  Let customers choose fonts and add custom text (names, quotes,
                  slogans).
                </p>
                <br />
                <p className="text-14px text-black">GRAPHICS AND ICONS:</p>
                <p className="text-12px text-gray_2">
                  Durable Materials: Use high-quality materials like cotton
                  canvas or eco-friendly fabrics.
                  <br />
                  Sturdy Construction: Reinforce seams and handles to ensure the
                  bag lasts.
                  <br />
                  Print Quality: Ensure crisp and vibrant printing for the
                  custom designs.
                </p>
              </div>
              <div className="content-box w-[70%] py-[30px]">
                <h1 className="text-25px text-pink_1">
                  Marketing and Branding Services
                </h1>
                <br />
                <p className="text-14px text-black">Custom Embroidery</p>
                <p className="text-12px text-gray_2">
                  Embroider logos, names, or intricate designs for a premium
                  look2.
                </p>
                <br />
                <p className="text-14px text-black">Promotional Products</p>
                <p className="text-12px text-gray_2">
                  Create branded tote bags for businesses to use as giveaways or
                  promotional items.
                </p>
                <br />
                <p className="text-14px text-black">Personalized Gifts</p>
                <p className="text-12px text-gray_2">
                  Design custom tote bags for special occasions (birthdays,
                  weddings, etc.).
                </p>
                <br />
                <p className="text-14px text-black">
                  Delivery and Satisfaction Guarantee
                </p>
                <p className="text-12px text-gray_2">
                  Free Shipping: Offer free standard shipping to encourage
                  orders.
                  <br />
                  Express Delivery: Provide faster shipping options for those in
                  a hurry.
                  <br />
                  Customer Happiness Guarantee: Assure customers that you’ll
                  address any issues with their order.
                </p>
              </div>
            </div>
            <div className="section-right sm:col-span-1  flex justify-center flex-wrap">
              <div className="content-box w-[70%] py-[30px]">
                <h1 className="text-25px text-pink_1">Material and Quality</h1>
                <br />
                <p className="text-14px text-black">Durable Materials</p>
                <p className="text-12px text-gray_2">
                  Use high-quality materials like cotton canvas or eco-friendly
                  fabrics.
                </p>
                <br />
                <p className="text-14px text-black">Sturdy Construction</p>
                <p className="text-12px text-gray_2">
                   Reinforce seams and handles to ensure the bag lasts.
                </p>
                <br />
                <p className="text-14px text-black">Print Quality</p>
                <p className="text-12px text-gray_2">
                  Ensure crisp and vibrant printing for the custom designs.
                </p>
              </div>
              <div className="content-box w-[70%] py-[30px]">
                <h1 className="text-25px text-pink_1">Additional Feature</h1>
                <br />
                <p className="text-14px text-black">Inner Pockets</p>
                <p className="text-12px text-gray_2">
                  Include pockets for organization.
                </p>
                <br />
                <p className="text-14px text-black">Lining</p>
                <p className="text-12px text-gray_2">
                  Consider adding a lining for extra durability and style.
                </p>
                <br />
                <p className="text-14px text-black">Closure Options</p>
                <p className="text-12px text-gray_2">
                  Offer zippers, snaps, or open-top designs.
                </p>
                <br />
                <p className="text-12px text-gray_2">
                  Remember, the key is to align your services with your brand’s
                  identity and the preferences of your target audience. Whether
                  it’s functional features, customization, or eco-conscious
                  materials, make sure your tote bags stand out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section py-8">
        <div className="container mx-[auto] my-0">
          <div className="content-wrapper border-b border-[#4848FF] p-8">
            <h1 className="section-label font-medium text-[35px] text-black pb-5">
              <span className="text-[20px] text-gray_2">TESTIMINIALS</span>
              <br></br>
              BELOVED CLIENTS SAID ABOUT US
            </h1>
            <p className="section-label font-bold text-[25px] text-black pb-5">
              <span className="text-[16px] text-gray_2">Total reviews</span>
              <br></br>
              323
            </p>
          </div>

          <div className="content-wrapper mt-10">
            <ul className="review  grid grid-cols-1 md:grid-cols-3 p-10 justify-between">
              <li className="review-item md:col-span-1 ">
                <img
                  className="relative w-full h-50 object-cover rounded-md"
                  alt="1"
                  src="/cmt 1.png"
                />
              </li>
              <li className="review-item md:col-span-1">
                <img
                  className="relative w-full h-50 object-cover rounded-md"
                  alt="1"
                  src="/cmt 1.png"
                />
              </li>
              <li className="review-item md:col-span-1">
                <img
                  className="relative w-full h-50 object-cover rounded-md"
                  alt="1"
                  src="/cmt 1.png"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end py-[50px] pr-28 ">
          <img
            className="relative h-30 w-40 object-cover"
            alt="Logo copy"
            src="/logo_nghich.png"
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
