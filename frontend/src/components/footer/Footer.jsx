import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";

import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    // day: "numeric",
  };
  // The date today
  const date = new Date();

  function subtractDays(date, days) {
    date.setDate(date.getDate() - days);
    return date;
  }
  // The date = Today - X days
  const updateDate = subtractDays(date, 10);

  // console.log(
  //   "🚀 ~ Footer ~ newDate:",
  //   updateDate.toLocaleDateString("ru-RU", options)
  // );

  return (
    <footer className="bg-black text-white w-full py-16 border-t border-gray-600">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap gap-6 max-md:justify-center">
          {/* Logo & Description */}
          <div className="flex flex-col gap-6 w-[500px]">
            <h1 className="text-3xl font-bold text-white">E-Shop</h1>
            <p className="text-[15px] text-gray-400 leading-[1.6]">
              E-Shop is a sleek and modern e-commerce website where you can
              browse, shop, and securely checkout with ease. Whether you&apos;re
              looking for the latest trends or everyday essentials, E-Shop makes
              online shopping seamless and enjoyable.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="text-gray-400 space-y-3">
              <li className="hover:text-white transition">Home</li>
              <li className="hover:text-white transition">
                Shop iPhone Accessories
              </li>
              <li className="hover:text-white transition">
                Shop Samsung Accessories
              </li>
              <li className="hover:text-white transition">Best Sellers</li>
              <li className="hover:text-white transition">Contact Us</li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="flex flex-col gap-5">
            <h2 className="text-lg font-semibold">Categories</h2>
            <ul className="text-gray-400 space-y-3">
              <li className="hover:text-white transition">
                Shipping Information
              </li>
              <li className="hover:text-white transition">Returns & Refunds</li>
              <li className="hover:text-white transition">Warranty Policy</li>
              <li className="hover:text-white transition">FAQ</li>
              <li className="hover:text-white transition">Track Order</li>
              <li className="hover:text-white transition">Contact Support</li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <FaLinkedin className="text-2xl text-gray-400 hover:text-white transition cursor-pointer" />
          <FaFacebookF className="text-2xl text-gray-400 hover:text-white transition cursor-pointer" />
          <BsTwitterX className="text-2xl text-gray-400 hover:text-white transition cursor-pointer" />
          <FaYoutube className="text-2xl text-gray-400 hover:text-white transition cursor-pointer" />
          {/* <ContactLinks /> */}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} E-Shop. All rights reserved.
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          Обновлено: {updateDate.toLocaleDateString("ru-RU", options)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
