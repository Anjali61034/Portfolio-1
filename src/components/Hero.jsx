import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-accent glow-cyan' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-accent to-transparent' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className='text-accent glow-text'>Anjali</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-secondary`}>
            Full Stack Developer building <br className='sm:block hidden' />
            accessible and impactful applications
          </p>
          
          <div className='mt-8 flex flex-wrap gap-3'>
            <span className='skill-badge px-4 py-2 text-sm rounded-full bg-tertiary border border-accent/20 text-accent'>
              JavaScript
            </span>
            <span className='skill-badge px-4 py-2 text-sm rounded-full bg-tertiary border border-accent/20 text-accent'>
              Python
            </span>
            <span className='skill-badge px-4 py-2 text-sm rounded-full bg-tertiary border border-accent/20 text-accent'>
              Flutter
            </span>
            <span className='skill-badge px-4 py-2 text-sm rounded-full bg-tertiary border border-accent/20 text-accent'>
              Django
            </span>
          </div>

          <div className='mt-8 flex gap-4'>
            <a
              href='https://linkedin.com/in/anjali-sharma-253317312/'
              target='_blank'
              rel='noopener noreferrer'
              className='px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-light transition-all duration-300 hover:shadow-glow'
            >
              Connect with me
            </a>
            <a
              href='#projects'
              className='px-6 py-3 border border-accent/50 text-accent rounded-lg hover:bg-accent/10 transition-all duration-300'
            >
              View Projects
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-accent/50 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-accent mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
