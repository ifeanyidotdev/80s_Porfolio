import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-purple-400" />,
      text: "San Francisco, CA"
    },
    {
      icon: <Phone className="h-6 w-6 text-purple-400" />,
      text: "+1 (555) 123-4567"
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-400" />,
      text: "contact@johndoe.dev"
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-container">
        <h2 className="section-title" data-text="Contact">Contact</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-xl text-gray-300 mb-8">
              Have a project in mind or want to discuss collaboration opportunities? I'd love to hear from you! Fill out the form or reach me through any of the contact methods listed.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-500/50">
                    {info.icon}
                  </div>
                  <span className="text-lg">{info.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="retro-card p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-purple-900/30 border border-purple-500/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-purple-900/30 border border-purple-500/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-purple-900/30 border border-purple-500/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-purple-900/30 border border-purple-500/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
                  placeholder="Hello, I'd like to discuss a project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="neon-button w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {submitMessage && (
                <div className="text-center text-green-400 animate-pulse">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;