"use client"
import Footer from "@components/Footer";
import { motion } from 'framer-motion';
import "styles/globals.css";



const Contact = () => {
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      filter: "blur(1px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0)"
    }
  };

  return (
    <section className="sm:px-6 lg:px-32 mt-60 contact-sec">
      <div className="pg1-cont">
        <motion.h1
          className="text-white text-8xl max-w-4xl font-bold mt-10 font-shepp para-contact"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          Let's Talk
        </motion.h1>
        <div className="flex justify-between items-end title-cont mt-20">
          <motion.p
            className="max-w-4xl break-words font-satoshi text-white text-6xl para1"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            Connecting with our clients to create tailor-made solutions
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}
          >

          </motion.div>



        </div>
      </div>

      <motion.div className="w-full mt-32 cont0">
        <motion.p className=" mail-contact text-white font-medium text-5xl leading-tight">
          shreyanshkumar058@gmail.com
        </motion.p>
      </motion.div>
      <motion.div className="text-white flex text-3xl mt-10 justify-between cont">
        <div className="flex gap-8 cont2">
          <motion.a>Twitter <i className="fa-solid fa-arrow-right"></i></motion.a>
          <motion.a>LinkedIn <i className="fa-solid fa-arrow-right"></i></motion.a>
          <motion.a>Twitter <i className="fa-solid fa-arrow-right"></i></motion.a>
        </div>
        <div className="address">
          <motion.p>India</motion.p>
          <motion.p className="text-gray-500">Gopalganj, Bihar</motion.p>
          <motion.p className="text-gray-500">841428</motion.p>
        </div>
      </motion.div>

      <div>

      </div>
      <Footer />
    </section>
  )
}

export default Contact