import LayoutCard from "./LayoutCard";


function LayoutCardSec({heading,subHeading,desc }){
  return (
    <>
          <section className="bg-white py-16 border-t border-gray-200 w-full">
            <div className="w-full px-4">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Robust Identity Solutions for <br/>Modern Applications
                </h2>
                <p className="text-gray-600">
                  Our platform offers seamless integration and security, similar to industry leaders like Okta and Keycloak. Experience powerful identity management with user-friendly features.
                </p>
              </div>
              <LayoutCard/>
            </div>
          </section>
    </>
);
};

export default LayoutCardSec  ;