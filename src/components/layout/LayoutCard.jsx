import { useNavigate } from "react-router-dom";
import cardData from "../../data/layout/cardData";

function LayoutCard() {
  const navigate = useNavigate();
  const isLoggedIn = !!sessionStorage.getItem("access_token"); // ✅ Correct sessionStorage and key

  const handleCardClick = (link) => {
    if (isLoggedIn) {
      navigate(link); // ✅ Normal behavior when logged in
    } else {
      navigate("/login"); // ✅ Redirect to login when not logged in
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
      {cardData.map(({ heading, desc, image, link }, idx) => (
        <div
          key={idx}
          onClick={() => handleCardClick(link)}
          className="cursor-pointer border rounded-lg shadow-sm overflow-hidden flex flex-col transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03]"
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
      ))}
    </div>
  );
}

export default LayoutCard;
