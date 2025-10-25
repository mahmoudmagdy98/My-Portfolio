import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import type { ContactFormData } from "../types";



export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/mahmoudmagdy98",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mahmoud-magdy-taghian/",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "Email",
      url: "mailto:mmataghian@gmail.com",
      icon: Mail,
      color: "hover:text-red-600",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+201031295851",
      icon: MessageSquare,
      color: "hover:text-green-600",
    },
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // تحضير البيانات
    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "264c3573-e7ff-4f85-a0e8-f0076c9dd8ec"); // 🔑 حط الـ access_key بتاعك هنا
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();
      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
        setStatusMessage("✅ Message sent successfully!");
      } else {
        setStatusMessage("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("⚠️ Network error, please check your connection.");
    }

    setIsSubmitting(false);
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-green-700 dark:bg-green-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`w-full px-4 py-3 border ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-700 dark:focus:ring-green-500`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`w-full px-4 py-3 border ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-700 dark:focus:ring-green-500`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={5}
                  className={`w-full px-4 py-3 border ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-700 dark:focus:ring-green-500`}
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white rounded-lg font-medium transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {statusMessage && (
                <p className="text-center mt-4 text-green-600 dark:text-green-400">
                  {statusMessage}
                </p>
              )}

             
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Connect With Me
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out through any of these platforms. I'm always
              open to discussing new projects, creative ideas, or opportunities
              to be part of your visions.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=mmataghian@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all ${link.color}`}
                  >
                    <Icon className="w-8 h-8 text-gray-700 dark:text-gray-300 mb-3 transition-colors" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {link.name}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-green-50 dark:bg-green-900 rounded-lg">
              <h4 className="text-lg font-bold text-green-900 dark:text-green-100 mb-2">
                Quick Response
              </h4>
              <p className="text-green-800 dark:text-green-200 text-sm">
                I typically respond within 24 hours. For urgent matters, please
                reach out via WhatsApp or Email.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
