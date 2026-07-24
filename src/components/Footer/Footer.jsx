import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#171318] text-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 lg:px-6 lg:py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-5 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <h2 className="font-onest text-3xl font-bold lg:text-4xl">
              Bayraha
            </h2>

            <p className="mt-5 max-w-md font-dmSans leading-8 text-gray-400">
              Discover premium gadgets, electronics and lifestyle products for
              modern living. Experience quality, innovation and fast delivery.
            </p>

            <div className="mt-8 flex gap-4">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-6 font-onest text-xl font-semibold">Shop</h3>

            <ul className="space-y-4 font-dmSans text-gray-400">
              {[
                "Laptops",
                "Phones",
                "Accessories",
                "Gaming",
                "Lifestyle",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-all duration-300 hover:pl-2 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 font-onest text-xl font-semibold">Support</h3>

            <ul className="space-y-4 font-dmSans text-gray-400">
              {[
                "Contact Us",
                "Track Order",
                "Warranty",
                "Returns",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-all duration-300 hover:pl-2 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="mb-6 font-onest text-xl font-semibold">
              Newsletter
            </h3>

            <p className="mb-5 font-dmSans text-gray-400">
              Subscribe to receive updates and exclusive offers.
            </p>

            <div className="flex max-w-[320px] overflow-hidden rounded-full border border-white/10 bg-white/5 lg:max-w-none">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent px-5 py-4 outline-none placeholder:text-gray-500"
              />

              <button className="flex w-16 items-center justify-center bg-white text-black transition hover:bg-gray-300">
                <FiSend size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="my-12 h-px bg-white/10"></div>

        <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:justify-between lg:text-left">
          <p className="font-dmSans text-sm text-gray-500">
            © {new Date().getFullYear()} Bayraha. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="transition hover:text-white">
              Terms
            </a>

            <a href="#" className="transition hover:text-white">
              Privacy
            </a>

            <a href="#" className="transition hover:text-white">
              Cookies
            </a>
          </div>

          <div className="font-dmSans text-sm text-gray-500">
            Secure Payments • Fast Delivery • 24/7 Support
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;