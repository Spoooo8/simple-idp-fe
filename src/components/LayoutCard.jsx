import cardData from "../data/cardData"; 
import { Link } from "react-router-dom";

function LayoutCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
      {cardData.map(({ heading, desc, image, link }, idx) => (
        <Link
          to={link}
          key={idx}
          className="block no-underline focus:outline-none hover:no-underline"
          style={{ all: 'unset' }}
        >
          <div
            className="border rounded-lg shadow-sm overflow-hidden flex flex-col transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03]"
            style={{ height: '320px' }}
          >
            <div className="bg-white h-40 flex items-center justify-center flex-shrink-0">
              <img
                src={image}
                alt={heading}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="p-4 flex-grow flex flex-col">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {heading}
              </h4>
              <p className="text-sm text-gray-600 flex-grow">
                {desc}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default LayoutCard;
