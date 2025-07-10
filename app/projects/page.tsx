import { FolderOpen, Trophy, Calendar, Star } from 'lucide-react';
import config from '../../config.js';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects & Achievements</h1>
          <p className="text-xl text-gray-600">My notable accomplishments and key projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {config.achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Achievement {index + 1}</h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{achievement}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            <FolderOpen className="inline w-8 h-8 mr-2 text-blue-600" />
            Key Projects
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Digital Transformation Initiative</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>2024 - Present</span>
              </div>
              <p className="text-gray-700 mb-4">
                Led the implementation of digitalized underwriting processes across multiple regions, 
                resulting in a 40% reduction in turnaround time and improved customer satisfaction.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Process Improvement</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Digital Transformation</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Team Leadership</span>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Portfolio Growth Strategy</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>2020 - 2024</span>
              </div>
              <p className="text-gray-700 mb-4">
                Developed and executed strategic initiatives that grew the business portfolio from ₹60Cr to ₹550Cr 
                while maintaining high quality standards and regulatory compliance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Strategic Planning</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Business Growth</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Risk Management</span>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Regional Operations Management</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>2024 - Present</span>
              </div>
              <p className="text-gray-700 mb-4">
                Successfully managed Regional & Area Credit Managers across 5 states, achieving 95% compliance 
                with regulatory standards and optimizing operational efficiency.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Team Management</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Operations</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Compliance</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">
            <Star className="inline w-8 h-8 mr-2" />
            Impact & Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">40%</div>
              <p className="text-lg">TAT Reduction</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <p className="text-lg">Compliance Rate</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">817%</div>
              <p className="text-lg">Portfolio Growth</p>
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