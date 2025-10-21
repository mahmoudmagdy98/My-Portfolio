import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Modern Academy ',
      year: '2017 - 2021',
      description: 'Focused on software engineering and computer science.',
    },
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      period: '2023 - Present',
      description: 'Developing scalable web applications using React, Angular, Node.js, and MongoDB.',
    },
    // {
    //   title: 'Frontend Developer',
    //   company: 'Digital Agency',
    //   period: '2021 - 2022',
    //   description: 'Built responsive and interactive user interfaces for various clients.',
    // },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-green-700 dark:bg-green-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in building modern web applications. I love turning
            complex problems into simple, and intuitive solutions. With a strong foundation in both frontend
            and backend technologies, I create seamless user experiences backed by robust server-side logic.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <GraduationCap className="w-8 h-8 text-green-700 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                  <p className="text-green-700 dark:text-green-400 font-medium mb-1">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{edu.year}</p>
                  <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <Briefcase className="w-8 h-8 text-green-700 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{exp.title}</h4>
                  <p className="text-green-700 dark:text-green-400 font-medium mb-1">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="/cv/Mahmoud Magdy Taghian.pdf"
            download="Mahmoud_Magdy_Taghian_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-3 bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white rounded-lg font-medium transition-colors shadow-lg cursor-pointer"
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
