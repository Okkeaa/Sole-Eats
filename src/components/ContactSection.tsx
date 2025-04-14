
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="solo-section bg-solo-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 bg-solo-purple/20 px-4 py-2 rounded-full">
            <MessageSquare className="text-solo-purple-light mr-2" size={18} />
            <span className="text-solo-purple-light font-solo">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="glow-text">Contact</span> Us
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions or special requests? We'd love to hear from you. Reach out and our team will respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="solo-card p-8">
            <h3 className="text-2xl font-bold mb-6 font-solo">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-solo">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="solo-input w-full"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2 font-solo">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="solo-input w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white mb-2 font-solo">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="solo-input w-full"
                  placeholder="What is this regarding?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2 font-solo">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="solo-input w-full resize-none"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="solo-button w-full flex items-center justify-center gap-2 animate-glow"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8 font-solo">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="bg-solo-card p-3 rounded-full border border-solo-purple/30">
                  <MapPin className="text-solo-purple" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-solo font-semibold text-white mb-1">Our Location</h4>
                  <p className="text-gray-300">
                    123 Solo Street, Leveling District<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-solo-card p-3 rounded-full border border-solo-purple/30">
                  <Mail className="text-solo-purple" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-solo font-semibold text-white mb-1">Email Us</h4>
                  <p className="text-gray-300">
                    info@soloeats.com<br />
                    reservations@soloeats.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-solo-card p-3 rounded-full border border-solo-purple/30">
                  <Phone className="text-solo-purple" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-solo font-semibold text-white mb-1">Call Us</h4>
                  <p className="text-gray-300">
                    +1 (555) 123-4567<br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="solo-card p-6 mt-10">
              <h4 className="text-lg font-solo font-semibold text-white mb-4">Business Hours</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Thursday</span>
                  <span className="text-white font-medium">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Friday - Saturday</span>
                  <span className="text-white font-medium">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-white font-medium">12:00 PM - 9:00 PM</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-solo-purple/20">
                <p className="text-solo-purple-light text-sm font-solo">
                  * Special hours may apply on holidays
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
