import { GraduationCap, BookOpen, Award } from 'lucide-react';
import config from '../../config.js';

export default function Education() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Education</h1>
          <p className="text-xl text-gray-600">My academic background and qualifications</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              <GraduationCap className="inline w-8 h-8 mr-2 text-blue-600" />
              Academic Qualifications
            </h2>
            <div className="space-y-6">
              {config.education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center mb-2">
                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-1">{edu.school}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{edu.year}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">CGPA: {edu.cgpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              <Award className="inline w-8 h-8 mr-2 text-green-600" />
              Professional Certifications
            </h2>
            <div className="space-y-4">
              {config.certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{cert}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Educational Philosophy</h2>
          <p className="text-lg leading-relaxed">
            My educational journey has been focused on building a strong foundation in financial services and technology. 
            I believe in continuous learning and staying updated with industry trends and best practices. 
            My academic background in both technical and business domains has provided me with a unique perspective 
            that I bring to my professional work.
          </p>
        </div>
      </div>
    </div>
  );
}