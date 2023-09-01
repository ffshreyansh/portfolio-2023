"use client"
import Footer from "@components/Footer";
import "../styles/globals.css";
import { motion } from 'framer-motion';



const Home = () => {
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
  <section className="sm:px-6 lg:px-32 mt-52 ">
<div className="pg1">
      <motion.p
        className="max-w-2xl break-words font-satoshi text-white text-3xl para1"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        A spectacular Flutter developer who turns ideas into cutting-edge apps.
      </motion.p>
      <div className="flex justify-between items-end title">
        <motion.h1
          className="text-white text-8xl max-w-4xl font-bold mt-10 font-shepp para2"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          Flutter Developer & Programmer
        </motion.h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <motion.a
            href="mailto:bhagatnivedita469@gmail.com"
            className="text-white font-medium text-xl"
          >
            bhagatnivedita469@gmail.com
          </motion.a>
          <motion.p className="text-gray-700 font-bold text-lg">
            scroll to explore
          </motion.p>
        </motion.div>

       

      </div>
    </div>


    <motion.div className="flex flex-wrap mt-32 projects" initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}>
      <div className="w-full h-1/2 md:w-1/2 lg:w-1/2 pl-0 p-8 image-one">
        <div className="image-container">
          <img className="w-full h-auto rounded-3xl object-contain image" src="/assets/images/artsense.jpg" alt="Image 1" />
        </div>
        <div className="pl-0 pb-0 p-4">
          <a href="/project-1" className="text-white font-medium text-lg mt-3">Artsense App<i className="fa-solid fa-arrow-up-right-from-square font-regular text-gray-700 ml-2"></i></a>
        </div>
      </div>
      <div className="w-full h-1/2 md:w-1/2 lg:w-1/2 pl-0 p-8 image-one">
        <div className="image-container">
          <img className="w-full h-auto rounded-3xl object-contain image" src="/assets/images/food.png" alt="Image 1" />
        </div>
        <div className="pl-0 pb-0 p-4">
          <a href="/project-1" className="text-white font-medium text-lg mt-3">Hunger Wheels<i className="ml-2 fa-solid fa-arrow-up-right-from-square font-regular text-gray-700"></i></a>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 pl-0 p-8 image-one">
        <div className="image-container">
          <img className="w-full h-auto rounded-3xl object-contain image" src="/assets/images/artsense2.jpg" alt="Image 1" />
        </div>
        <div className="pl-0 pb-0 p-4">
          <a href="/project-1" className="text-white font-medium text-lg mt-3">Project Name 1 <i className="fa-solid fa-arrow-up-right-from-square font-regular text-gray-700"></i></a>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 pl-0 p-8 image-one">
        <div className="image-container">
          <img className="w-full h-auto rounded-3xl object-contain image" src="/assets/images/uxhackmock.png" alt="Image 1" />
        </div>
        <div className="pl-0 pb-0 p-4">
          <a href="/project-1" className="text-white font-medium text-lg mt-3">Project Name 1 <i className="fa-solid fa-arrow-up-right-from-square font-regular text-gray-700"></i></a>
        </div>
      </div>

    </motion.div>
    <motion.div className="w-full mt-18">
          <motion.p className="text-white font-medium text-4xl leading-tight para-home">
          W strive to bring innovation and creativity to every project we undertake. Our team of experts works closely with our clients to understand their needs and deliver outstanding solutions. We are dedicated to creating products exceed our client's expectations.
          </motion.p>
        </motion.div>

    <div className="image-container img-home w-full mt-32">
      <img src="/assets/images/t2.webp" className="h-96 w-full" alt="" />
    </div>
    <div>
      
    </div>
  <Footer/>
  </section>

  );
}

export default Home;