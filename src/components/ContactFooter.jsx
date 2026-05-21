import React, { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <footer id="contact" className="bg-primary text-white pt-24 pb-12 mt-20 rounded-t-[40px]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-b border-white/20 pb-16 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side – heading & info */}
            <div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                Got a problem<br />worth solving?
              </h2>
              <div className="text-white/80 space-y-3 mt-8">
                <p className="font-medium text-white text-lg mb-4">Stay connected</p>
                <p>prerit.gautam2064@gmail.com</p>
                <div className="pt-4 flex gap-4">
                  <a href="https://www.linkedin.com/in/prerit-gautam-b085bb294/" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/30">LinkedIn</a>
                  <a href="https://github.com/Prerit-Gautam" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/30">GitHub</a>
                  <a href="https://www.instagram.com/prerit12gautam/" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/30">Instagram</a>
                </div>
              </div>
            </div>

            {/* Right side – contact form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
              >
                {submitted ? (
                  <>Message sent! ✓</>
                ) : (
                  <>
                    Send message <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Prerit Gautam. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
