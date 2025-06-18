import { useState } from 'react'
import LearnButton from '../general/LearnButton';

function LayoutDesc({heading,subHeading,desc, desca, descb, image,titlea, titleb ,link,}){
  return (
    <>
        <section className="bg-white text-gray-800 py-20 px-4 w-full">
            <div className="w-half grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-square w-130 h-130 bg-gray-200 rounded-lg overflow-hidden shadow-md ml-25">
                <img src={image} alt="Google Login Preview" className="w-full h-full object-cover"/>
              </div>
              
                <div className="-ml-6">
                  <div className="mb-4 flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 20l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 12V4l9 5-9 5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600">{heading}</h3>
                </div>
                <h2 className="text-3xl font-bold mb-4">{subHeading}</h2>
                <p className="mb-6 text-gray-600">
                  {desc}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-800">{titlea}</h3>
                    <p className="text-sm text-gray-600">{desca}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{titleb}</h3>
                    <p className="text-sm text-gray-600">{descb}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
);
};

export default LayoutDesc  ;