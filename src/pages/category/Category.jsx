import React from "react";
import { motion } from "framer-motion";
React;
export default function Category() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <>
      <section className="w-full py-8 md:py-16">
        <div className="container w-full mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {[
              {
                title: "Front-End Development",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
                desc: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
              },
              {
                title: "Back-End Development",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToWzE17mxHt-cUVNazNGQhcGwzVCZFkR-QaQ&s",
                desc: "Node.js is an open source server environment. Node.js allows you to run JavaScript on the server. Start learning Node.js now.",
              },
              {
                title: "Tailwinds/ Material UI/UX",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0tcybQM3puKiYpW-PBBp7es6-avdPz16lluIKjdtSA12QuYfrRfFr9XDR2Go3aivVtc&usqp=CAU",
                desc: "Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="text-center mb-10 xl:mb-0"
                variants={fadeInUp}
              >
                <div className="flex items-center justify-center">
                  <div className="w-24 flex justify-center bg-indigo-50 text-indigo-500 rounded-md mb-5 md:mb-10">
                    <img
                      src={service.img}
                      alt=''
                      className="object-cover h-[4rem]"
                    />
                  </div>
                </div>
                <h2 className="font-semibold text-white dark:text-white text-xl md:text-3xl mb-5">
                  {service.title}
                </h2>
                <p className="font-normal text-gray-400 text-sm md:text-lg">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
