import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';
import config from '../../config.js';

export default function Experience() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h1>
          <p className="text-xl text-gray-600">My career journey and professional accomplishments</p>
        </div>

        <div className="space-y-8">
          {config.experience.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{exp.role}</h2>
                    <p className="text-xl text-gray-600">{exp.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(exp.start).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {new Date(exp.end).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <div key={bulletIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <TrendingUp className="w-3 h-3 text-green-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Career Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">13+</div>
              <p className="text-lg">Years of Experience</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">₹550Cr</div>
              <p className="text-lg">Portfolio Managed</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">5</div>
              <p className="text-lg">States Managed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}