import threeSecData from "../../data/layout/threeSecData";
function LayoutSetUp({ heading, subHeading, desc }) {
  return (
    <section className="bg-white py-16 border-t border-gray-300 w-full">
      <div className="w-full px-4">
        <div className="mb-10">
          <p className="text-sm text-gray-500 font-semibold mb-2">Quick Start</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Set Up OAuth2 Authentication in Just a Few Steps
          </h2>
          <p className="text-gray-600">
            From choosing the right grant type to generating tokens, our guide helps you secure your application with OAuth2, role-based access control, and robust API protection.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {threeSecData.map(({ title, desc }, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
                <p className="text-sm text-gray-600 mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LayoutSetUp;
