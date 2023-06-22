"use client"
import Footer from "@components/Footer";
// import "../styles/globals.css";
import { motion } from 'framer-motion';

const Projects = () => {

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
        <section>
            <section className="sm:px-6 lg:px-32 mt-60 ">
                <div className="pg1">
                <motion.h1
                            className="text-white text-8xl max-w-4xl font-bold mt-10 font-shepp para2"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariants}
                            transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}
                        >
                           Projects & Contributions
                        </motion.h1>
                    <div className="flex justify-between items-end title mt-20">
                    <motion.p
                        className="max-w-2xl break-words font-satoshi text-white text-3xl para1"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariants}
                        transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}
                    >
                        We don't just create brands, we craft unforgettable experiences that leave a lasting impression.
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


                <motion.div className="flex flex-wrap mt-32 projects" initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}>
                    <div className="w-full h-1/2 md:w-1/2 lg:w-1/2 pl-0 p-8 image-one">
                        <div className="image-container">
                            <img className="w-full h-auto rounded-3xl object-contain image" src="/assets/images/uxhackmock.png" alt="Image 1" />
                        </div>
                        <div className="pl-0 pb-0 p-4">
                            <a href="/project-1" className="text-white font-medium text-lg mt-3">Project Name 1 <i className="fa-solid fa-arrow-up-right-from-square font-regular text-gray-700"></i></a>
                        </div>
                    </div>
                    <div className="w-full h-1/2 md:w-1/2 lg:w-1/2 pl-0 p-8 image-one">
                        <div className="image-container">
                            <img className="w-full h-auto rounded-3xl object-contain image" src="/assets/images/medme.png" alt="Image 1" />
                        </div>
                        <div className="pl-0 pb-0 p-4">
                            <a href="/project-1" className="text-white font-medium text-lg mt-3">Project Name 1 <i className="fa-solid fa-arrow-up-right-from-square font-regular text-gray-700"></i></a>
                        </div>
                    </div>
                    <div className="w-full pl-0 p-8 image-one">
                        <div className="image-container">
                            <img className="w-full h-auto rounded-3xl object-contain image" src="/assets/images/sushilap-work (2).png" alt="Image 1" />
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
                    <div className="w-full md:w-1/2 lg:w-1/2 pl-0 p-8 image-one">
                        <div className="image-container">
                            <img className="w-full h-auto rounded-3xl object-contain image" src="/assets/images/uxhackmock.png" alt="Image 1" />
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
                    <div className="w-full md:w-1/2 lg:w-1/2 pl-0 p-8 image-one">
                        <div className="image-container">
                            <img className="w-full h-auto rounded-3xl object-contain image" src="/assets/images/uxhackmock.png" alt="Image 1" />
                        </div>
                        <div className="pl-0 pb-0 p-4">
                            <a href="/project-1" className="text-white font-medium text-lg mt-3">Project Name 1 <i className="fa-solid fa-arrow-up-right-from-square font-regular text-gray-700"></i></a>
                        </div>
                    </div>

                </motion.div>
                <motion.div className="w-full mt-20">
                    <motion.p className="text-white font-medium text-4xl leading-tight">
                        W strive to bring innovation and creativity to every project we undertake. Our team of experts works closely with our clients to understand their needs and deliver outstanding solutions. We are dedicated to creating products exceed our client's expectations.
                    </motion.p>
                </motion.div>


                <Footer />
            </section>
        </section>
    )
}

export default Projects