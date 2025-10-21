import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2 } from "lucide-react";
import MyPhoto from '../../public/assets/profile/IMG-20250428-WA0011.jpg';


export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hi, I'm Mahmoud Magdy, a Full Stack Developer.";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-4 py-2 rounded-full mb-6"
            >
              <Code2 className="w-5 h-5" />
              <span className="font-medium">Full Stack Developer</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 min-h-[120px]">
              {displayText}
              <span className="animate-pulse">|</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              I build modern web applications with cutting-edge technologies.
              Passionate about creating efficient, scalable, and user-friendly
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#projects")}
                className="px-8 py-3 bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white rounded-lg font-medium transition-colors shadow-lg"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#contact")}
                className="px-8 py-3 bg-white dark:bg-gray-800 text-green-700 dark:text-green-400 border-2 border-green-700 dark:border-green-600 rounded-lg font-medium hover:bg-green-50 dark:hover:bg-gray-700 transition-colors"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                // animate={{
                //   y: [0, -20, 0],
                // }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-green-400 to-green-700 dark:from-green-600 dark:to-green-900 flex items-center justify-center shadow-2xl"
              >
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={MyPhoto} 
                    alt="Mahmoud Magdy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-8 h-8 text-green-700 dark:text-green-400" />
      </motion.div>
    </section>
  );
}
