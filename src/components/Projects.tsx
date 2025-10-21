import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Github, ExternalLink, X, Image as ImageIcon } from 'lucide-react';
import type { Project } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';


// const OWNER_PASSWORD = 'mahmoud123';

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [projects, setProjects] = useLocalStorage<Project[]>('portfolio-projects', [
    {
      id: '1',
      title: 'Opharmacy (Graduation Project)',
      description: 'O-pharmacy is a web app that helps you to order from pharmacies based on availability and location, users can create accounts, log in and verify their accounts using e-mail, they can search for the medicine, add the required medicine, make a request then the request will be sent automatically to multiple pharmacies based on the geographical location (in specific range), once a pharmacy accepts the request, it will be cancelled from all the other pharmacies and delivered to the customer.',
      images: ['/assets/opharmacy/Capture.PNG', '/assets/opharmacy/Capture1.PNG', '/assets/opharmacy/Capture2.PNG', '/assets/opharmacy/Capture3.PNG', '/assets/opharmacy/Capture4.PNG', '/assets/opharmacy/Capture5.PNG', '/assets/opharmacy/Capture6.PNG', '/assets/opharmacy/Capture7.PNG', '/assets/opharmacy/Capture8.PNG'],
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Bootstrap'],
      githubUrl: 'https://github.com/mahmoudmagdy98/o-pharmacy-customer',
      createdAt: Date.now(),
    },
    {
      id: '2',
      title: 'E-commerce Project',
      description: 'Developed a fully functional e-commerce platform with product listing, filtering, cart functionality, authentication, and admin product management. Built using a modular architecture with clean separation between frontend and backend responsibilities.',
      images: ['/assets/e-commerce/Capture.PNG', '/assets/e-commerce/Capture1.PNG', '/assets/e-commerce/Capture2.PNG', '/assets/e-commerce/Capture3.PNG'],
      technologies: ['Angular', 'Bootstrap', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/mahmoudmagdy98/ecommerce-front-angular-iti',
      createdAt: Date.now(),
    },
    {
      id: '3',
      title: 'ITI Final Project: Ktaby - Local book Swapping Platform ',
      description: 'Ktaby is a community-driven book swapping web application that enables users to exchange books based on interest and availability in their local area. The platform encourages reading and reduces book waste by promoting direct user-to-user exchange.',
      images: ['/assets/ktaby/1.jpg', '/assets/ktaby/2.jpg', '/assets/ktaby/3.jpg', '/assets/ktaby/4.jpg', '/assets/ktaby/5.jpg', '/assets/ktaby/6.jpg', '/assets/ktaby/7.jpg', '/assets/ktaby/8.jpg', '/assets/ktaby/9.jpg'],
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      githubUrl: 'https://github.com/mahmoudmagdy98/Ketaby-Front-end',
      createdAt: Date.now(),
    },
    {
      id: '4',
      title: 'Examination System ',
      description: 'An examination system designed for educational institutions such as schools, universities, and training centers. It supports various question types such as multiple-choice (MCQ) and essay questions. The system includes automatic grading for objective questions, with results displayed directly to the student upon completing the exam. It also features a login system, an exam timer, and student performance analysis after completion.',
      images: ['/assets/examination/Capture.PNG', '/assets/examination/Capture2.PNG', '/assets/examination/Capture3.PNG', '/assets/examination/Capture4.PNG', '/assets/examination/2025-08-08 (5).png'],
      technologies: ['HTML', 'CSS', 'Java Script'],
      githubUrl: 'https://github.com/mahmoudmagdy98/Examination-System',
      createdAt: Date.now(),
    },
  ]);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // const [formData, setFormData] = useState<Partial<Project>>({
  //   title: '',
  //   description: '',
  //   images: [''],
  //   technologies: [''],
  //   githubUrl: '',
  //   demoUrl: '',
  // });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const openProjectGallery = (project: Project) => {
    setSelectedProject(project);
  };

  // const updateArrayField = (field: 'images' | 'technologies', index: number, value: string) => {
  //   const array = [...(formData[field] || [])];
  //   array[index] = value;
  //   setFormData({ ...formData, [field]: array });
  // };

  // const addArrayField = (field: 'images' | 'technologies') => {
  //   setFormData({ ...formData, [field]: [...(formData[field] || []), ''] });
  // };

  // const removeArrayField = (field: 'images' | 'technologies', index: number) => {
  //   const array = [...(formData[field] || [])];
  //   array.splice(index, 1);
  //   setFormData({ ...formData, [field]: array });
  // };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-green-700 dark:bg-green-500 mx-auto mb-6"></div>


        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                onClick={() => openProjectGallery(project)}
                className="cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                //className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-600 group">
                  {project.images[0] ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                  {project.images.length > 1 && (
                    <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
                      +{project.images.length - 1} more
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-white bg-black bg-opacity-50 rounded-full p-2">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition-colors mt-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  )}

                  {/* <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                    <button
                      onClick={() => openEditModal(project)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white z-10"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{selectedProject.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedProject.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {selectedProject.images.map((image, index) => (
                    <div key={index} className="relative group cursor-pointer" onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(image);
                    }}>
                      <img
                        src={image}
                        alt={`${selectedProject.title} - Image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-black bg-opacity-50 p-2 rounded-full">
                          <ImageIcon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-4xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
              <img
                src={selectedImage}
                alt="Fullscreen view"
                className="max-w-full max-h-[90vh] mx-auto object-contain"
              />
            </div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {/* {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {editingProject ? 'Edit Project' : 'Add New Project'}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description *
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Images</label>
                  {formData.images?.map((image, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={image}
                        onChange={(e) => updateArrayField('images', index, e.target.value)}
                        placeholder="Image URL"
                        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                      {formData.images && formData.images.length > 1 && (
                        <button
                          onClick={() => removeArrayField('images', index)}
                          className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => addArrayField('images')}
                    className="text-green-700 dark:text-green-400 hover:underline text-sm"
                  >
                    + Add Image
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Technologies
                  </label>
                  {formData.technologies?.map((tech, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={tech}
                        onChange={(e) => updateArrayField('technologies', index, e.target.value)}
                        placeholder="Technology name"
                        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                      {formData.technologies && formData.technologies.length > 1 && (
                        <button
                          onClick={() => removeArrayField('technologies', index)}
                          className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => addArrayField('technologies')}
                    className="text-green-700 dark:text-green-400 hover:underline text-sm"
                  >
                    + Add Technology
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">GitHub URL</label>
                  <input
                    type="text"
                    value={formData.githubUrl}
                    onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Demo URL</label>
                  <input
                    type="text"
                    value={formData.demoUrl}
                    onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleSave}
                  className="flex-1 px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg transition-colors font-medium"
                >
                  {editingProject ? 'Update Project' : 'Add Project'}
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-900 dark:text-white rounded-lg transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )} */}
      </AnimatePresence>
    </section>
  );
}
