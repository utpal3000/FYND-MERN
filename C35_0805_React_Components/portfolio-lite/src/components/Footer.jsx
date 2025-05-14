// Suggested code may be subject to a license. Learn more: ~LicenseLog:2067677165.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2112979901.
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://github.com/utpal3000" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
          <a href="https://linkedin.com/in/utpalkantsahu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
          <a href="mailto:your.email@example.com" className="hover:text-gray-400">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
