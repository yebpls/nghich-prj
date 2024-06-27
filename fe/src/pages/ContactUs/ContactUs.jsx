import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShippingFast,
  faTruck,
  faBox,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import React from "react";
const Contact = () => {
  return (
    <main className="main">
      <div className="section py-4">
        <div className=" mx-auto my-0 w-full">
          <div className="content-wrapper flex text-black">
            <div className="mx-auto w-1/2">
              <span className="text-xs md:text-sm">Contact Us</span>
              <br></br>
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold">
                We believe in
                <br></br> sustainable fashion creativity.<br></br> We’re
                passionate about bags.
              </p>
              <br></br>
              <span className="text-xs md:text-sm">
                Our features timeless fashion tote bags, with natural fabrics,
                curved lines, big size and modern design, which can be
                incorporated into your great styles. The pieces enchant for
                their sobriety, to last for generations, faithful to the shapes
                of each period, with a touch of the present
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="section py-8">
        <div className="container mx-auto flex">
          <div className="w-1/2 flex justify-end items-center">
            <img
              className="max-w-full h-auto"
              alt="Hero"
              src="/image 20.png"
              style={{ maxHeight: "400px", width: "400px" }}
            />
          </div>
          <div className="w-1/3 bg-[#CEF53D] p-8 flex flex-col justify-center items-start">
            <h1 className="text-5xl font-bold mb-2">About Me</h1>
            <p className="text-lg">
              "nghịch" brings you a website platform where you have the creative
              freedom to design and customize your unique personal bag. Our
              website helps you choose from various options, allowing you to
              select colors, patterns, and styles that reflect your
              individuality.
            </p>
            <br></br>
            <a href="#" className="shop-now-btn">
              <strong>Shop Now &rarr;</strong>
            </a>
          </div>
        </div>
      </section>

      <section class="section py-8 text-black">
        <div class="content-wrapper flex flex-wrap justify-center">
          <div class="section-center w-full sm:w-1/2 flex justify-center">
            <div class="content-box w-[70%] py-[30px] text-center">
              <h1 class="text-40px text-black">Contact Us</h1>
              <br />
            </div>
          </div>
        </div>
      </section>

      <section className="section py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-8 bg-slate-200">
              <div className="px-6 py-4">
                <div className="flex justify-center items-center mb-4">
                  <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />
                </div>
                <div className="font-bold text-xl mb-2 text-center">
                  ADDRESS
                </div>
                <p className="text-gray-700 text-base text-center">
                  153 Ham Nghi, <br /> Ho Chi Minh City, Viet Nam
                </p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-8 bg-slate-200">
              <div className="px-6 py-4">
                <div className="flex justify-center items-center mb-4">
                  <FontAwesomeIcon icon={faPhone} className="text-2xl" />
                </div>
                <div className="font-bold text-xl mb-2 text-center">PHONE</div>
                <p className="text-gray-700 text-base text-center">
                  +84 234 567 890
                </p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-8 bg-slate-200">
              <div className="px-6 py-4">
                <div className="flex justify-center items-center mb-4">
                  <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
                </div>
                <div className="font-bold text-xl mb-2 text-center">Email</div>
                <p className="text-gray-700 text-base text-center">
                  nghich.contact@gmail.com
                </p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-8 bg-slate-200">
              <div className="px-6 py-4">
                <div className="flex justify-center items-center mb-4">
                  <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
                </div>
                <div className="font-bold text-xl mb-2 text-center">
                  Facebook
                </div>
                <p className="text-gray-700 text-base text-center"> NGHỊCH</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-8">
        <div className="container mx-auto flex">
          <div className="w-1/2 ml-16">
            <form id="contact-form" action="#" method="POST">
              <div className="mb-4">
                <label
                  htmlFor="fullname"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Full Name:
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                  required
                ></textarea>
              </div>
              <div className="flex items-start justify-start">
                <button
                  type="submit"
                  className="bg-[#CEF53D] hover:bg-[#CEF53D] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="w-1/2">
            <div className="embed-responsive">
              <iframe
                width="600"
                height="400"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=L%C3%B4%20E2a-7,%20%C4%90%C6%B0%E1%BB%9Dng%20D1,%20%C4%90.%20D1,%20Long%20Th%E1%BA%A1nh%20M%E1%BB%B9,%20Th%C3%A0nh%20Ph%E1%BB%91%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c,%20H%E1%BB%93%20Ch%C3%AD%20Minh%20700000,%20Vietnam+(fpt%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-8">
        <section className="section py-8">
          <div className="container mx-auto my-0">
            <div className="content-wrapper mt-10">
              <ul className="review flex flex-wrap justify-between">
                <li className="review-item w-[22%] flex flex-col items-center">
                  <FontAwesomeIcon icon={faShippingFast} className="text-6xl" />
                  <span className="mt-2 text-center font-bold">
                    Free Shipping
                  </span>
                  <span className="mt-2 text-center">Oder above 600.000</span>
                </li>
                <li className="review-item w-[22%] flex flex-col items-center">
                  <FontAwesomeIcon icon={faTruck} className="text-6xl" />
                  <span className="mt-2 text-center font-bold">Money-back</span>
                  <span className="mt-2 text-center">7 days guarantee </span>
                </li>
                <li className="review-item w-[22%] flex flex-col items-center">
                  <FontAwesomeIcon icon={faBox} className="text-6xl" />
                  <span className="mt-2 text-center font-bold">
                    Security Payments
                  </span>
                  <span className="mt-2 text-center">information security</span>
                </li>
                <li className="review-item w-[22%] flex flex-col items-center">
                  <FontAwesomeIcon icon={faPhone} className="text-6xl" />
                  <span className="mt-2 text-center font-bold">
                    Quick Support
                  </span>
                  <span className="mt-2 text-center">
                    Phone and message support
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
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
    </main>
  );
};

export default Contact;
