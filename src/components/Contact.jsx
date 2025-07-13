import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-6 text-white text-lg'>
          <div>
            <span className='font-semibold'>Email:</span>{" "}
            <a href='mailto:codewithhanna@gmail.com' className='text-secondary hover:underline'>
              codewithhanna@gmail.com
            </a>
          </div>
          <div>
            <span className='font-semibold'>Phone:</span>{" "}
            <a href='tel:+1234567890' className='text-secondary hover:underline'>
              +923051707303
            </a>
          </div>
          <div>
            <span className='font-semibold'>LinkedIn:</span>{" "}
            <a
              href='https://www.linkedin.com/in/hanna-imran'
              target='_blank'
              rel='noopener noreferrer'
              className='text-secondary hover:underline'
            >
              linkedin.com/in/hanna-imran
            </a>
          </div>
          <div>
            <span className='font-semibold'>GitHub:</span>{" "}
            <a
              href='https://github.com/hanna-khan'
              target='_blank'
              rel='noopener noreferrer'
              className='text-secondary hover:underline'
            >
              github.com/hanna-khan
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
