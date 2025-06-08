import cardData from "../data/cardData"; 

function LayoutCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
      {cardData.map(({ heading, desc, image }, idx) => (
        <div
          key={idx}
          className="border rounded-lg shadow-sm overflow-hidden"
        >
          {/* Image / Icon placeholder */}
          <div className="bg-gray-100 h-40 flex items-center justify-center">
            <span className="text-gray-400 text-sm"><img src={image}/></span>
          </div>

          {/* Text block */}
          <div className="p-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {heading}
            </h4>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LayoutCard;
