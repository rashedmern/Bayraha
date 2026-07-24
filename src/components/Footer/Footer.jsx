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
      <div className="mx-auto max-w-[1440px] px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="font-onest text-4xl font-bold">Bayraha</h2>

            <p className="mt-6 max-w-md font-dmSans text-gray-400 leading-8">
              Discover premium gadgets, electronics and lifestyle products for
              modern living. Experience quality, innovation and fast delivery.
            </p>

            <div className="mt-8 flex gap-4">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
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

            <ul className="space-y-4 text-gray-400 font-dmSans">
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
                    className="transition-all duration-300 hover:text-white hover:pl-2"
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

            <ul className="space-y-4 text-gray-400 font-dmSans">
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
                    className="transition-all duration-300 hover:text-white hover:pl-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 font-onest text-xl font-semibold">
              Newsletter
            </h3>

            <p className="mb-5 text-gray-400 font-dmSans">
              Subscribe to receive updates and exclusive offers.
            </p>

            <div className="flex overflow-hidden rounded-full border border-white/10 bg-white/5">
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

        <div className="my-14 h-px bg-white/10"></div>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500 font-dmSans">
            © {new Date().getFullYear()} Bayraha. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-gray-400">
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

          <div className="text-sm text-gray-500 font-dmSans">
            Secure Payments • Fast Delivery • 24/7 Support
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;