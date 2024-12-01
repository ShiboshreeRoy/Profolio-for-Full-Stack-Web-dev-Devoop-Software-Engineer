import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-16">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
                <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                  <Mail size={24} />
                  <span>shiboshreeroy169@gmail.com</span>
                </div>
                <div className="flex gap-6">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;