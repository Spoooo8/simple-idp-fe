import { useState } from 'react'
import LearnButton from './LearnButton';

function LayoutSecA({heading,subHeading,desc, desca, descb }){
  return (
    <>
        <section className="bg-white text-gray-800 py-20 px-4 w-full">
            <div className="w-full grid md:grid-cols-2 gap-10 items-center">
              <div className="aspect-square w-full bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <img src="https://via.placeholder.com/400" alt="Google Login Preview" className="w-full h-full object-cover"/>
              </div>
              <div>
                <p className="text-sm text-purple-600 font-semibold mb-2">{heading}</p>
                <h2 className="text-3xl font-bold mb-4">{subHeading}</h2>
                <p className="mb-6 text-gray-600">
                  {desc}
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-800">Flexible Options</h3>
                    <p className="text-sm text-gray-600">{desca}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Robust Security</h3>
                    <p className="text-sm text-gray-600">{descb}</p>
                  </div>
                </div>
              <LearnButton/>
              </div>
            </div>
          </section>
    </>
);
};

export default LayoutSecA  ;