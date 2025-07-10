import { Linkedin, Github, Mail, Phone } from "lucide-react";
import config from "../config.js";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{config.name}</h3>
            <p className="text-gray-400">{config.title}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a
                  href={`mailto:${config.contact.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {config.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a
                  href={`tel:${config.contact.phone}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {config.contact.phone}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {config.social.linkedin && (
                <a
                  href={config.social.linkedin}
                  className="hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {config.social.github && (
                <a
                  href={config.social.github}
                  className="hover:text-blue-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 space-y-2">
          <p>
            &copy; {new Date().getFullYear()} {config.name}. All rights
            reserved.
          </p>
          <p>
            Designed and developed by{" "}
            <a
              href="https://github.com/akhiljakka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Akhil Jakka
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
