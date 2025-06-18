import { useState } from 'react'

function Footer() {

return (
    <>
 <section className="bg-gray-50 py-16 w-full">
            <div className="w-full px-4 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Unlock Your Secure Identity Today</h2>
              <p className="text-lg text-gray-600 mb-8">Ready to enhance your identity security? Contact us for a personalized demo or start using our system today!</p>
              <div className="flex justify-center items-center space-x-4 mb-12">
                <input type="email" placeholder="Your email here" className="px-6 py-3 w-64 border-2 border-gray-300 text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300">Subscribe</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600 mb-8">
              <div>
  <h4 className="font-semibold text-black">
    <a
      href="https://www.linkedin.com/in/spoorthi-s-971a4b201/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
      style={{ color: 'black', textDecoration: 'none' }}
    >
      LinkedIn
    </a>
  </h4>
</div>
<div>
  <h4 className="font-semibold text-black">
    <a
      href="https://github.com/Spoooo8  "
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline"
      style={{ color: 'black', textDecoration: 'none' }}
    >
      GitHub
    </a>
  </h4>
</div>
<div>
  <h4 className="font-semibold text-black">
    <a
      href="mailto:sspoorthi328@gmail.com"
      className="hover:underline"
      style={{ color: 'black', textDecoration: 'none' }}
    >
      Mail
    </a>
  </h4>
</div>

              </div>
              <div className="text-sm text-gray-500">
              <p>
  © 2025{' '}
  <a
    href="https://spoooo8.github.io/"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-gray-400"
  >
    Spoorthi S
  </a>
  . All rights reserved.
</p>

              </div>
            </div>
          </section>
    </>
);
};

export default Footer  ;