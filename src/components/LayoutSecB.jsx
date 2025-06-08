import { useState } from 'react'
import LearnButton from './LearnButton';

function LayoutSecB({heading,subHeading,desc }){
  return (
    <>
        
          <section className="bg-white py-16 border-t border-gray-300 w-full">
            <div className="w-full px-4 flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-start">
                <div className="mb-4 flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 20l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 12V4l9 5-9 5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600">{heading}</h3>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{subHeading}</h2>
                <p className="text-gray-600 mb-6">
                    {desc}
                </p>
                <LearnButton/>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-square w-full bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <img src="https://via.placeholder.com/400x400" alt="Google Login Preview" className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>
          </section>
    </>
);
};

export default LayoutSecB  ;