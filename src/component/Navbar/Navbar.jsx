import React from "react";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md"; // Tambahkan ikon Close
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Products", link: "#" },
  { id: 3, title: "About", link: "#" },
  { id: 4, title: "Shop", link: "#" },
  { id: 5, title: "Contacts", link: "#" },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="bg-red shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo Section */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-gray-600">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <MdOutlineShoppingCart />
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className={`text-4xl focus:outline-none rounded-full p-2 transition duration-200 ${
              open ? "bg-red-500 text-white" : "bg-transparent text-black"
            }`}
          >
            {open ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-pink-500 absolute top-16 left-0 w-full shadow-lg z-10"
        >
          <ul className="flex flex-col items-center gap-4 py-6 text-black">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="block w-full text-center py-2 px-4 hover:text-pink-200 font-semibold"
                >
                  {menu.title}
                </a>
              </li>
            ))}
            {/* Tombol Keranjang */}
            <button className="text-2xl bg-white text-pink-500 rounded-full p-3 duration-200 hover:bg-gray-100">
              <MdOutlineShoppingCart />
            </button>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
