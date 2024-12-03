import React from "react";
import Fruit1 from "../../assets/fruits/apel.png";
import Fruit2 from "../../assets/fruits/jrk.png";
import Fruit3 from "../../assets/fruits/belimbing.png";
import Fruit4 from "../../assets/fruits/str.png";
import { motion } from "framer-motion";

const MenusData = [
  {
    id: 1,
    title: "Fresh Red Apples",
    link: "/",
    price: "$2.00",
    img: Fruit1,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Fresh Oranges",
    link: "/",
    price: "$4.00",
    img: Fruit2,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fresh Star Fruits",
    link: "/",
    price: "$6.00",
    img: Fruit3,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Fresh Strawberry",
    link: "/",
    price: "$8.00",
    img: Fruit4,
    delay: 1.2,
  },
];

const FadeLeft = (delay) => ({
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay },
  },
});

const Menus = () => {
  return (
    <section>
      <div className="container pt-12 pb-20">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl font-bold text-left pb-10 uppercase"
        >
          Our Menu
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MenusData.map((menu) => (
            <motion.div
              key={menu.id}
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.1 }}
              className="bg-white rounded-3xl p-4 shadow-lg flex flex-col items-center gap-3"
            >
              <img
                src={menu.img}
                alt={menu.title}
                className="w-16 mb-4 scale-110 transform -translate-y-6"
              />
              <div className="text-center">
                <h1 className="text-lg font-semibold">{menu.title}</h1>
                <p className="text-lg font-semibold text-secondary">{menu.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
