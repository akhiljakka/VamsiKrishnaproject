import { Linkedin, Github, Mail, Phone, Download } from 'lucide-react';
import config from '../config.js';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <img
              src={config.photo}
              alt={config.name}
              className="w-48 h-48 rounded-full mx-auto mb-8 shadow-2xl object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {config.name}
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-600 mb-8">
            {config.title}
          </p>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            {config.objective}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href={`mailto:${config.contact.email}`}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </a>
            
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            {config.social.linkedin && (
              <a
                href={config.social.linkedin}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            )}
            {config.social.github && (
              <a
                href={config.social.github}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <Github className="w-8 h-8" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}