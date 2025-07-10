import { User, Target, Award } from 'lucide-react';
import config from '../../config.js';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600">Get to know more about my background and expertise</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={config.photo}
              alt={config.name}
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              <User className="inline w-8 h-8 mr-2 text-blue-600" />
              Professional Profile
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {config.objective}
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600"><span className="font-medium">Nationality:</span> {config.personal.nationality}</p>
                </div>
                <div>
                  <p className="text-gray-600"><span className="font-medium">Languages:</span> {config.personal.languages.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            <Target className="inline w-8 h-8 mr-2 text-blue-600" />
            Professional Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {config.summary.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8">
            <Award className="inline w-8 h-8 mr-2" />
            Hobbies & Interests
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {config.hobbies.map((hobby, index) => (
              <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <p className="font-medium">{hobby}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}