import React from 'react';
import BannerPng from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";

const bgStyle = {
   backgroundImage: `url(${BannerPng})`,
   backgroundPosition: "center",
   backgroundSize: "cover",
   backgroundRepeat: "no-repeat",
};

const Banner3 = () => {
  return (
  <section className="">
    <div 
    style={bgStyle}
    className="container grid grid-cols-1 md:grid-cols-2
    space-y-6 md:space-y-0 py-14 rounded-3xl">
      {/* Blank div */}
       <div></div>
      {/* Brand info */}
      <div className="flex flex-col justify-center">
        <div className="text-center md:text-left space-y-4
        lg:max-w-[400px]">
          <motion.h1
           variants={FadeLeft(0.5)}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}  
           className="text-3xl lg:text-6xl font-bold uppercase"
          > 
          {" "}
          Brand Info 
          </motion.h1>
          <motion.p
          variants={FadeLeft(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}  
          >
            Lorem ipsum dolor sit amet consectetur,
            adipisicing alit. Id nam 
            obcaecati sequi odio dolore afficia magni 
            reiciendis, architecto,
            eos, aut asperiores reprehenderit quas rerum omnis
            facilis quam
            eius doloribus maxime!
          </motion.p>
          <motion.p
          variants={FadeLeft(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}  
          >
            Lorem ipsum, dolor sit amet cosectetur,
            adipisicing elit. baetae
            vero inventore assumenda ducimus alias doloribus.
          </motion.p>
          {/* button section */}
          <motion.div
          variants={FadeLeft(0.9)}
          initial="hidden"
          animate="visible"
          className="flex justify-center md:justify-start"
          >
          <button className="border border-primary px-4 py-2 rounded-lg">Learn More</button>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Banner3;